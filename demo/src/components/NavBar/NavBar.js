import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavBar({ data, count = 0, value }) {
  const [selectedItem, setSelectedItem] = useState(value);

  const [data1, setData] = useState([]);
  const countRef = useRef(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (data && countRef.current === 0) {
      setData([{ name: "Introduction", id: 3 }, ...data]);
      countRef.current += 1;
    }
  });

  const handleItemClick = (item, e) => {
    setSelectedItem(item);
    if (item !== "Introduction") {
      navigate("/" + item);
    } else {
      navigate("/");
    }
  };
  return (
    <section className=" grid grid-flow-col h-6">
      <article className="flex justify-around px-5">
        {/* maping data for navigation */}
        {data1?.map((item) => (
          <div
            key={item.name}
            className={
              // here we are handling routing and selection
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
