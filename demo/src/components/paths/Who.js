import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Main from "../Main/Main";

// kindly check comments for what as they are same for Who same logic
export default function Who({ data }) {
  const [style, setStyle] = useState({
    width: "100%",
    height: "50vh",
  });
  const [addClass, setAddClass] = useState(true);

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    const scrollHeight = window.scrollY;
    if (scrollHeight > 10) {
      setAddClass(false);
      setStyle({
        width: "40%",
        height: "30vh",
      });
    } else {
      setAddClass(true);
      setStyle({
        width: "100%",
        height: "55vh",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setStyle({
          width: "100%",
          height: "30vh",
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      // Remove the event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
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
        <Main data={data?.filter((item) => item.name === "Who")} />
      </div>
    </div>
  );
}
