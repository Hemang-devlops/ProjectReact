import React from "react";
import NavBar from "../NavBar/NavBar";

export default function Introduction({ data }) {
  return (
    <div>
      <NavBar data={data} value={"Introduction"} />
    </div>
  );
}
