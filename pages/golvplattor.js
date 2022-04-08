import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header-Golvplator";
import GolvplattorSection from "../components/Produkter/GolvplattorSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../assets/images/backgrounds/golvplattor1.webp"
import Image2 from "../assets/images/backgrounds/golvplattor.webp"
import Head from "next/head";

const golvplattor = () => {
    return (
        <>
            <Head>
        
<meta name="robots" content="index,follow" />
                <title>Golvplattor, trallruta, utomhusgolv & balkongplattor - GreenPlank.se</title>
                <meta name="title" content="Golvplattor, Trallruta, Utomhusgolv & balkongplattor - GreenPlank.se" />
                <meta name="description" content="Golvplattor, Trallruta, Utomhusgolv & balkongplattor i hållbara komposit är perfekta för uteplatser, tak, balkonger och täcka tuffa inomhusgolv." />
        <link rel="canonical" href="https://www.greenplank.se/golvplattor" />
            </Head>
            <Layout pageTitle="Golvplattor, trallruta, utomhusgolv & balkongplattor">
                <HeaderTwo />
                <PageHeader title="Golvplattor, trallruta, utomhusgolv & balkongplattor" crumbTitle="Golvplattor, trallruta, utomhusgolv & balkongplattor" />
                <StickyHeader />
                <GolvplattorSection />
                <section className="about-one pb-40">
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
                                                        <h2><strong>Varför använda golvplattor?</strong></h2>
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
                                                                    <h3>PROBLEMFRITT GOLVPLATTOR</h3>
                                                                    <p>
                                                                        Golvplattor är inte nytt. Det har funnits sedan 70-talet. Green Plank-golvplattor är väl testade av testlaboratorier med bra rykten såsom Tyska och Svenska tekniska forskningsinstitut. Green Planks golvplattor kräver lite eller inget underhåll och stöds av upp till 25-års begränsad produktgaranti. Traditionella golvplattor, å andra sidan, måste underhållas minst vartannat år och bytas var 10-15 år.
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
                                                                    <h3>Green Plank – ett låg underhålls golvplattor som både är snyggt, hållbart och giftfritt !</h3>
                                                                    <p>
                                                                        Med Green Plank-plattor kan du förvänta dig en jämn, vacker färg på lång sikt. Omvänt kommer tryckbehandlat trä att visa inkonsekvent färgning och kvalitet över tid, även när det upprätthålls korrekt.
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

export default golvplattor;
