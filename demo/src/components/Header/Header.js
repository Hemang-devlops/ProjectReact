import React from "react";
import squares from "../../utils/logo/squares.png";

export default function Header() {
  return (
    //   Header component at top
    // flex used for header component
    <div className="h-10 max-w-screen shadow-slate-100">
      <section className=" h-10 w-auto  mx-10 flex justify-between items-center">
        <div className="header pl-5 italic font-light">
          content<span className="text-red-500">eneablers</span>
        </div>
        <div className="logo pr-5">
          <img className="w-[80%]" src={squares} alt="logo" />
        </div>
      </section>
      <hr></hr>
    </div>
  );
}
