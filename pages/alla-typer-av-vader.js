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
    <meta name="robots" content="index,follow" />
        <title>Green Plank underhållsfri komposittrall som passar nordiska klimat med snö, is & saltvatten!</title>
        <meta name="title" content="Green Planks komposittrall med lågt underhåll som motstår det nordiska klimatet." />
        <meta name="description" content="Green Plank komposittrall håller sig vacker och formstabil längre, även i nordiska klimat. Green Planks kompositprodukter används i flertal offentliga miljöer i hela sverige." />
    <link rel="canonical" href="https://www.greenplank.se/alla-typer-av-vader" />
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
