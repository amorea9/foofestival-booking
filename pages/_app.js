import "../styles/globals.scss";
import Layout from "../components/Layout.jsx";
import App from "next/app";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  // global object for the user's order
  const [orderInfo, setOrderInfo] = useState({
    totalTickets: 0,
    vipTickets: 0,
    regTickets: 0,
    selectedArea: "",
    tentService: false,
    greenCamping: false,
    timedOut: false,
  });

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

/* export default function MyApp({ Component, pageProps, navData }) {
  return (
    <>
      <Layout navData={navData}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
} */
