/* eslint-disable no-bitwise */
export const colorIsBright = (color: string): boolean => {
    const hexColorPattern = /^#[0-9A-Fa-f]{6}$/;

    if (typeof color !== 'string' || !hexColorPattern.test(color)) {
        throw new Error('Function colorIsBright expects a hex color string argument in the format #RRGGBB');
    }

    const r = parseInt(color.slice(1, 3), 16); // extract red
    const g = parseInt(color.slice(3, 5), 16); // extract green
    const b = parseInt(color.slice(5, 7), 16); // extract blue

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    return luma > 160;
};

export const getHexColor = (colorName: string): string => {
    const fakeDiv = document.createElement('div');
    fakeDiv.style.color = colorName;
    document.body.appendChild(fakeDiv);

    const cssColor = window.getComputedStyle(fakeDiv).color;
    document.body.removeChild(fakeDiv);

    const rgbMatch = cssColor.match(/\b(\d+)\b/g);

    if (!rgbMatch) {
        throw new Error('Invalid CSS color');
    }

    const [red, green, blue] = rgbMatch.map(Number);
    // eslint-disable-next-line no-bitwise
    const hexColor = `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1).toUpperCase()}`;

    return hexColor;
};

export const hexToRgb = (hex:string): number[] => {
        const bigInt = parseInt(hex.slice(1), 16);
        const r = (bigInt >> 16) & 255;
        const g = (bigInt >> 8) & 255;
        const b = bigInt & 255;
        return [r, g, b];
};
