'use client'

import React from "react";
import { useState, ChangeEvent } from 'react';

// Define a type for the RGB color
type RGB = {
  red: number;
  green: number;
  blue: number;
  [key: string]: number;
};

const getRandomColor = (): string => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      const random = Math.random() * 16 | 0;
      color += (i === 0 ? random & 0x7 : random).toString(16);
    }
    return color;
  };

function ColorPalette() {
  const [primaryColor, setPrimary] = useState<string>(getRandomColor());;
  const [whiteColor, setWhite] = useState<string>('#FFFFFF');
  const [blackColor, setBlack] = useState<string>('#333333');
  const [secondaryColor, setSecondary] = useState<string>('#6F3019');
  const [transitionColor, setTransition] = useState<string>('#8FC9DD');

  // Function to convert hex color to RGB
  const hexToRgb = (hex: string): RGB => {
    let red = parseInt(hex.slice(1, 3), 16),
        green = parseInt(hex.slice(3, 5), 16),
        blue = parseInt(hex.slice(5, 7), 16);

    return { red, green, blue };
  };

  // Function to convert RGB code back to hex
  const rgbToHex = (r: number, g: number, b: number): string => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('working');
    setPrimary(e.target.value);
    let rgb = hexToRgb(e.target.value);

    let white = whiteAlgorithm(rgb);
    let black = blackAlgorithm(rgb);
    let secondary1 = secondaryAlgorithm1(rgb);
    let secondary2 = secondaryAlgorithm2(white, secondary1)
    let secondary3 = secondaryAlgorithm3(white, black);
    let secondary4 = secondaryAlgorithm4(rgb)
    let secondary5 = secondaryAlgorithm5(rgb)
    let secondary6 = secondaryAlgorithm6(secondary5)

    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let secondary = eval('secondary' + randomNumber);
    let transition = transitionAlgorithm(rgb, secondary);

    setWhite(white);
    setBlack(black);
    setSecondary(secondary);
    setTransition(transition);

    return rgb;
  };

  const generateRandomPalette = () => {
    let newColor = getRandomColor();
    setPrimary(newColor);
    handleColorChange({ target: { value: newColor } } as ChangeEvent<HTMLInputElement>);
  };

  const handleSecondaryColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSecondary(e.target.value);
    let transition = transitionAlgorithm(hexToRgb(primaryColor), secondaryColor);
    setTransition(transition);
  };  

  const secondaryAlgorithm1 = (rgb: RGB): string => {
    let red = Math.ceil(rgb.red / 2);
    let green = Math.ceil(rgb.green / 2);
    let blue = Math.ceil(rgb.blue / 2);

    return rgbToHex(red, green, blue);
  };

  const secondaryAlgorithm2 = (whiteColor: string, secondaryColor: string): string => {
    let white = hexToRgb(whiteColor);
    let secondary = hexToRgb(secondaryColor)

    let red = white.red - secondary.red;
    let green = white.green - secondary.green;
    let blue = white.blue - secondary.blue;

    return rgbToHex(red, green, blue);
  };

  const secondaryAlgorithm3 = (whiteColor: string, blackColor: string): string => {
    let white = hexToRgb(whiteColor);
    let black = hexToRgb(blackColor);

    let red = Math.ceil(white.red * 0.75) + black.red;
    let green = Math.ceil(white.green * 0.75) + black.green;
    let blue = Math.ceil(white.blue * 0.75)+ + black.blue;

    return rgbToHex(red, green, blue);
};

  const secondaryAlgorithm4 = (rgb: RGB): string => {
    let colorMapping = ['red', 'green', 'blue'];
    colorMapping.sort((a, b) => rgb[b] - rgb[a]);
    let result: RGB = {red: 0, green: 0, blue: 0};

    for (let i = 0; i < colorMapping.length; i++) {
      let color = colorMapping[i];
      let valueStr = rgb[color].toString();

      if (i === 0) {
        result[color as keyof RGB] = Number(valueStr.slice(0, 2));
      }
      else {
        result[color as keyof RGB] = Number(valueStr.slice(0, 3));
      }
    }

    return rgbToHex(result.red, result.green, result.blue);
  };

  const secondaryAlgorithm5 = (rgb: RGB): string => {
    let red = Number(rgb.red.toString().split("").reverse().join(""));
    let blue = Number(rgb.blue.toString().split("").reverse().join(""));
    let green = Number(rgb.green.toString().split("").reverse().join(""));
    return rgbToHex(red, green, blue);
  };

  const secondaryAlgorithm6 = (secondaryColor5: string): string => {
    let color = hexToRgb(secondaryColor5);
    console.log(color)

    let red = Math.ceil(color.red * 2)
    console.log(red);
    let green = Math.ceil(color.green * 2);
    let blue = Math.ceil(color.blue * 2);
    return rgbToHex(red, green, blue);
  };

  const transitionAlgorithm = (rgb: RGB, secondaryColor: string): string => {
    let secondary = hexToRgb(secondaryColor);
  
    let averageRed = Math.round((rgb.red + secondary.red) / 2);
    let averageGreen = Math.round((rgb.green + secondary.green) / 2);
    let averageBlue = Math.round((rgb.blue + secondary.blue) / 2);
  
    return rgbToHex(averageRed, averageGreen, averageBlue);
  };

  const whiteAlgorithm = (rgb: RGB): string => {
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

  const blackAlgorithm = (rgb: RGB): string => {
    let colorMapping = ['red', 'green', 'blue'];
    colorMapping.sort((a, b) => rgb[b] - rgb[a]);
    let result: RGB = {red: 0, green: 0, blue: 0};
  
    for (let i = 0; i < colorMapping.length; i++) {
      let color = colorMapping[i];
      let valueStr = rgb[color].toString();
  
      if (i === 0) {
        result[color as keyof RGB] = Math.min(30, Number(valueStr.slice(0, Math.min(2, valueStr.length))));
      }
      else {
        result[color as keyof RGB] = Number(valueStr.slice(0, Math.min(1, valueStr.length)));
      }
    }
  
    return rgbToHex(result.red, result.green, result.blue);
  };
  
  const handleColorShuffle = () => {
    handleColorChange({ target: { value: primaryColor } } as ChangeEvent<HTMLInputElement>);
  };  

  return (
    <div className=" flex flex-row *:w-svw-[80%] *:h-24">
      <button onClick={generateRandomPalette}>Generate Random Palette</button>
      <input type="color" value={primaryColor} onChange={handleColorChange}/>
      <input type="color" value={transitionColor}  disabled/>
      <input type="color" value={secondaryColor}  onChange={handleSecondaryColorChange}/>
      <input type="color" value={whiteColor} disabled/>
      <input type="color" value={blackColor} disabled/>
      <button onClick={handleColorShuffle}>Change Colors</button>
    </div>
  );
}

export default ColorPalette;
