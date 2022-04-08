import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header-UltraSmart";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Grid from "@material-ui/core/Grid";

import Image11 from "../assets/images/products/innerPages/Komposittrall/ultrasmart.webp";

import Imagecolor1 from "../assets/images/colors/cofeeburn.webp";
import Imagecolor2 from "../assets/images/colors/nordicgrey.webp";

import Footer from "../components/footer";

const ultrasmart = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="index,follow" />
        <title>
          Smart™ ULTRA - hållbar och lättvikt komposittrall, bäst för balkonger
          - 30 års garanti
        </title>
        <meta
          name="title"
          content="Smart™ ULTRA - hållbar och lättvikt komposittrall, bäst för balkonger - 30 års garanti"
        />
        <meta
          name="description"
          content="Underhållsfri och lättvikt komposittrall som passar bäst på uteplatsen eller på en balkong  - 30 års garanti. Smart™ ULTRA komposittrall är designad för maximal hållbarhet."
        />
        <link rel="canonical" href="https://www.greenplank.se/ultra-smart" />
      </Head>

      <Layout pageTitle="ultra-smart">
        <HeaderTwo />
        <StickyHeader />
        <PageHeader title="Ultra-smart" crumbTitle="ultra-smart" />
        <section className="blog-details pt-40 pb-40">
          <Container>
            <Row>
              <Col md={12} lg={12}>
                <div className="page-wrapper pb-40 pt-40">
                  {/*Smart Classic section start*/}
                  <div className="project-section">
                    <div className="container">
                      <div className="row">
                        {/*====================  Star Smart Classic Section-1 content ====================*/}
                        <div className="col-lg-12 col-12 mb-80 pl-30 pl-sm-15 pl-xs-15">
                          <div className="project-details">
                            <h2>
                              Smart™ ULTRA - hållbar och lättvikts komposittrall
                            </h2>
                            <strong>
                              Med vår nya Smart™ ULTRA komposittrall får du en
                              terrass som är 50% lättare och 25% starkare än
                              tidigare modeller.
                            </strong>
                            <div class="et_pb_text_inner">
                              <div class="ce_text block">
                                <strong>
                                  Smart™ ULTRA komposittrall är en solid
                                  trallbräda tillverkad av träfiber och skum-PVC
                                  för en lätt och stark terrass som finns i två
                                  färger: Coffee Brown och Nordic Sand.
                                </strong>
                                <div>
                                  <ul>
                                    <li>
                                      ASA-beläggning gör den reptålig och
                                      färgfast.
                                    </li>
                                    <li>Inget underhåll brandmotstånd.</li>
                                    <li>
                                      Hög halksäkerhet och vi erbjuder 30 års
                                      garanti för slitage.
                                    </li>
                                    <li>
                                      Färgen bleknar inte med solljus och blir
                                      inte färgad av vin, olja, kaffe eller
                                      andra vätskor.
                                    </li>
                                  </ul>
                                  <p>
                                    Eftersom detta är en Green Plank
                                    Smart-produkt erbjuder den ett sömlöst
                                    utseende med not och spont som gör
                                    installationer upp till 60% snabbare än
                                    normalt komposittrall. Den är installerad
                                    med 25 cm c/c och ger en mycket solid yta
                                    eftersom den låser ihop brädorna.
                                  </p>
                                  <p>
                                    Smart™ ULTRA komposittrall erbjuder en
                                    mycket halksäker yta och är helt vattentät
                                    vilket gör den mycket lämplig för våta
                                    områden som runt pooler eller nära
                                    vattendrag.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*====================  End of Smart Classic Section-1 content  ====================*/}

                        {/*====================  Star Smart Classic Section-2 content  ====================*/}
                        <div className="col-lg-12 mb-80">
                          <div className="project-gallery-wrapper">
                            <div className="row">
                              <div className="col-md-6 col-mobile-6 mb-20">
                                <div className="single-gallery-project">
                                  <div className="single-gallery-project__image">
                                    <img
                                      src={Image11}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-mobile-6 mb-20">
                                <div className="project-information">
                                  <h3>Produktinformation</h3>
                                  <table width="100%">
                                    <tbody>
                                      <tr>
                                        <td align="left">
                                          <strong>Varumärke :</strong>
                                        </td>
                                        <td align="left"> Green Plank</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Produkttyp :</strong>
                                        </td>
                                        <td align="left">Ultera Smart</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Art.Nr.:</strong>
                                        </td>
                                        <td align="left"> </td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Längd :</strong>
                                        </td>
                                        <td align="left">3600 mm</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Bredd :</strong>
                                        </td>
                                        <td align="left">142 mm</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Tjocklek :</strong>
                                        </td>
                                        <td align="left">22 mm</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Färg :</strong>
                                        </td>
                                        <td align="left">
                                          Nordic Grey , Koffee Brun
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Yta :</strong>
                                        </td>
                                        <td align="left">
                                          Rika, mångfärgade färger, med 3D trä
                                          textuer
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Ytdetaljer :</strong>
                                        </td>
                                        <td align="left">halksäker yta</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Typ :</strong>
                                        </td>
                                        <td align="left">
                                          Komposit Trall Solid klick system
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Åtgång:</strong>
                                        </td>
                                        <td align="left">6,94 lm/m2</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Antal/St :</strong>
                                        </td>
                                        <td align="left">0,52 st /m2</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Regelavstånd :</strong>
                                        </td>
                                        <td align="left">25cm c/c</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>mått :</strong>
                                        </td>
                                        <td align="left">3600 x 142 x 22 mm</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>vikt /st :</strong>
                                        </td>
                                        <td align="left">9,07 kg/st</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>vikt/m2 :</strong>
                                        </td>
                                        <td align="left">17,48 kg /m2</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Material :</strong>
                                        </td>
                                        <td align="left">
                                          Trall komposit hybridmaterial
                                          återvunnen plast och träavfall/risskal
                                          med ASA beläggning
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Leveranstid :</strong>
                                        </td>
                                        <td align="left">3-5 arbetsdagar</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>densitet :</strong>
                                        </td>
                                        <td align="left">
                                          1,1 cm3 lätt som trä
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="row mt-60">
                                  <Grid container spacing={3}>
                                    <Grid item xs={6} sm={3} lg={4}>
                                      <a
                                        target="_blank"
                                        href="/bestall-prov"
                                        className="thm-btn"
                                      >
                                        beställ prov
                                      </a>
                                    </Grid>
                                    <Grid item xs={6} sm={3} lg={6}>
                                      <a
                                        target="_blank"
                                        href="/pdfs/Ultra_SMART%20Komposittral_compressed.pdf"
                                        className="thm-btn"
                                      >
                                        Ultra Smart Broschyr
                                      </a>
                                    </Grid>
                                    {/* <Grid item xs={6} sm={3} lg={6}>
                                      <a
                                        target="_blank"
                                        href="/pdfs/SmartMarine/smartMarineswedish.pdf"
                                        className="thm-btn"
                                      >
                                        installationsguide
                                      </a>
                                    </Grid>
                                    <Grid item xs={8} sm={6} lg={8}>
                                      <a
                                        target="_blank"
                                        href="/pdfs/SmartMarine/smart-Marine-swedish.pdf"
                                        className="thm-btn"
                                      >
                                        installation av aluminium
                                      </a>
                                    </Grid> */}
                                  </Grid>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*====================  End of Smart Classic Section-2 content  ====================*/}

                        {/*====================  Star Smart Classic Section-3 content  ====================*/}

                        <div className="col-12 mb-80">
                          <h3>
                          Tillgängliga färger. (Kontakta oss för att veta exakt kvantitet)
                          </h3>
                          <hr />
                          <div className="text-center">
                            <Grid container spacing={3}>
                              <Grid item xs={6} sm={2}>
                                <div className="single-gallery-project__image">
                                  <img
                                    src={Imagecolor1}
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <h5 className="mt-20 text-center">
                                  Cofee Burn
                                  </h5>
                                </div>
                              </Grid>
                              <Grid item xs={6} sm={2}>
                                <div className="single-gallery-project__image">
                                  <img
                                    src={Imagecolor2}
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <h5 className="mt-20 text-center">
                                    Nordic Grey
                                  </h5>
                                </div>
                              </Grid>
                            </Grid>
                          </div>
                        </div>

                        {/*====================  End of Smart Classic Section-3 content  ====================*/}

                        {/*====================  Star Smart Classic Section-4 content ====================*/}
                        <div className="col-lg-12 mb-80">
                          <div className="project-gallery-wrapper">
                            <div className="row">
                              <div className="col-md-6 col-mobile-6 mb-40 mt-20 pl-30 pl-sm-15 pl-xs-15">
                                <div className="project-details">
                                  <h2 className="mb-40 mt-20">
                                    <strong>
                                      Smart™ ULTRA - hållbar och lättvikt
                                      komposittrall funktioner
                                    </strong>
                                  </h2>
                                  <ul>
                                    <li>
                                      <strong>1. </strong>30 års garanti
                                    </li>
                                    <li>
                                      <strong>2. </strong>Lätt och solid
                                      trallbräda
                                    </li>
                                    <li>
                                      <strong>3. </strong>Fläckresistent, främst
                                      från vin och kaffe.
                                    </li>
                                    <li>
                                      <strong>4. </strong>Sömlös yta med vårt
                                      patenterade Smart click-system.
                                    </li>
                                    <li>
                                      <strong>5. </strong>Ingen årlig målning,
                                      tätning eller oljning krävs.
                                    </li>
                                    <li>
                                      <strong>6. </strong>Motstånd mot UV-ljus
                                      och färgblekning.
                                    </li>
                                    <li>
                                      <strong>7. </strong>Fri från giftiga
                                      tillsatser.
                                    </li>
                                    <li>
                                      <strong>8. </strong>upp till 60% snabbare
                                      installation jämnfört med traditionellt
                                      trädäck
                                    </li>
                                    <li>
                                      <strong>9. </strong>WPC med träflisor
                                    </li>
                                    <li>
                                      <strong>10. </strong>Det perfekta
                                      altangolv för din trädgård. Beställ idag!
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-6 col-mobile-6 mb-40 mt-20 pl-30 pl-sm-15 pl-xs-15"></div>
                            </div>
                          </div>
                        </div>
                        {/*====================  End of Smart Classic Section-4 content  ====================*/}
                      </div>
                    </div>
                  </div>
                  {/*Projects section end*/}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default ultrasmart;
