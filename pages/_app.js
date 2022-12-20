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
    totalCost: 0,
    validates: null,
    orderID: "",
    guests: [],
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
    // console.log("regular", tickReg);
    setOrderInfo({ ...orderInfo, regTickets: tickReg });
  }

  function updateVIPTickets(event) {
    let tickVIP = event;
    // console.log("VIP", tickVIP);
    setOrderInfo({ ...orderInfo, vipTickets: tickVIP });
  }

  function tentSetUp(event) {
    console.log("setup check: ", event.target);
    let tentChoice = event.target.checked;
    setOrderInfo({ ...orderInfo, tentService: tentChoice });
  }
  function tentGreen(event) {
    console.log("tentgreen check: ", event.target);
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

  const selectArea = (e) => {
    setOrderInfo({
      ...orderInfo,
      selectedArea: e.target.value,
    });
  };

  // ORDER ID
  function setOrderID(id) {
    console.log("setOrderID has this id:", id);
    setOrderInfo({ ...orderInfo, orderID: id });
    console.log("orderID is set to:", orderInfo.orderID);
  }

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
          setOrderInfo={setOrderInfo}
          setOrderID={setOrderID}
        />
      </Layout>
    </>
  );
}

export default MyApp;
