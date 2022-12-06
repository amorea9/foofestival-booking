import Head from "next/head";
import Splash from "../components/Splash";
import Nav from "../components/Nav";
import Headliners from "../components/Headliners";
import BigNames from "../components/BigNames";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>The Official FootFest Homepage</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      </div>
      <Nav />
      <Splash />
      <BigNames />
      <Headliners />
      <Footer />
    </>
  );
}
