import React from "react";
import NavBar from "../NavBar/NavBar";

export default function Who({ data }) {
  return (
    <div>
      <NavBar data={data} value={"Who"}></NavBar>
    </div>
  );
}
