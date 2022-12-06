import Head from "next/head";
import Splash from "../components/Splash";
import Nav from "../components/Nav";
import Headliners from "../components/Headliners";
import BigNames from "../components/BigNames";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>FOOFEST | The best damned festival</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Splash />
      <BigNames />
      <Headliners />
      <Footer />
    </>
  );
}
