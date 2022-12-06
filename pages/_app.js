import "../styles/globals.scss";
import Layout from "../components/Layout.jsx";
import App from "next/app";

function MyApp({ Component, pageProps, navData }) {
  return (
    <>
      <Component />
    </>
    // <Layout navData={navData}>
    //   <Component {...pageProps} />
    // </Layout>
  );
}

// MyApp.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext);
//   const res = await fetch("https://kea-alt-del.dk/t7/api/products");
//   const navData = await res.json();
//   return { ...appProps, navData };
// };

export default MyApp;
