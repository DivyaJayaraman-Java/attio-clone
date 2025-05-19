import React, { useState } from 'react';

const PlatformMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="text-gray-800 font-medium px-4 py-2 hover:text-black transition">
        Platform ▾
      </button>

      {isHovered && (
        <div className="absolute left-0 mt-2 w-[750px] bg-white shadow-xl border border-gray-200 rounded-lg p-6 z-50 flex gap-8">
          
          {/* FEATURES SECTION */}
          <div className="w-1/2">
            <h6 className="text-xs text-gray-500 font-semibold mb-4">FEATURES</h6>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="font-semibold">Data structure & sources</p>
                <p className="text-gray-500 text-xs">Model, sync and enrich your data</p>
              </li>
              <li>
                <p className="font-semibold">Reporting</p>
                <p className="text-gray-500 text-xs">Analyze and share your data</p>
              </li>
              <li>
                <p className="font-semibold">Automations</p>
                <p className="text-gray-500 text-xs">Automate anything with workflows</p>
              </li>
              <li>
                <p className="font-semibold">AI</p>
                <p className="text-gray-500 text-xs">Harness powerful AI features</p>
              </li>
              <li>
                <p className="font-semibold">Work & collaboration</p>
                <p className="text-gray-500 text-xs">Seamlessly perform your daily work</p>
              </li>
              <li>
                <p className="font-semibold">Apps & integrations</p>
                <p className="text-gray-500 text-xs">Supercharge your workflow with integrations</p>
              </li>
            </ul>
          </div>

          {/* WHAT'S NEW SECTION */}
          <div className="w-1/2 bg-gray-50 p-4 rounded-lg border border-gray-100">
            <h6 className="text-xs text-gray-500 font-semibold mb-3">WHAT'S NEW</h6>
            <img
              src="/meeting-preview.png" // Place this image in your public folder
              alt="Quick actions preview"
              className="rounded-md mb-3 w-full"
            />
            <p className="text-sm font-medium">Meeting data in Quick actions</p>
            <p className="text-gray-500 text-xs">
              Review, toggle controls, and check attendees in one spot.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlatformMenu;
