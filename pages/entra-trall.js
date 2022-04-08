import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import EntraTrallSection from "../components/Produkter/entraTrallSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const Entratrall = () => {
    return (
        <>
            <Head>
        
<meta name="robots" content="index,follow" />
            <title>ENTRA™ spontad komposittrall | massiv komposittrall - GreenPlank.se</title>
                <meta name="title" content="ENTRA™ kompositbrädor | Entra wpc trall komposit - GreenPlank.se" />
                <meta name="description" content="ENTRA™-Komposittrall, solid komposittrall av högsta kvalitet med tunga och spår. Exceptionellt hög prestanda och bästa kvalitet Entra komposittrall" />
        <link rel="canonical" href="https://www.greenplank.se/entra-trall" />
            </Head>
            <Layout pageTitle="ENTRA™ kompositbrädor | Entra wpc trall komposit - GreenPlank.se">
                <HeaderTwo />
                <PageHeader title="EENTRA™ spontad komposittrall" crumbTitle="ENTRA™ spontad komposittrall" />
                <StickyHeader />
                <EntraTrallSection />
                <BrandCarousel />
                <Footer />
            </Layout>
        </>);
};

export default Entratrall;
