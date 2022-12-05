import Head from "next/head";
import Image from "next/image";
import Header from "./components/Header";
import Splash from "./components/Splash";
import Nav from "./components/Nav";

export default function Home() {
  return <>
  <Nav/>
  <Splash />
  <Header/>
  <Headliners />
  <Lineup/>
  <Footer/>

  </>;
}
