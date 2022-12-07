import React from "react";
import BookingWindow from "../../components/BookingWindow";
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
    <BookingWindow />
    <OrderOverview />
    <Footer />
  </>;
}

export default step1;
