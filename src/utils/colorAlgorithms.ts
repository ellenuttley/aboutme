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

 export const secondaryAlgorithm1 = (rgb: RGB): string => { 
    let red = Math.ceil(rgb.red / 2);
    let green = Math.ceil(rgb.green / 2);
    let blue = Math.ceil(rgb.blue / 2);

    return rgbToHex(red, green, blue);
 };

 export const secondaryAlgorithm2 = (whiteColor: string, secondaryColor1: string): string => { 
    let white = hexToRgb(whiteColor);
    let secondary1 = hexToRgb(secondaryColor1)

    let red = white.red - secondary1.red;
    let green = white.green - secondary1.green;
    let blue = white.blue - secondary1.blue;

    return rgbToHex(red, green, blue);
  };

  export const secondaryAlgorithm3 = (whiteColor: string, rgb: RGB): string => { 
    
    let white = hexToRgb(whiteColor);

    // Create a color mapping array
    let colorMapping = ['red', 'green', 'blue'];

    // Sort the color mapping based on the values in the rgb object
    colorMapping.sort((a, b) => rgb[b] - rgb[a]);

    // Create a new object to hold the final result
    let result: RGB = {red: 0, green: 0, blue: 0};

    // Iterate over the sorted color mapping
    for (let i = 0; i < colorMapping.length; i++) {
      let color = colorMapping[i];
      let valueStr = rgb[color].toString();

      // If it's the first color (the largest), take the first digit
      if (i === 0) {
        result[color as keyof RGB] = Number(valueStr.slice(0, 1)) * 100;
        console.log(result);
      }

      result[color as keyof RGB] += white[color] - rgb[color];
    }

    return rgbToHex(result.red, result.green, result.blue);

   };