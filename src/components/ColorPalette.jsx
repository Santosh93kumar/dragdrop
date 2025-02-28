import { useState } from "react";
import React from "react";

const colorPalettes = [
  ["#E6E6C0", "#D3BC8D", "#C19A6B", "#AD7F29", "#2E2E2E", "#8B4513"],
  ["#4A90E2", "#76B5FF", "#B0C7E5", "#D8F3FF", "#FFFFFF", "#001F3F"],
  ["#FF7F11", "#FFAA33", "#FFD166", "#FFF5B2", "#2E2E2E", "#8B0000"],
  ["#9063CD", "#C3A2DA", "#D6C1E3", "#E9E0ED", "#FFFFFF", "#4B0082"],
  ["#C06C84", "#F67280", "#F8B195", "#FAE3D9", "#2E2E2E", "#A52A2A"],
  ["#D72638", "#3D3D3D", "#F8E9E9", "#FAFAFA", "#FFFFFF", "#8B0000"],
  ["#A3D9A5", "#74C69D", "#57A773", "#285943", "#1B4332", "#006400"],
  ["#F77F00", "#F8961E", "#F9C74F", "#F4D35E", "#EAE2B7", "#B8860B"],
  ["#9B5DE5", "#F15BB5", "#FEE440", "#00BBF9", "#00F5D4", "#9400D3"],
  ["#264653", "#2A9D8F", "#E9C46A", "#F4A261", "#E76F51", "#483D8B"],
  ["#6A0572", "#AB83A1", "#F6CACA", "#F5EDED", "#FFFFFF", "#800080"],
  ["#FF99C8", "#FCF6BD", "#D0F4DE", "#A9DEF9", "#E4C1F9", "#FF4500"],
  ["#BDE0FE", "#A2D2FF", "#FFAFCC", "#FFC8DD", "#CDB4DB", "#4682B4"],
  ["#023E8A", "#0077B6", "#0096C7", "#00B4D8", "#48CAE4", "#5F9EA0"],
  ["#FFB703", "#FB8500", "#FF6700", "#F77F00", "#8D3A00", "#FF4500"],
  ["#2D6A4F", "#40916C", "#52B788", "#74C69D", "#95D5B2", "#006400"],
  ["#F72585", "#B5179E", "#7209B7", "#560BAD", "#3A0CA3", "#4B0082"],
  ["#FBC4AB", "#FF9A8B", "#FF6F61", "#FF3E4D", "#FF165D", "#B22222"],
  ["#FAD02E", "#F28D35", "#D53F8C", "#9F7AEA", "#6B46C1", "#C71585"],
  ["#FF8C42", "#FF5C58", "#E01A4F", "#A01A7D", "#6A0572", "#DC143C"],
  ["#0081A7", "#00AFB9", "#FED9B7", "#F07167", "#FF758F", "#008B8B"],
  ["#2C3E50", "#34495E", "#7F8C8D", "#BDC3C7", "#ECF0F1", "#696969"],
  ["#6F1E51", "#B33771", "#E84393", "#F78FB3", "#FAD02E", "#8B008B"],
  ["#BDE5FE", "#A2D3FF", "#FFAFCC", "#FFC8DD", "#CDB4DB", "#4682B4"],
];

const ColorPalette = () => {
  const [selectedPalette, setSelectedPalette] = useState(null);

  const handleSelect = (palette) => {
    setSelectedPalette(palette);
  };

  return (
    <div className="bg-[#F2F3F7] w-full min-h-screen flex flex-col items-center p-8">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-800 mb-6">
        Select Your Brand Identity
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-15">
        {colorPalettes.map((palette, index) => (
          <div
            key={index}
            className={`cursor-pointer flex items-center justify-center relative w-48 h-14 border-2 transition-all ${
              selectedPalette === palette ? "border-black shadow-lg scale-110" : "border-transparent"
            }`}
            onClick={() => handleSelect(palette)}
          >
            {palette.map((color, idx) => (
              <div
                key={idx}
                className="w-10 h-10 rounded-full absolute transition-all duration-300 border border-gray-400 shadow-lg"
                style={{
                  backgroundColor: color,
                  left: `${idx * 30}px`,
                  zIndex: 6 - idx,
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Show Selected Palette */}
      {selectedPalette && (
        <div className="mt-6 text-lg text-gray-700">
          <span className="font-semibold">Selected Colors:</span>{" "}
          {selectedPalette.map((color, idx) => (
            <span key={idx} className="inline-block w-6 h-6 mx-1 rounded-full" style={{ backgroundColor: color }} />
          ))}
        </div>
      )}

      {/* Button */}
      <button className="mt-6 bg-[#2E2E2E] text-white px-6 py-2 rounded-lg hover:bg-black transition">
        See more color palettes
      </button>
    </div>
  );
};

export default ColorPalette;
