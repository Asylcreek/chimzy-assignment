import type { Metadata } from "next";
import "./globals.css";
import "@/styles/vars.css";
import Navbar from "@/component/navbar/navbar.component";
import Footer from "@/component/footer/footer.component";
import { avenir } from "@/fonts/avenir";

export const metadata: Metadata = {
  title: "Heaven Spa",
  description: "The top spot for you-time",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={avenir.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
