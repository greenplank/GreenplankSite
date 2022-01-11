import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import AllaTyperVaders from "../components/alla-typer-av-vader";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const AllaTyperVader = () => {
  return (
    <>
      <Head>
        <title>Green Plank underhållsfri komposittrall som passar nordiska klimat med snö, is & saltvatten!</title>
        <meta name="title" content="Green Plank underhållsfri komposittrall som passar nordiska klimat med snö, is & saltvatten!" />
        <meta name="description" content="Green Plank komposittrall håller sig vacker och formstabil längre, även i nordiska klimat med snö, is och stänk av saltvatten. Finns referenser från Norra till Södra Sverige i offentligamiljör." />
      </Head>
      <Layout pageTitle="Alla typer av väder - GreenPlank.se">
        <HeaderTwo />
        <PageHeader title="Alla-typer-av-vader" crumbTitle="alla-typer-av-vader" />
        <StickyHeader />
        <AllaTyperVaders />
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default AllaTyperVader;
