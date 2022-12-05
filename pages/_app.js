import '../styles/globals.css'
import Layout from './Layout'


function MyApp({ Component, pageProps }) {
  return (
    <Layout navData={navData}>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
