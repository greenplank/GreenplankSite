import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import KomposittrallSection from "../components/Produkter/komposittrallSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../assets/images/backgrounds/komposittrall1.webp"
import Image2 from "../assets/images/backgrounds/komposittrall.webp"
import Head from "next/head";
import { UncontrolledCarousel } from "reactstrap";
import Hidden from '@material-ui/core/Hidden';

const items = [
    {
        src: require("../assets/images/backgrounds/ezgif.com-gif-maker.webp"),
        altText: "Slide 1",
        caption: "",
        header: "",
        key: "1",
    },
    {
        src: require("../assets/images/backgrounds/5-1-1024x273.webp"),
        altText: "Slide 2",
        caption: "",
        header: "",
        key: "2",
    }
    // {
    //     src: require("../assets/images/backgrounds/5-1-1024x273.webp"),
    //     altText: "Slide 3",
    //     caption: "",
    //     header: "",
    //     key: "3",
    // },
];

const Komposittrall = () => {

    return (
        <>
            <Head>
                <title>Komposittrall</title>
                <meta name="title" content="Komposittrall | Trädäck | Trädgårdsdäck - GreenPlank.se" />
                <meta name="description" content="Skapa ditt dröm däck med greenplank, det bästa varumärket för komposittrall för hög prestanda i världen. Vår inramning, räcke och belysning kompletterar." />
            </Head>
            <Layout pageTitle="Komposittrall">
                <HeaderTwo />
                <PageHeader title="Komposittrall" crumbTitle="komposittrall" />
                <StickyHeader />

                <Hidden smDown>
                <Row className="about-one pt-120 pb-20">
                    <Col md="10" className="mx-auto">
                        <UncontrolledCarousel items={items} />
                    </Col>
                </Row>
                </Hidden>



                <KomposittrallSection />
                <section className="about-one pt-20 pb-40">
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
                                                        <h2><strong>Varför använda komposittrall?</strong></h2>
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
                                                            <div className="col-lg-6 col-12 mb-30 ml-60" style={{ padding: "1em 1em 1em 2em" }} >
                                                                <div>
                                                                    <h3>PROBLEMFRITT KOMPOSITTRALL</h3>
                                                                    <p>
                                                                        Komposittrall är inte nytt. Det har funnits sedan 70-talet. Green Plank-komposittrall är väl testade av testlaboratorier med bra rykten såsom Tyska och Svenska tekniska forskningsinstitut. Green Planks komposittrall kräver lite eller inget underhåll och stöds av upp till 25-års begränsad produktgaranti. Traditionella trädäck, å andra sidan, måste underhållas minst vartannat år och bytas var 10-15 år.
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
                                                                    <h3>Green Plank – ett låg underhålls komposittrall som både är snyggt, hållbart och giftfritt !</h3>
                                                                    <p>
                                                                        Med Green Plank-komposittrall kan du förvänta dig en jämn, vacker färg på lång sikt. Omvänt kommer tryckbehandlat trä att visa inkonsekvent färgning och kvalitet över tid, även när det upprätthålls korrekt.
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



export default Komposittrall;


