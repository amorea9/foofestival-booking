import "../styles/globals.scss";
import Layout from "../components/Layout.jsx";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component />
    </Layout>
  );
}

export default MyApp;
