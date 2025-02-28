/* eslint-disable react/prop-types */
import { Bold, Italic, AlignLeft, AlignCenter, AlignRight } from "lucide-react";
import React from "react";

export default function WorkSpaceRightPanel({ settings, onUpdate }) {
  return (
    <div className="w-full sm:w-72 md:w-80 p-4 sm:p-6 bg-white shadow-lg">
      {/* Header Buttons */}
      <div className="flex justify-between mb-4">
        <button className="px-4 py-2 border rounded">Discard</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
      </div>

      <h2 className="font-semibold text-lg mb-2">Settings</h2>

      {/* Typography Alignment */}
      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">Typography Alignment</label>
        <div className="flex space-x-2">
          {[
            { value: "left", icon: <AlignLeft size={18} /> },
            { value: "center", icon: <AlignCenter size={18} /> },
            { value: "right", icon: <AlignRight size={18} /> },
          ].map((option) => (
            <button
              key={option.value}
              className={`p-2 border rounded ${settings.textAlign === option.value ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => onUpdate({ ...settings, textAlign: option.value })}
            >
              {option.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Position Inputs */}
      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">Position</label>
        <div className="flex space-x-2">
          <input type="number" value={settings.positionX || 0} onChange={(e) => onUpdate({ ...settings, positionX: Number(e.target.value) })} className="w-1/2 p-2 border rounded" placeholder="X" />
          <input type="number" value={settings.positionY || 0} onChange={(e) => onUpdate({ ...settings, positionY: Number(e.target.value) })} className="w-1/2 p-2 border rounded" placeholder="Y" />
        </div>
      </div>

      {/* Font Size */}
      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">Font Size</label>
        <input type="number" value={settings.fontSize} onChange={(e) => onUpdate({ ...settings, fontSize: Number(e.target.value) })} className="w-full p-2 border rounded" />
      </div>

      {/* Color Pickers */}
      {["textColor", "backgroundColor", "strokeColor"].map((colorKey) => (
        <div key={colorKey} className="mt-4">
          <label className="block text-sm font-medium mb-1">{colorKey.replace("Color", " Color")}</label>
          <input type="color" value={settings[colorKey]} onChange={(e) => onUpdate({ ...settings, [colorKey]: e.target.value })} className="w-full p-2 border rounded" />
        </div>
      ))}
    </div>
  );
}
