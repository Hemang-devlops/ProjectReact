import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Main from "../Main/Main";

export default function What({ data }) {
  const [style, setStyle] = useState({
    width: "100%",
    height: "50vh",
  });
  // state vriable for handling text-image ratio
  const [addClass, setAddClass] = useState(true);

  // here we have used window object as seen in pdf there are 2 scenarios of who/what
  // 1) when whole video covers entire
  // 2) when whole video covers 30 and text covers 70
  // so implented that logic using scroll

  // on based on scroll we are handling above mentioned logic
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

  // Seting width to 100% on mobile devices
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setStyle({
          width: "100%",
          height: "30vh",
        });
      }
    };

    // Initial call and add event listener for window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      // Remove the event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <NavBar data={data} value={"What"}></NavBar>
      <div className="whoWrapper">
        <div s className="relative flex">
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
        {/* we filter data based on our navigation as not relevant to send wholw data */}
        <Main data={data?.filter((item) => item.name === "What")} />
      </div>
    </div>
  );
}
