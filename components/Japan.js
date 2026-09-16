import React, { useState, useEffect, useRef } from 'react';
import { generateComplimentaryColors, generateRandomColorByDate } from './colors.js';

const ART_COLUMNS = 60;
const ART_ROWS = 24;

function Art({ blobChars, blobColors }) {
  const [blobPosition, setBlobPosition] = useState({ x: 15, y: 12 });
  const [trailMap, setTrailMap] = useState(() => Array.from({ length: ART_ROWS }, () => new Array(ART_COLUMNS).fill(0)));
  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);
  const frameCountRef = useRef(0);
  const velocityRef = useRef({ x: 1.5, y: 1.5 });
  const directionChangeRef = useRef(0);

  useEffect(() => {
    // Use requestAnimationFrame for smoother animation
    const animate = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = timestamp - lastTimeRef.current;
      
      // Limit frame rate to prevent performance issues
      if (deltaTime > 50) { // Cap at ~20fps
        lastTimeRef.current = timestamp;
        frameCountRef.current++;
        
        setBlobPosition(prevPosition => {
          // Add randomness to movement
          if (Math.random() < 0.02) { // 2% chance to change direction each frame
            const angle = Math.random() * Math.PI * 2;
            const speed = 1.5 + Math.random() * 1.0; // Random speed between 1.5 and 2.5
            velocityRef.current = {
              x: Math.cos(angle) * speed,
              y: Math.sin(angle) * speed
            };
          }
          
          // Calculate new position
          let newX = prevPosition.x + velocityRef.current.x;
          let newY = prevPosition.y + velocityRef.current.y;
          
          // Bounce off borders
          if (newX <= 0 || newX >= ART_COLUMNS - 1) {
            velocityRef.current.x = -velocityRef.current.x;
            newX = Math.max(0, Math.min(ART_COLUMNS - 1, newX));
          }
          
          if (newY <= 0 || newY >= ART_ROWS - 1) {
            velocityRef.current.y = -velocityRef.current.y;
            newY = Math.max(0, Math.min(ART_ROWS - 1, newY));
          }

          // Update blob position and trail fade in one go
          setTrailMap(prevMap => prevMap.map((row, y) => row.map((cell, x) => {
            const distance = Math.hypot(newX - x, newY - y);
            // Slower fade for longer trails
            const fade = Math.max(0, cell - 0.01);
            // Create a more natural-looking blob with smoother falloff
            return distance < 3 ? Math.min(cell + 0.15, 1) : fade;
          })));

          return { x: newX, y: newY };
        });
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Clean up the animation on component unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const artStyle = {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    whiteSpace: 'pre',
    lineHeight: 1.1,
    fontSize: 'clamp(7px, 1vw, 10px)',
    letterSpacing: 0,
    fontVariantLigatures: 'none',
    height: '300px',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    padding: '10px',
    boxSizing: 'border-box',
  };
  
  // Convert the trailMap to ASCII art
  const generateAsciiArt = (trailMap) => {
    const escapeHtml = (character) => character
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

    return trailMap.map((row) =>
      row.map((cell, x) => {
        if (cell > 0) {
          // Create a more dynamic color selection based on position and opacity
          const opacityIndex = Math.floor(cell * (blobColors.length - 1));
          const color = blobColors[opacityIndex];
          const opacity = Math.floor(cell * 255).toString(16).padStart(2, '0');
          
          // Create a more interesting pattern with character selection
          const charIndex = Math.floor((cell * (blobChars.length - 1)) + (x * 0.1) % blobChars.length) % blobChars.length;
          const char = blobChars[charIndex];
          
          return `<span style="color:${color}${opacity};">${escapeHtml(char)}</span>`;
        }
        return ' ';
      }).join('') + '\n'
    ).join('');
  };

  const asciiArt = generateAsciiArt(trailMap);

  return <div style={artStyle} dangerouslySetInnerHTML={{ __html: asciiArt }} />;
}

function Japan() {
  // Simple numbers and symbols for the blob
  const customChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '=', '#', '@', '$', '%', '&', '!', '?', '.', ',', ';', ':', '"', "'", '(', ')', '[', ']', '{', '}', '<', '>', '|', '\\', '^', '~', '`'];
  
  const baseColor = generateRandomColorByDate(); // Reflects the current date in the base color
  const complimentaryColors = generateComplimentaryColors(baseColor); // Color scheme based on base color

  return (
    <div className="w-full h-full overflow-hidden">
      <Art blobChars={customChars} blobColors={complimentaryColors} />
    </div>
  );
}

export default Japan;
