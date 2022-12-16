import "../styles/globals.scss";
import Layout from "../components/Layout.jsx";
import App from "next/app";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  // global object for the user's order
  const [orderInfo, setOrderInfo] = useState({
    vipTickets: 0,
    regTickets: 0,
    totalTickets: 0,
    selectedArea: "",
    tentService: false,
    greenCamping: false,
    timedOut: false,
  });

  // useEffect(() => {
  //   function setTickets() {
  //     setOrderInfo({ ...orderInfo, totalTickets: orderInfo.regTickets + orderInfo.vipTickets });
  //     console.log("tot tickets", totalTickets);
  //   }
  // }, [orderInfo]);

  // save regular and vip tickets in state
  function updateRegTickets(event) {
    let tickReg = event;
    console.log("regular", tickReg);
    setOrderInfo({ ...orderInfo, regTickets: tickReg });
  }
  function updateVIPTickets(event) {
    let tickVIP = event;
    console.log("VIP", tickVIP);
    setOrderInfo({ ...orderInfo, vipTickets: tickVIP });
  }

  console.log("order info", orderInfo);

  function setAddOns(tentChoice, greenChoice) {
    setOrderInfo({ ...orderInfo, tentService: tentChoice, greenCamping: greenChoice });
  }
  const selectArea = (e) => {
    //TODO: hookup reserve a spot here
    //TODO: filter for area that's the same as selectedArea
    //TODO: if the spots are >= the tickets number then reserve it -> start timer
    setOrderInfo({
      ...orderInfo,
      selectedArea: e.target.value,
    });
  };

  return (
    <>
      <Layout>
        <Component updateRegTickets={updateRegTickets} updateVIPTickets={updateVIPTickets} {...pageProps} orderInfo={orderInfo} setOrderInfo={setOrderInfo} setAddOns={setAddOns} selectArea={selectArea} />
      </Layout>
    </>
  );
}

export default MyApp;
