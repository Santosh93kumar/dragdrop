/* eslint-disable react/prop-types */
import React from "react";

export default function WorkSpaceContent({ settings }) {
  return (
    <div
      className="w-full sm:w-[90%] md:w-[75%] lg:w-[60%] h-auto p-4 sm:p-6 rounded-lg shadow-lg"
      style={{
        backgroundColor: settings.backgroundColor,
        color: settings.textColor,
        fontSize: `${settings.fontSize}px`,
        fontFamily: settings.font,
        fontWeight: settings.fontWeight,
        textAlign: settings.textAlign,
        lineHeight: settings.lineHeight !== "Auto" ? settings.lineHeight : "normal",
        letterSpacing: settings.letterSpacing !== "Auto" ? settings.letterSpacing : "normal",
        border: `2px solid ${settings.strokeColor}`,
        position: "relative",
        left: `${settings.positionX}px`,
        top: `${settings.positionY}px`,
      }}
    >
      <h1 className="font-bold text-sm sm:text-base md:text-lg">
        Experience the <span className="italic">Art</span> of{" "}
        <span className="text-orange-500">Fine Fashion</span>
      </h1>
      <p className="text-xs sm:text-sm md:text-base">Top Collection</p>
    </div>
  );
}
