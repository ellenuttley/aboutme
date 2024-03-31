'use server'

type RGB = {
  red: number;
  green: number;
  blue: number;
  [key: string]: number;
 };

export const hexToRgb = (hex: string): RGB => { 
    let red = parseInt(hex.slice(1, 3), 16),
        green = parseInt(hex.slice(3, 5), 16),
        blue = parseInt(hex.slice(5, 7), 16);

    return { red, green, blue };
 };

export const rgbToHex = (r: number, g: number, b: number): string => { 
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
 };

export const whiteAlgorithm = (rgb: RGB): string => { 
    let lastDigits = [rgb.red, rgb.green, rgb.blue];
    for (let i = 0; i < lastDigits.length; i++) {
    lastDigits[i] = (lastDigits[i] % 10);
    }
    lastDigits.sort((a, b) => a - b);

    let colorMapping = ['red', 'green', 'blue'];
    colorMapping.sort((a, b) => rgb[b] - rgb[a]);

    const result: RGB = {red: 0, green: 0, blue: 0};
    for (let i = 0; i < colorMapping.length; i++) {
        result[colorMapping[i] as keyof RGB] = (255 - lastDigits[i]);
    }

    return rgbToHex(result.red, result.green, result.blue);
 };

export const blackAlgorithm = (rgb: RGB): string => { 
    let colorMapping = ['red', 'green', 'blue'];
    colorMapping.sort((a, b) => rgb[b] - rgb[a]);
    let result: RGB = {red: 0, green: 0, blue: 0};

    for (let i = 0; i < colorMapping.length; i++) {
      let color = colorMapping[i];
      let valueStr = rgb[color].toString();

      // If it's the first color (the largest), take the first two digits
      if (i === 0) {
        result[color as keyof RGB] = Number(valueStr.slice(0, 2));
      }
      // Otherwise, take only the first digit
      else {
        result[color as keyof RGB] = Number(valueStr.slice(0, 1));
      }
    }

    return rgbToHex(result.red, result.green, result.blue);
 };
