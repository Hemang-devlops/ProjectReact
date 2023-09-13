import React, { useState } from "react";

function SideBar({ handleTab }) {
  //by default we want to see conecpts so we can filter tab accordingly
  const [activeItem, setActiveItem] = useState("Concepts");
  // made a list as we had no data for discription of side bar
  const menuItems = [
    {
      id: 1,
      label: "Concepts",
      description: "The key learning areas in this section",
    },
    {
      id: 2,
      label: "Scenarios",
      description: "Potential situations that you might face.",
    },
    {
      id: 3,
      label: "Resources",
      description: "All instructional information to download and use",
    },
  ];

  // to handel tab with function
  const handleItemClick = (label) => {
    setActiveItem(label);
    // callback funtion to give data pass value back
    handleTab(label);
  };

  return (
    <section className="bg-gray-100 text-black p-0 min-h-[10rem] md:h-[165vh]">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`block px-4 py-3 md:py-4 cursor-pointer ${
              activeItem === item.label
                ? "bg-blue-300 text-white font-bold"
                : "font-bold"
            }`}
            onClick={() => handleItemClick(item.label)}
          >
            <strong>{item.label}</strong>
            <p
              className={`mt-1 text-sm ${
                activeItem === item.label ? "text-gray-100" : "text-gray-400"
              }`}
            >
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SideBar;
