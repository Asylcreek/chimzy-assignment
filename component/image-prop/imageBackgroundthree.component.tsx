import React from "react";
import type { StaticImageData } from "next/image";

interface ImageBackgroundThreeProps {
  imageUrl: string | StaticImageData; // Allow both string paths and Next.js images
  children?: React.ReactNode;
  className?: string; // Optional className prop
}

const ImageBackgroundThree: React.FC<ImageBackgroundThreeProps> = ({
  imageUrl,
  className = "",
  children,
}) => {
  return (
    <div
      className={`relative flex flex-col justify-center items-center bg-cover  h-auto w-full  ${className}`}
      style={{
        backgroundImage: `url(${
          typeof imageUrl === "string" ? imageUrl : imageUrl.src
        })`,
        backgroundColor: "#757171CC",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="flex w-full siteWapper">{children}</div>
    </div>
  );
};

export default ImageBackgroundThree;
