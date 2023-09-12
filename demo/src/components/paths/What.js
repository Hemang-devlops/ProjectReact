import React from "react";
import NavBar from "../NavBar/NavBar";
export default function What({ data }) {
  return (
    <div>
      <NavBar data={data} value={"What"}></NavBar>
    </div>
  );
}
