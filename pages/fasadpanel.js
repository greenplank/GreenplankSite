import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeaderFasadpanel from "../components/page-header-Fasadpanel";
import FasadpanelSection from "../components/Produkter/fasadpanelSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../assets/images/backgrounds/Fasadpanel1.webp"
import Image2 from "../assets/images/backgrounds/fasadpanel2.webp"
import Head from "next/head";

const fasadpanel = () => {
    return (
        <>
            <Head>
   
<meta name="robots" content="index,follow" />
            <title>Fasadpanel i komposit | Fasadbeklädnad, ytterpanel - GreenPlank.se</title>
                <meta name="title" content="Fasadpanel i komposit | Fasadbeklädnad, ytterpanel - GreenPlank.se<" />
                <meta name="description" content="Fasadpanel och Fasadbeklädnad.Green Plank-Fasadpanel är väl testade av testlaboratorier. Fasadbeklädnad kräver lite eller inget underhåll." />
        <link rel="canonical" href="https://www.greenplank.se/fasadpanel" />
            </Head>
            <Layout pageTitle="Fasadpanel i komposit, fasadbeklädnad, ytterpanel">
                <HeaderTwo />
                <PageHeaderFasadpanel title="Fasadpanel i komposit, fasadbeklädnad, ytterpanel" crumbTitle="Fasadpanel i komposit, fasadbeklädnad, ytterpanel" />
                <StickyHeader />
                <FasadpanelSection />
                <section className="about-one pb-40">
                    <Container>
                        <Row style={{ marginBottom: "2em" }}>
                            <Col lg={12}>
                                <div>
                                    {/*====================  project gallery area ====================*/}
                                    <div className="project-gallery-area pt-60 pb-60">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    {/* section title */}
                                                    <div className="section-title-area text-center mb-30">
                                                        <h2><strong>Varför använda fasadpanel i komposit</strong></h2>
                                                    </div>
                                                </div>
                                                <div className="about-section pt-60 pb-60">
                                                    <div className="container">
                                                        <div className="row row-25 align-items-center">
                                                            <div className="col-lg-6 col-12 mb-30">
                                                                <div className="about-image-two">
                                                                    <img src={Image1} className="img-fluid" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-30">
                                                                <div className="about-content-two" style={{ padding: "1em 1em 1em 2em" }}>
                                                                    <h3>PROBLEMFRI KOMPOSIT FASADPANEL</h3>
                                                                    <p>
                                                                        Fasadpanel i komposit är inte nytt. Det har funnits sedan 70-talet. Green Planks komposit fasadpanel är väl testade av testlaboratorier med bra rykten såsom Tyska och Svenska tekniska forskningsinstitut. Green Planks fasadbeklädnad kräver lite eller inget underhåll och stöds av upp till 25-års begränsad produktgaranti. Traditionella ytterpanel, å andra sidan, måste underhållas minst vartannat år och bytas var 10-15 år.
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
                                                                    <h3>Green Plank – ett låg underhålls fasadpanel som både är snyggt, hållbart och giftfritt !</h3>
                                                                    <p>
                                                                        Med Green Plank komposit fasadbeklädnad kan du förvänta dig en jämn, vacker färg på lång sikt. Omvänt kommer tryckbehandlat trä att visa inkonsekvent färgning och kvalitet över tid, även när det upprätthålls korrekt.
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

export default fasadpanel;
