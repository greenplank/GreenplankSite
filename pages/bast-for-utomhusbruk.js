import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Bastforutomhusbruk from "../components/bast-for-utomhusbruk";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const BastUtomhusbruk = () => {
  return (
    <>
      <Head>
    
<meta name="robots" content="index,follow" />
        <title>Bäst för utomhusbruk</title>
        <meta name="title" content="Bäst för utomhusbruk - GreenPlank.se" />
        <meta name="description" content="Green Plank kompositplank GP7117 är idealiska för olika utomhusapplikationer som ledstänger, uteplats, däck, trädgårdsmöbler, parkbänkar och bord, soptunnor" />
    <link rel="canonical" href="https://www.greenplank.se/bast-for-utomhusbruk" />
      </Head>
      <Layout pageTitle="Bast-for-utomhusbruk">
        <HeaderTwo />
        <PageHeader title="Bast-for-utomhusbruk" crumbTitle="bast-for-utomhusbruk" />
        <StickyHeader />
        <Bastforutomhusbruk />
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default BastUtomhusbruk;
