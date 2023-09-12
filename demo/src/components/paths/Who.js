import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

export default function Who({ data }) {
  const [style, setStyle] = useState({
    width: "100%",
    height: "70vh",
  });
  const [addClass, setAddClass] = useState(true);

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    const scrollHeight = window.scrollY;
    if (scrollHeight > 100) {
      setAddClass(false);
      setStyle({
        width: "40%",
        height: "30vh",
      });
    } else {
      setAddClass(true);
      setStyle({
        width: "100%",
        height: "70vh",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, []);
  return (
    <div>
      <NavBar data={data} value={"Who"}></NavBar>
      <div className="whoWrapper">
        <div style={{ position: "relative", display: "flex" }}>
          <VideoPlayer
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            width={style.width}
            height={style.height}
          />
          <div
            className={`${addClass ? "whoContentWrapper" : "whoFlexWrapper"}`}
          >
            <div className={`${addClass ? "" : "content"}`}>
              <p className="text-4xl mb-3">
                <b>Who is involved in Your transactions?</b>
              </p>
              <p className="text-2xl">
                The personnel, companies or institutions that you are doing
                business with will be highlighted in this section - please edit
                this{" "}
              </p>
            </div>
          </div>
        </div>
        <VideoPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          width={500}
          height={500}
        />
        <VideoPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          width={500}
          height={500}
        />
        <VideoPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          width={500}
          height={500}
        />
        <VideoPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
