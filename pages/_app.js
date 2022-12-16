import "../styles/globals.scss";
import Layout from "../components/Layout.jsx";
import App from "next/app";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  // global object for the user's order
  const [orderInfo, setOrderInfo] = useState({
    totalTickets: 0,
    regTickets: 0,
    vipTickets: 0,
    selectedArea: "",
    tentService: false,
    greenCamping: false,
    timedOut: false,
    totalCost: 0
  });

  function setTickets(regAmount, vipAmount) {
    regAmount === undefined ? setOrderInfo({ ...orderInfo, vipTickets: vipAmount }) : setOrderInfo({ ...orderInfo, regTickets: regAmount});
    // Todo totaltickets() breaking the setState for some reason.
    // totalTickets();
  }
  // function totalTickets(){
  //   let total = orderInfo.vipTickets + orderInfo.regTickets;
  //   setOrderInfo({...orderInfo, totalTickets: total})
  // }

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
