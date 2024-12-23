'use client';
import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const ColorPicker = () => {
  const [color, setColor] = useState('#4F46E5');
  const [opacity, setOpacity] = useState(100);
  const [format, setFormat] = useState('hex');
  const [savedColors, setSavedColors] = useState([
    '#FF5733', '#FFA500', '#FFD700', '#00FF00',
    '#00CED1', '#1E90FF', '#4F46E5', '#32CD32'
  ]);

  const convertColor = () => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    const alpha = (opacity / 100).toFixed(2);

    if (format === 'rgb') return `rgb(${r}, ${g}, ${b})`;
    if (format === 'rgba') return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    return color;
  };

  const saveColor = () => {
    const fullColor = convertColor();
    if (!savedColors.includes(fullColor)) {
      setSavedColors([...savedColors, fullColor]);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-[340px] p-6 bg-white rounded-xl shadow-2xl">
      <HexColorPicker color={color} onChange={setColor} className="min-w-full mb-4" />

      <div className="flex justify-between items-center gap-2 mb-4">
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="border rounded shadow px-2 py-1 text-black text-sm"
        >
          <option value="hex">Hex</option>
          <option value="rgb">RGB</option>
          <option value="rgba">RGBA</option>
        </select>

        <input
          type="text"
          value={convertColor()}
          readOnly
          className="border rounded px-2 py-1 shadow outline-none text-sm w-full text-center"
        />

        <div className="flex items-center relative">
          <input
            type="number"
            min="0"
            max="100"
            value={opacity}
            onChange={(e) => setOpacity(Number(e.target.value))}
            className="border rounded shadow px-2 py-1 text-sm w-14 outline-none text-black"
          />
          <span className="text-sm ml-1 absolute right-2 text-black">%</span>
        </div>
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 text-sm font-medium">Saved colors:</span>
          <button
            onClick={saveColor}
            className="text-gray-600 text-sm font-medium"
          >
            + Add
          </button>
        </div>
        <div className="grid grid-cols-8 gap-2">
          {savedColors.map((savedColor, index) => (
            <div
              key={index}
              className="w-7 h-7 rounded-full border border-gray-300 cursor-pointer"
              style={{ backgroundColor: savedColor }}
              onClick={() => setColor(savedColor)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
