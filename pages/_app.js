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

  function setTickets(ticketAmount, vipAmount, regAmount) {
    setOrderInfo({ ...orderInfo, totalTickets: ticketAmount, vipTickets: vipAmount, regTickets: regAmount });
  }

  function setArea(area) {
    setOrderInfo({ ...orderInfo, selectedArea: area });
  }

  function setAddOns(tentChoice, greenChoice) {
    setOrderInfo({ ...orderInfo, tentService: tentChoice, greenCamping: greenChoice });
  }

  return (
    <>
      <Layout>
        <Component {...pageProps} orderInfo={orderInfo} setOrderInfo={setOrderInfo} setTickets={setTickets} setAddOns={setAddOns} setArea={setArea} />
      </Layout>
    </>
  );
}

export default MyApp;
