import type { Metadata } from "next";
import "./globals.css";
import "@/styles/vars.css";
import Navbar from "@/component/navbar/navbar.component";
import Footer from "@/component/footer/footer.component";
import { avenir } from "@/fonts/avenir";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Spa & Wellness in Fairfield Iowa",
  description:
    "Spa and massage for relaxation in Fairfield Iowa. Feel relaxed and relieve stress with Heaven Spa near me",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-YYHFPPQ2RK" />
      <body className={avenir.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
