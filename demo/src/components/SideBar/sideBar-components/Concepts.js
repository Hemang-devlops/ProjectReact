import React from "react";
import VideoPlayer from "../../VideoPlayer/VideoPlayer";

function Concepts({ data }) {
  return (
    <div className="w-full">
      {data?.map((section) => (
        <div key={section.id} className="mb-8">
          <h1 className="text-black font-bold text-xl mx-6">{section.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-6">
            {section.items.map((video) => (
              <div key={video.id} className="w-full px-4 mb-4">
                <VideoPlayer
                  url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  width="100%"
                  height="150px"
                />
                <article className="mt-2">{video.title}</article>
              </div>
            ))}
          </div>
          <hr className="mx-6 mt-6"></hr>
        </div>
      ))}
    </div>
  );
}

export default Concepts;
