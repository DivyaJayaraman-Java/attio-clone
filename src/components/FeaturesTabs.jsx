import React, { useState } from "react";

const FeatureTabs = () => {
  const tabs = [
    "Data",
    "Automations",
    "Pipeline",
    "Productivity",
    "Reporting",
  ];

  const [active, setActive] = useState("Data");

  return (
    <div className="flex justify-center gap-4 py-10">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
            active === tab
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:text-black"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FeatureTabs;
