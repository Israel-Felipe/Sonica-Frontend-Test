import Head from "next/head";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import ConnectedServices from "../components/ConnectedServices";
import HeartInterchain from "../components/HeartInterchain";
import HeartInterchainContainerBlocs from "../components/HeartInterchainBlocs";
import ReceiveTransmissions from "../components/ReceiveTransmissions";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cronos HUB</title>
        <meta name="description" content="Cronos HUB Blockchain" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="SHORTCUT ICON" href="../images/icosahedron.png" />
      </Head>

      <main className="max-w-screen-xl m-auto">
        <Header />
        <HomeBanner />
        <ConnectedServices />
        <HeartInterchain />
        <HeartInterchainContainerBlocs />
        <ReceiveTransmissions />
        <Footer />
      </main>
    </>
  );
}
