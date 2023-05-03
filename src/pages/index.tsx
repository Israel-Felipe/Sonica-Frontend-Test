import Head from "next/head";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";

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
      </Head>
      <Header />
      <main className="min-h-xl max-w-screen-xl m-auto flex-col justify-center items-start ">
        <HomeBanner />
      </main>
    </>
  );
}
