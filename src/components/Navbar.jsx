import { useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  BookOpen,      // for "Data structure & sources"
  BarChart2,     // for "Reporting"
  Zap,           // for "Automations"
  Brain,         // for "AI"
  Users,         // for "Work & collaboration"
  Plug, LifeBuoy, GraduationCap, LayoutTemplate       // for "Apps & integrations"
} from "lucide-react";
const menuItems = [
  {
    name: "Platform",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      {
        icon: <BookOpen className="w-5 h-5 text-gray-700" />,
        title: "Data structure & sources",
        description: "Model, sync and enrich your data",
        href: "#",
      },
      {
        icon: <BarChart2 className="w-5 h-5 text-gray-700" />,
        title: "Reporting",
        description: "Analyze and share your data",
        href: "#",
      },
      {
        icon: <Zap className="w-5 h-5 text-gray-700" />,
        title: "Automations",
        description: "Automate anything with workflows",
        href: "#",
      },
      {
        icon: <Brain className="w-5 h-5 text-gray-700" />,
        title: "AI",
        description: "Harness powerful AI features",
        href: "#",
      },
      {
        icon: <Users className="w-5 h-5 text-gray-700" />,
        title: "Work & collaboration",
        description: "Seamlessly perform your daily work",
        href: "#",
      },
      {
        icon: <Plug className="w-5 h-5 text-gray-700" />,
        title: "Apps & integrations",
        description: "Supercharge your workflow with integrations",
        href: "#",
      },
    ],
  },

  {
    name: "Resources",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      {
        icon: <BookOpen className="h-5 w-5 text-gray-700" />,
        title: "Docs",
        description: "Learn more about Attio’s features",
        href: "#",
      },
      {
        icon: <LifeBuoy className="h-5 w-5 text-gray-700" />,
        title: "Help Center",
        description: "Learn more about Attio’s features",
        href: "#",
      },
      {
        icon: <GraduationCap className="h-5 w-5 text-gray-700" />,
        title: "Academy",
        description: "Essential Attio features explained",
        href: "#",
      },
      {
        icon: <LayoutTemplate className="h-5 w-5 text-gray-700" />,
        title: "Templates",
        description: "Accelerate your revenue motion",
        href: "#",
      },
    ],
  },
  { name: "Customers", href: "#" },
  { name: "Pricing", href: "#" },
];



export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">
        {/* Logo & Desktop Menu */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="attio logo" className="h-18 w-18" />
            <span className="text-4xl font-bold text-gray-900">Attio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-">
            {menuItems.map((item, idx) => (
              <div
                key={item.name}
                className={`relative group ${item.name === "Customers" || item.name === "Pricing"
                    ? "hover:bg-gray-100 rounded-xl transition"
                    : ""
                  }`}
              >
                <a
                  href={item.href}
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-800 hover:text-black"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 h-4 w-4 stroke-[2]" />
                  )}
                </a>


                {item.hasDropdown && (
                  <div
                    className="absolute left-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-lg z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all transform duration-200 ease-out"
                  >
                    {item.dropdownItems.map((subItem) => (
                      <a
                        key={subItem.title || subItem.name}
                        href={subItem.href}
                        className="flex items-start px-4 py-3 hover:bg-gray-50 transition rounded-xl"
                        role="menuitem"
                      >
                        <div className="mr-3 text-gray-700">
                          {subItem.icon}
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-gray-900">{subItem.title || subItem.name}</p>
                          {subItem.description && (
                            <p className="text-xs text-gray-500">{subItem.description}</p>
                          )}
                        </div>
                      </a>
                    ))}

                  </div>

                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#"
            className="px-4 py-2 border border-gray-300 text-gray-900 rounded-xl text-sm font-medium hover:bg-gray-100"
          >
            Sign in
          </a>
          <a
            href="#"
            className="bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-black"
          >
            Start for free
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-900 text-2xl"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm p-4">
          {menuItems.map((item, idx) =>
            item.hasDropdown ? (
              <div key={item.name} className="mb-2">
                <button
                  onClick={() =>
                    setMobileDropdownOpen(mobileDropdownOpen === idx ? null : idx)
                  }
                  className="w-full flex justify-between items-center py-2 text-gray-800 font-medium"
                >
                  {item.name}
                  <ChevronDown
                    className={`ml-2 h-4 w-4 transform transition-transform ${mobileDropdownOpen === idx ? "rotate-180" : "rotate-0"
                      }`}
                  />
                </button>
                {mobileDropdownOpen === idx && (
                  <div className="pl-4 mt-1 border-l border-gray-300">
                    {item.dropdownItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-2 text-gray-700 hover:bg-gray-100 rounded-xl"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-800 border-b border-gray-200"
              >
                {item.name}
              </a>
            )
          )}

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-2 mt-4">
            <a
              href="#"
              className="w-full text-center px-4 py-2 border border-gray-300 text-gray-900 rounded-xl text-sm font-medium hover:bg-gray-100"
            >
              Sign in
            </a>
            <a
              href="#"
              className="w-full text-center bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-black"
            >
              Start for free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
