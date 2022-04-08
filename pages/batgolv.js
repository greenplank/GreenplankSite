import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import BatgolvSection from "../components/Produkter/BatgolvSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";


const batgolv = () => {
    return (
        <>
        <Head>
    
<meta name="robots" content="index,follow" />
        <title>Batgolv | Träbåtsgolv - Greenplank.se</title>
        <meta name="title" content="Batgolv | Träbåtsgolv - Greenplank.se" />
        <meta name="description" content="Skaffa det bästa träbåtsgolvet och gör inredningen av batgolvet, halkfri båtgolv. Olika material som kan användas till båtgolv." />
    <link rel="canonical" href="https://www.greenplank.se/batgolv" />
      </Head>
        <Layout pageTitle="Batgolv | Träbåtsgolv - Greenplank.se">
            <HeaderTwo />
            <PageHeader title="Batgolv" crumbTitle="Batgolv" />
            <StickyHeader />
            <BatgolvSection />
            <BrandCarousel />
            <Footer />
        </Layout>
        </>
    );
};

export default batgolv;
