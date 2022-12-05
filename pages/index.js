import Head from "next/head";
import Image from "next/image";
import Header from "./components/Header";
import Splash from "./components/Splash";
import Nav from "./components/Nav";
import Headliners from "./components/Headliners";
import Lineup from "./components/Lineup";
import Footer from "./components/Footer";


export default function Home() {
  return (
  <>
  <div>
    <Head>
    <title>The Official FootFest Hompepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    </div>
  <Nav/>
  <Splash />
  <Header/>
  <Headliners />
  <Lineup/>
  <Footer/>
  </>);
}
