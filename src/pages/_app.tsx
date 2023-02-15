import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence initial={false} mode="wait">
      <Component {...pageProps} />;
    </AnimatePresence>
  );
}
