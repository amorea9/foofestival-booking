import "../styles/globals.scss";
import Layout from "../components/Layout.jsx";
import App from "next/app";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    // <Layout navData={navData}>
    //   <Component {...pageProps} />
    // </Layout>
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
