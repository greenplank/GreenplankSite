import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import ClassicKomposittrallSection from "../components/Produkter/classicKomposittrallSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";

const ClassicKomposittrall = () => {
    return (
        <>
            <Head>
        
<meta name="robots" content="index,follow" />
                <title>CLASSIC™ Komposittrall - GreenPlank.se</title>
                <meta name="title" content="CLASSIC™ Komposittrall - GreenPlank.se" />
                <meta name="description" content="Green Plank's Classic Komposittrall, vårt Classic trädäck ger en kostnadseffektiv och prestandahöjande uppgradering jämfört med tryckbehandlade trädäck." />
        <link rel="canonical" href="https://www.greenplank.se/classic-komposittrall" />
            </Head>

            <Layout pageTitle="Classic Komposittrall">
                <HeaderTwo />
                <PageHeader title="Classic Komposittrall" crumbTitle="ClassicKomposittrall" />
                <StickyHeader />
                <ClassicKomposittrallSection />

                <BrandCarousel />
                <Footer />
            </Layout>
        </>
    );
};

export default ClassicKomposittrall;
