import "../styles/globals.scss";

import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import { checkA11yViolations } from "../utils/a11y";

checkA11yViolations();

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />

      <div id="portal"></div>
    </>
  );
}

export default App;
