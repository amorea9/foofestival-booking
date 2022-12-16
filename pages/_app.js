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

  //everytime either reg tickets or vip tickets are updated, update total tickets too
  useEffect(() => {
    function setTickets() {
      let totalTickets = orderInfo.vipTickets + orderInfo.regTickets;
      setOrderInfo({ ...orderInfo, totalTickets: totalTickets });
    }
    setTickets();
  }, [orderInfo.regTickets, orderInfo.vipTickets]);

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

  function tentSetUp(event) {
    let tentChoice = event.target.checked;
    setOrderInfo({ ...orderInfo, tentService: tentChoice });
  }
  function tentGreen(event) {
    let tentChoice = event.target.checked;
    setOrderInfo({ ...orderInfo, greenCamping: tentChoice });
  }
  let tentPrice = 249;
  let setUpPrice;
  let tentSize = "";
  if (orderInfo.totalTickets <= 2) {
    setUpPrice = 299;
    tentSize = "2-person tent";
  } else if (orderInfo.totalTickets === 3) {
    setUpPrice = 399;
    tentSize = "3-person tent";
  } else if (orderInfo.totalTickets === 4) {
    setUpPrice = 598;
    tentSize = "2 x 2-person tents";
  } else if (orderInfo.totalTickets === 5) {
    setUpPrice = 798;
    tentSize = "1 x 2 person tent & 1 x 3 person tent";
  } else {
    setUpPrice = 299;
    tentSize = "2-person tent";
  }

  console.log("order info", orderInfo);

  const selectArea = (e) => {
    setOrderInfo({
      ...orderInfo,
      selectedArea: e.target.value,
    });
  };

  //when the "next" button is clicked
  //TODO: hookup reserve a spot. checks for selected area into state
  //TODO: filter for area in "reserve" endpoint that's the same as selectedArea
  //TODO: if the spots are >= the tickets number then reserve it -> start timer

  return (
    <>
      <Layout>
        <Component
          updateRegTickets={updateRegTickets}
          updateVIPTickets={updateVIPTickets}
          {...pageProps}
          orderInfo={orderInfo}
          tentSetUp={tentSetUp}
          tentGreen={tentGreen}
          selectArea={selectArea}
          tentPrice={tentPrice}
          setUpPrice={setUpPrice}
          tentSize={tentSize}
        />
      </Layout>
    </>
  );
}

export default MyApp;
