import React from "react";
import type { StaticImageData } from "next/image";

interface ImageBackgroundProps {
  imageUrl: string | StaticImageData; // Allow both string paths and Next.js images
  children?: React.ReactNode;
  className?: string; // Optional className prop
}

const ImageBackground: React.FC<ImageBackgroundProps> = ({
  imageUrl,
  className = "",
  children,
}) => {
  return (
    <div
      className={`relative  flex flex-col justify-center items-start bg-cover  py-[20px] h-auto w-full overflow-hidden ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(95.11deg, #27a17b 15.93%, #4fbd6e00 47.77%),
          url(${typeof imageUrl === "string" ? imageUrl : imageUrl.src})
        `,

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

export default ImageBackground;
