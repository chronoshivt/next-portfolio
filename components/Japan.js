import React, { useState, useEffect } from 'react';
import { generateComplimentaryColors, generateRandomColorByDate } from './colors.js';

function Art({ blobChars, blobColors }) {
  const [blobPosition, setBlobPosition] = useState({ x: 25, y: 15 });
  const [trailMap, setTrailMap] = useState(() => Array.from({ length: 30 }, () => new Array(100).fill(0)));

  useEffect(() => {
    const speed = Math.floor(Math.random() * (4 - 1 + 1)) + 1 // Constant speed for movement
    const interval = setInterval(() => {
      setBlobPosition(prevPosition => {
        const angle = Math.random() * Math.PI * 2; // Generates random movement direction
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;
        const newX = Math.min(Math.max(prevPosition.x + vx, 0), 99);
        const newY = Math.min(Math.max(prevPosition.y + vy, 0), 29);

        // Update blob position and trail fade in one go
        setTrailMap(prevMap => prevMap.map((row, y) => row.map((cell, x) => {
          const distance = Math.hypot(newX - x, newY - y);
          const fade = Math.max(0, cell - 0.02);
          return distance < 3 ? Math.min(cell + 0.2, 1) : fade;
        })));

        return { x: newX, y: newY };
      });
    }, 100);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const artStyle = {
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
    lineHeight: '8px',
    fontSize: '16px',
    letterSpacing: '2px',
    height: '300px',
  };
  // Convert the trailMap to ASCII art
  const generateAsciiArt = (trailMap) => {
    return trailMap.map((row) =>
      row.map((cell, x) => {
        if (cell > 0) {
          const opacityIndex = Math.floor(cell * (blobColors.length - 1));
          const color = blobColors[opacityIndex];
          const opacity = Math.floor(cell * 255).toString(16).padStart(2, '0');
          const charIndex = Math.floor(cell * (blobChars.length - 1));
          const char = blobChars[charIndex];
          return `<span style="color:${color}${opacity};">${char}</span>`;
        }
        return ' ';
      }).join('') + '\n'
    ).join('');
  };


  const asciiArt = generateAsciiArt(trailMap);

  return <div style={artStyle} dangerouslySetInnerHTML={{ __html: asciiArt }} />;
}

function Japan() {
  const customChars = ['L', '▄', '^', '3', '\\', '/', 'e'];
  const baseColor = generateRandomColorByDate(); // Reflects the current date in the base color
  const complimentaryColors = generateComplimentaryColors(baseColor); // Color scheme based on base color

  return (
    <div className="w-full h-full overflow-hidden">
      <Art blobChars={customChars} blobColors={complimentaryColors} />
    </div>
  );
}

export default Japan;
