import React, { useState } from "react";
import WorkSpaceRightPanel from "../components/WorkSpaceRightPanel";
import WorkSpaceContent from "../components/WorkSpaceContent";

export default function WorkSpace() {
  const [contentSettings, setContentSettings] = useState({
    alignment: "center",
    font: "Poppins",
    fontSize: 24,
    textColor: "#452313",
    backgroundColor: "#001303",
    strokeColor: "#f45643",
  });

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Content Section */}
      <div className="flex-1 p-4 sm:p-6 md:p-10 bg-gray-100 flex justify-center items-center">
        <WorkSpaceContent settings={contentSettings} />
      </div>

      {/* Right Panel */}
      <WorkSpaceRightPanel settings={contentSettings} onUpdate={setContentSettings} />
    </div>
  );
}
