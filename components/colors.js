function hexToHSL(hex) {
    let r, g, b;
    if (hex.length === 4) {
        [r, g, b] = [1, 2, 3].map(i => parseInt(hex[i] + hex[i], 16));
    } else if (hex.length === 7) {
        [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
    }

    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h, s, l = (cmax + cmin) / 2;

    if (delta === 0) h = 0;
    else {
        h = ((cmax === r) ? ((g - b) / delta) % 6 : (cmax === g) ? (b - r) / delta + 2 : (r - g) / delta + 4) * 60;
        if (h < 0) h += 360;
    }

    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
    return [Math.round(h), +(s * 100).toFixed(1), +(l * 100).toFixed(1)];
}

function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

export function generateComplimentaryColors(hex) {
    let [h, s, l] = hexToHSL(hex);

    // Define a range for the variations
    let variationRange = 15; // degrees of variation in hue for a subtle change

    // Generate shades (darker versions of the same hue)
    let shades = [];
    for (let i = 1; i <= 3; i++) {
        shades.push(hslToHex(h, s, Math.max(l - i * variationRange, 0)));
    }

    // Generate tints (lighter versions of the same hue)
    let tints = [];
    for (let i = 1; i <= 3; i++) {
        tints.push(hslToHex(h, s, Math.min(l + i * variationRange, 100)));
    }

    // Generate analogous colors (colors near the hue on the color wheel)
    let analogous = [];
    for (let i = -1; i <= 1; i++) {
        if (i !== 0) {
            let analogousHue = (h + i * variationRange + 360) % 360;
            analogous.push(hslToHex(analogousHue, s, l));
        }
    }

    // Generate a complimentary color (a color opposite on the color wheel)
    let complimentary = hslToHex((h + 180) % 360, s, l);

    // Construct the final palette
    let palette = [...shades, hex, ...tints, complimentary, ...analogous];

    // Sort the colors by their lightness values to have a nice gradient
    palette.sort((a, b) => {
        const [, , lightA] = hexToHSL(a);
        const [, , lightB] = hexToHSL(b);
        return lightA - lightB;
    });

    return palette;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function generateRandomColorByDate() {
    const seed = Date.now();
    const random = (seed, max, factor = 1) => Math.floor((Math.sin(seed) * 10000 - Math.floor(Math.sin(seed) * 10000)) * max * factor);
    
    // Generate neon colors by ensuring at least one channel is very bright (close to 255)
    // and at least one channel is very low (close to 0)
    const r = random(seed, 256);
    const g = random(seed + 1, 256);
    const b = random(seed + 2, 256);
    
    // Find the maximum and minimum values
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    
    // If the contrast is not high enough, boost it
    if (max - min < 150) {
        // Boost the brightest channel to near maximum
        if (max === r) return `#ff${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        if (max === g) return `#${r.toString(16).padStart(2, '0')}ff${b.toString(16).padStart(2, '0')}`;
        if (max === b) return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}ff`;
    }
    
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// Add a new function to generate a palette of neon colors
export function generateNeonPalette(count = 5) {
    const palette = [];
    const baseSeed = Date.now();
    
    for (let i = 0; i < count; i++) {
        palette.push(generateRandomColorByDate(baseSeed + i));
    }
    
    return palette;
}

// Example usage:
// const color = generateRandomColorByDate();
// console.log(color);

// const originalColor = '#00ff00';
// const complimentaryScheme = generateComplimentaryColors(originalColor);
// console.log(complimentaryScheme);
