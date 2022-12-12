import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>FOOFEST | The best damned festival</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
