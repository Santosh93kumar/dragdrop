import React from "react";

import WorkBlock from "../components/WorkBlock";

const Workspace = () => {
  return (
    <>
      <div className=" h-screen flex">
        <div className="flex-1 h-full w-1/5 ">
          <nav className="flex flex-col justify-center items-start gap-4   ">
            <div className="w-full">
              <h1>DashStack</h1>
              <hr />
            </div>
            <div className="w-full">
              <p>Untitled</p>
              <hr/>
            </div>

            <ul className="w-full ">
              <li>A</li>
              <hr />
              <li>B</li>
              <hr />
              <li>C</li>
              <hr />
              <li>D</li>
              <hr />
            </ul>
          </nav>
        </div>

        <div className="flex-2 ">
         <WorkBlock/>
        </div>

        <div className="flex-1">
         Third Component
        </div>
      </div>
    </>
  );
};

export default Workspace;
