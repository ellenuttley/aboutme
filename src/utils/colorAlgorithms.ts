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