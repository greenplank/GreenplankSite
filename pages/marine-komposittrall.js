import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader1 from "../components/page-header";
import MarineKomposittrallSection from "../components/Produkter/marineKomposittrallSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";


const MarineKomposittrall = () => {
    return (
        <>
            <Head>
                <title>MARINE™ massiv komposittrall - GreenPlank.se</title>
                <meta name="title" content="MARINE™ massiv komposittrall - GreenPlank.se" />
                <meta name="description" content="Green Plank lågt underhåll massiva trallbrädor i komposit. Massiv komposittrall från Green Plank är tillverkade och designade för maximal prestanda och är av yttersta klass inom träkomposit marknaden." />
            </Head>
            <Layout pageTitle="MARINE™ massiv komposittrall">
                <HeaderTwo />
                <PageHeader1 title="MARINE™ massiv komposittrall" crumbTitle="MARINE™ massiv komposittrall" />
                <StickyHeader />
                <MarineKomposittrallSection />
                <BrandCarousel />
                <Footer />
            </Layout>
        </>
    );
};

export default MarineKomposittrall;
