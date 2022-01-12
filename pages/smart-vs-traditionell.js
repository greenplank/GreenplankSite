import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import SmartTraditionalSection from "../components/SmartTraditionalSection"; 
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const SmartTraditionell = () => {
  return (
    <Layout pageTitle="Smart™ komposittrall vs. traditionell komposittrall">
      <HeaderTwo/>
      <PageHeader title="Smart™ komposittrall vs. traditionell komposittrall" crumbTitle="Smart™ komposittrall vs. traditionell komposittrall" />
      <StickyHeader />
      <SmartTraditionalSection />
      <BrandCarousel />
      <Footer />
    </Layout>
  );
};

export default SmartTraditionell;
  
