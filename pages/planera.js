import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header-planner";

import PlaneraSection from "../components/planeraSection";
import Footer from "../components/footer";
import Head from "next/head";

const Planera = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="index,follow" />
        <title>Planera</title>
        <meta name="title" content="Planera - Green Plank.se" />
        <meta name="description" content="Planera" />
        <link rel="canonical" href="https://www.greenplank.se/planera" />
      </Head>
      <Layout pageTitle="Green Plank Planera - GreenPlank.se">
        <HeaderTwo />
        <PageHeader title="" crumbTitle="Planera" />
        <StickyHeader />
        
        <PlaneraSection />
        <Footer />
      </Layout>
    </>
  );
};

export default Planera;
