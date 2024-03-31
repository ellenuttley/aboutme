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