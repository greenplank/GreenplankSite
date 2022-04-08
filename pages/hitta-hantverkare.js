import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import HittaTextSection from "../components/HittaTextSection";
import Head from "next/head";
import Footer from "../components/footer";

const HittaHantverkare = () => {
  return (
    <>
      <Head>
   
<meta name="robots" content="index,follow" />
        <title>Hitta Hantverkare</title>
        <meta name="title" content="Expert Hantverkare för snabb installation - Greenplank.se
" />
        <meta name="description" content="Hitta Hantverkare of Green Plank Natural Fiber Composite Products som är närmast dig för perfekt installation av komposit.
" />
    <link rel="canonical" href="https://www.greenplank.se/hitta-hantverkare" />
      </Head>
      <Layout pageTitle="Expert Hantverkare för snabb installation - Greenplank.se">
        <HeaderTwo />
        <PageHeader title="Hitta Green Plank Hantverkare" crumbTitle="HittaHantverkare" />
        <StickyHeader />
        <HittaTextSection />
        <Footer />
      </Layout>
    </>
  );
};

export default HittaHantverkare;
