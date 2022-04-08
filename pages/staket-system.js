import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header-StaketTraditional";
import StaketSection from "../components/Produkter/staketSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../assets/images/backgrounds/staket1.webp"
import Image2 from "../assets/images/backgrounds/staket.webp"
import Head from "next/head";

const staketsystem = () => {
    return (
        <>
            <Head>
       
<meta name="robots" content="index,follow" />
                <title>NOVOFENCE™ lågt underhåll staket plank i komposit - GreenPlank.se</title>
                <meta name="title" content="NOVOFENCE™ lågt underhåll staket plank i komposit - GreenPlank.se" />
                <meta name="description" content="Kompositstaket ger ett vackert, unikt alternativ till trä och vinyl staket. Våra kompositstaket är artificiellt konstruerade för att se ut som äkta trä." />
        <link rel="canonical" href="https://www.greenplank.se/staket-system" />
            </Head>
            <Layout pageTitle="NOVOFENCE™ lågt underhåll staket plank i komposit">
                <HeaderTwo />
                <PageHeader title="NOVOFENCE™ lågt underhåll staket plank i komposit" crumbTitle="NOVOFENCE™ lågt underhåll staket plank i komposit" />
                <StickyHeader />
                <StaketSection />
                <section className="about-one pt-40 pb-40">
                    <Container>
                        <Row style={{ marginBottom: "2em" }}>
                            <Col lg={12}>
                                <div>
                                    {/*====================  project gallery area ====================*/}
                                    <div className="project-gallery-area pb-60">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    {/* section title */}
                                                    <div className="section-title-area text-center mb-30">
                                                        <h2><strong>Varför använda komposit staket?</strong></h2>
                                                    </div>
                                                </div>
                                                <div className="about-section pt-60 pb-60">
                                                    <div className="container">
                                                        <div className="row row-25 align-items-center">
                                                            <div className="col-lg-6 col-12 mb-30 p-30">
                                                                <div className="about-image-two mr-20">
                                                                    <img src={Image1} className="img-fluid" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-30 ml-60">
                                                                <div>
                                                                    <h3>PROBLEMFRITT KOMPOSIT STAKET</h3>
                                                                    <p>
                                                                        Staket är inte nytt. Det har funnits sedan 70-talet. Green Plank-kompositstaket är väl testade av testlaboratorier med bra rykten såsom Tyska och Svenska tekniska forskningsinstitut. Green Planks kompositstaket kräver lite eller inget underhåll och stöds av upp till 25-års begränsad produktgaranti. Traditionella staket, å andra sidan, måste underhållas minst vartannat år och bytas var 10-15 år.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="about-section ">
                                                    <div className="container">
                                                        <div className="row row-25 align-items-center">
                                                            <div className="col-lg-6 col-12 mb-30">
                                                                <div className="about-content-two">
                                                                    <h3>Green Plank – ett låg underhålls kompositstaket som både är snyggt, hållbart och giftfritt !</h3>
                                                                    <p>
                                                                        Med Green Planks NOVOFENCE kompositstaket kan du förvänta dig en jämn, vacker färg på lång sikt. Omvänt kommer tryckbehandlat trä att visa inkonsekvent färgning och kvalitet över tid, även när det upprätthålls korrekt.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-30">
                                                                <div className="about-image-two">
                                                                    <img src={Image2} className="img-fluid" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*====================  End of project gallery area  ====================*/}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <BrandCarousel />
                <Footer />
            </Layout>
        </>
    );
};

export default staketsystem;
