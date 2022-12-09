import Head from "next/head";
import Splash from "../components/Splash";
import Nav from "../components/Nav";
import Lineup from "../components/Lineup";
import Headliners from "../components/Headliners";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Splash />
      <Headliners />
      <Lineup />
    </>
  );
}
