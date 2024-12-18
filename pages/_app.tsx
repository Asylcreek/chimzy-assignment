import type { AppProps } from "next/app";

import "~/styles/globals.css";
import "@/app/globals.css";
import "~/styles/vars.css";
import "~/styles/base.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
