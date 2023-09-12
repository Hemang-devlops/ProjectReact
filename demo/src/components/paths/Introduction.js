import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

export default function Introduction({ data }) {
  const [style, setStyle] = useState({
    width: "100%",
    height: "90vh",
  });
  return (
    <div>
      <NavBar data={data} value={"Introduction"} />
      <div>
        <VideoPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          width={style.width}
          height={style.height}
        />
      </div>
    </div>
  );
}
