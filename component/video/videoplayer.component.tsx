

import React from "react";
import playbutton from "@/public/icon/Play Button.png"
import Image from "next/image";
import shapeTwo from "@/public/images/6fef77eb79b8a16b6f5b7c3e3991037e.jpeg";

const VideoPlayer: React.FC = () => {
  return (
    <div className="flex relative justify-center items-center group">
      <video
        src="/videoplayback.mp4" // Use relative path
        width="1000"
        height="360"
        controls
        loop
        className="relative rounded-md text-red-900 shadow-lg"
      ></video>
      {/* <div
        className=" group-hover:!hidden absolute flex justify-center items-center h-auto w-full"
        
      >
        <div className=" flex w-[120px] h-[120px]">
          <Image
            src={playbutton}
            alt="image"
            className="flex h-auto w-full object-cover "
          />
        </div>
      </div> */}
    </div>
  );
};

export default VideoPlayer;
