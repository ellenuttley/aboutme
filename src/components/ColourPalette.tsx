'use client'

import React from "react";
import { useState, ChangeEvent } from 'react';
import { hexToRgb } from "@/utils/colorAlgorithms";

type RGB = {
  red: number;
  green: number;
  blue: number;
  [key: string]: number;
};

function ColorPalette() {
    const [primaryColor, setPrimary] = useState<string>('#DD6031');

    const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPrimary(e.target.value);
        let rgb = hexToRgb(e.target.value);
        return rgb;
     };

    return (
    <div className="flex flex-col space-x-2">
        <input type="color" value={primaryColor} onChange={handleColorChange} className="w-24 h-24 p-2 border border-gray-300"/>
    </div>
    );
}

export default ColorPalette;
