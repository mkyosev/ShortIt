import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    {/* <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <Script strategy="lazyOnload" id="ganalytics-id">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script> */}
    <Head>

      <title>ShortIt</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* <NextNProgress  options={{ showSpinner: false }}/> */}
    <Layout>
      {/* <DefaultSeo {...SEO}/> */}
      <Component {...pageProps} />
    </Layout>


  </>
}

export default MyApp
