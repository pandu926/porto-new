// pages/_app.js
import Head from "next/head";
import "../styles/globals.css"; // Sesuaikan dengan struktur file Anda

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#3498db" />
        {/* Sesuaikan dengan warna yang Anda inginkan */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
