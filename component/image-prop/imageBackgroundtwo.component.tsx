import React from "react";
import type { StaticImageData } from "next/image";

interface ImageBackgroundTwoProps {
  imageUrl: string | StaticImageData; // Allow both string paths and Next.js images
  children?: React.ReactNode;
  className?: string; // Optional className prop
}

const ImageBackgroundTwo: React.FC<ImageBackgroundTwoProps> = ({
  imageUrl,
  className = "",
  children,
}) => {
  return (
    <div
      className={`relative flex flex-col justify-center items-end bg-cover  py-[20px] h-auto w-full overflow-hidden ${className}`}
      style={{
        backgroundImage: `
           linear-gradient(97deg, #46927A 24.49%, rgba(79, 189, 110, 0) 57.36%),
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

export default ImageBackgroundTwo;
