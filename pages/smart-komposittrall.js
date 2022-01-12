import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header-SmartClassic";
import SmartKomposittrallSection from "../components/Produkter/smartKomposittrallSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const SmartKomposittrall = () => {
    return (
        <>
            <Head>
                <title>Smart™ Komposittrall med Not och Spont - enkel installation - GreenPlank.se</title>
                <meta name="title" content="Smart™ Komposittrall med Not och Spont - enkel installation - GreenPlank.se" />
                <meta name="description" content="Patenterad Smart™ Komposittrall med Not och Spont. Inga clips behövas för att montera Smart™ komposittrall. Trallbrädorna förs enkelt på plats där avståndet sker automatiskt och blir en jämn och slät yta." />
            </Head>
            <Layout pageTitle="Smart komposittrall - GreenPlank.se">
                <HeaderTwo />
                <PageHeader title="Smart™ Komposittrall med Not och Spont" crumbTitle="Smart™ Komposittrall med Not och Spont" />
                <StickyHeader />
                <SmartKomposittrallSection />

                <BrandCarousel />
                <Footer />
            </Layout>
        </>
    );
};

export default SmartKomposittrall;
