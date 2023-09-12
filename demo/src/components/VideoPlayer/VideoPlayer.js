import ReactPlayer from "react-player";

const VideoPlayer = ({ url, width, height }) => {
  return (
    <ReactPlayer url={url} controls={true} width={width} height={height} />
  );
};

export default VideoPlayer;
