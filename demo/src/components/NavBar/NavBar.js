import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar({ data, count = 0, value }) {
  const [selectedItem, setSelectedItem] = useState(value);
  const [data1, setData] = useState([]);

  //used ref so we can control useeffect
  const countRef = useRef(0);

  //used useNavigate for naivgation of components
  const navigate = useNavigate();

  useEffect(() => {
    if (data && countRef.current === 0) {
      setData([{ name: "Introduction", id: 3 }, ...data]);
      countRef.current += 1;
    }
  }, [data]);

  // intoruduction is on default path so have selected 2 navigate
  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (item !== "Introduction") {
      navigate("/" + item);
    } else {
      navigate("/");
    }
  };

  return (
    <section className="grid grid-flow-col h-8 mb-5">
      {/* used tailwind so can use media queries directly */}
      <article className="flex justify-around px-5 space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-8">
        {data1?.map((item) => (
          <div
            key={item.name}
            className={`${
              // to do proper navigation selection used refrence of name
              selectedItem === item.name
                ? "bg-red-500 text-white"
                : "text-slate-600"
            } text-strong px-3 md:px-4 lg:px-5 xl:px-6 cursor-pointer relative`}
            onClick={() => handleItemClick(item.name)}
          >
            {selectedItem === item.name && (
              // on based on above selection we need to set arrow
              <span className="ml-2 absolute top-6 left-[40%] z-50 text-red-500 transform -translate-x-1/2">
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
