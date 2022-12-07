import React from "react";
import OrderInterface from "../../components/OrderInterface";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import OrderOverview from "../../components/OrderOverview";

function step1() {
  return;
  <>
    <Head>
      <title>FOOFEST | Tickets</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav />
    <OrderInterface />
    <OrderOverview />
    <Footer />
  </>;
}

export default step1;
