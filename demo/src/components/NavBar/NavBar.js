import React, { useEffect, useRef } from "react";
import { useState } from "react";

export default function NavBar({ data, count = 0 }) {
  const [selectedItem, setSelectedItem] = useState("Introduction");
  const [data1, setData] = useState([]);
  const countRef = useRef(0);
  useEffect(() => {
    if (data && countRef.current === 0) {
      setData([{ name: "Introduction", id: 3 }, ...data]);
      console.log(data1);
      countRef.current += 1;
    }
  });

  const handleItemClick = (item, e) => {
    console.log(item, e.target);
    setSelectedItem(item);
  };
  return (
    <section className=" grid grid-flow-col h-6">
      <article className="flex justify-around px-5">
        {data1?.map((item) => (
          <div
            key={item.name}
            className={
              selectedItem === item.name
                ? "bg-red-500 text-white text-strong w-30 px-5 cursor-pointer relative"
                : "cursor-pointer  text-slate-600 text-strong w-30 px-5 relative"
            }
            onClick={(e) => handleItemClick(item.name, e)}
          >
            {selectedItem === item.name && (
              <span className="ml-2 absolute top-4 left-[35%] text-red-500">
                &#9660;
              </span>
            )}
            {item.name}
          </div>
        ))}
      </article>
      <article className="col-span-4 flex justify-between"></article>
    </section>
  );
}
