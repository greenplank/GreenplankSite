import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header-Everdeck";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../assets/images/products/innerPages/Komposittrall/EVERDECKKomposittrall.webp";

import Head from "next/head";
import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";
import Footer from "../components/footer";

const everdeck = () => {
  return (
    <>
      <Head>
     <meta name="robots" content="index,follow" />
        <title>EVERDECK™ Komposittrall - GreenPlank.se</title>
        <meta name="title" content="EVERDECK™ Komposittrall - GreenPlank.se" />
        <meta
          name="description"
          content="EVERDECK™ Komposittrall prisvärt komposittrall för att passa din stil och din budget – PVC-fri!.Green Plank CLASSIC™ kompositbrädor i naturfiber."
        />
        <link
          rel="canonical"
          href="https://www.greenplank.se/everdeck-komposittrall"
        />
      </Head>
      <Layout pageTitle="everdeck-komposittrall">
        <HeaderTwo />
        <StickyHeader />
        <PageHeader
          title="EVERDECK™ Komposittrall"
          crumbTitle="everdeck-komposittrall"
        />
        <section className="blog-details pb-40">
          <Container>
            <Row>
              <Col md={12} lg={12}>
                <div className="page-wrapper pt-60 pb-60">
                  {/*Smart Classic section start*/}
                  <div className="project-section">
                    <div className="container">
                      <div className="row">
                        {/*====================  Star Smart Classic Section-1 content ====================*/}
                        <div className="col-lg-12 col-12 mb-80 pl-30 pl-sm-15 pl-xs-15">
                          <div className="project-details">
                            <h2>EVERDECK™ Komposittrall</h2>
                            <strong>
                              prisvärd komposittrall för att passa din stil och
                              budget – PVC-fri!
                            </strong>
                            <div class="et_pb_text_inner">
                              <div class="ce_text block">
                                <strong>
                                  Inspirerad av den skandinaviska
                                  designtraditionen som kännetecknas av estetik,
                                  enkelhet och funktionalitet.
                                </strong>
                                <p>
                                  Everdeck är ett av de mest populära
                                  komposittralls alternativen med lågt underhåll
                                  när det gäller överkomliga priser. Men tro
                                  inte att detta gör att den har mindre
                                  kvalitet. Vad som gör Everdeck bra är att
                                  bortsett från att vara billigare, är det
                                  fantastiskt och hållbart samtidigt. Med ett så
                                  överraskande prisvärt alternativ finns det
                                  helt enkelt ingen anledning att nöja sig med
                                  färgning, tätning, flisor och konstant
                                  underhåll.
                                </p>
                                <p>
                                  Hög glidbeständiga eleganta, ribbade /
                                  räfflade borstade ytor möjliggör bra dragkraft
                                  i våta områden som runt pooler, de är säkra
                                  att gå på barfota.
                                </p>
                                <div>
                                  <ul>
                                    <li>
                                      <strong>Enhetlighet </strong>– HidLoc ™
                                      dolda fästelement säkerställer en slät och
                                      enhetlig yta som är säker att gå på.
                                    </li>
                                    <li>
                                      <strong>Komplimerande tillbehör </strong>{" "}
                                      Komplettera dina dröm patio trall design
                                      med våra täckbrädor – den perfekta matchen
                                      för din högpresterande EVERDECK ™
                                      komposittrall.
                                    </li>
                                  </ul>
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
                                      src={Image1}
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
                                        <td align="left"> Everdeck</td>
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
                                        <td align="left">
                                          3600 mm och 2900 mm
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Bredd :</strong>
                                        </td>
                                        <td align="left">146 mm</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Tjocklek :</strong>
                                        </td>
                                        <td align="left">23 mm</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Färg :</strong>
                                        </td>
                                        <td align="left">
                                          Charcoal ,Beach Grey
                                        </td>
                                      </tr>

                                      <tr>
                                        <td align="left">
                                          <strong>Typ :</strong>
                                        </td>
                                        <td align="left">
                                          Komposit Trall helga
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Åtgång:</strong>
                                        </td>
                                        <td align="left">6,7 lm/m2</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Antal/St :</strong>
                                        </td>
                                        <td align="left">
                                          0,54 st /m2 och 0,87 m2/pack
                                        </td>
                                      </tr>

                                      <tr>
                                        <td align="left">
                                          <strong>mått :</strong>
                                        </td>
                                        <td align="left">
                                          3600 x 146 x 23 mm och 2900 x 146 x 23
                                          mm
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>vikt /st :</strong>
                                        </td>
                                        <td align="left">
                                          8,28 kg/st och 13,34 kg/pack
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>vikt/m2 :</strong>
                                        </td>
                                        <td align="left">15,41 kg /m2</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Material :</strong>
                                        </td>
                                        <td align="left">
                                          Trall komposit hybridmaterial
                                          återvunnen plast och träavfall/risskal
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Antal/St 2,9 lm :</strong>
                                        </td>
                                        <td align="left">2 stk /pack</td>
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
                                        <td align="left">2,3 cm3</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>

                                <div className="row section-space--top--60">
                                  <Grid container spacing={3}>
                                    <Grid item xs={6} sm={4} lg={6}>
                                      <a
                                        target="_blank"
                                        href="/bestall-prov"
                                        target="_blank"
                                        className="thm-btn"
                                      >
                                        beställ prov
                                      </a>
                                    </Grid>
                                  </Grid>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*====================  End of Smart Classic Section-2 content  ====================*/}

                        {/*====================  Star Smart Classic Section-4 content ====================*/}
                        <div className="col-lg-12 mb-80">
                          <div className="project-gallery-wrapper">
                            <div className="row">
                              <div className="col-md-6 col-mobile-6 mb-40 mt-20 pl-30 pl-sm-15 pl-xs-15">
                                <div className="project-details">
                                  <h2 className="mb-40 mt-20">
                                    <strong>Produktinformation</strong>
                                  </h2>
                                  <h3>Färgval</h3>
                                  <p>
                                    Färgerna kan se annorlunda ut baserat på
                                    fotografering eller enheten som ni besöker
                                    vår hemsida på. För att få en mer exakt bild
                                    på hur materialet ser ut så kan ni enkelt
                                    beställa prover av oss.
                                  </p>
                                  <h3>Naturlig skönhet</h3>
                                  <p>
                                    Våra produkter är designade och inspirerade
                                    av naturligt trä och kan därför ha små
                                    färgvariationer från produktionsrunda till
                                    produktionsrunda. Detta påverkar inte
                                    prestandan av produkten. Kontakta oss för
                                    mer information.
                                  </p>
                                  <h3>Behåll skönheten</h3>
                                  <p>
                                    Alla ytor samlar smuts, damm och
                                    föroreningar och kräver rengöring. Det är
                                    nödvändigt att rengöra ditt komposittrall
                                    med jämna mellanrum för att hålla den så
                                    vacker som den dag du installerade det.
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-6 col-mobile-6 mb-40 mt-20 pl-30 pl-sm-15 pl-xs-15">
                                <div className="project-details">
                                  <h2 className="mb-40 mt-20">
                                    <strong>
                                      Pålitlig hållbarhet, överlägsen kvalitet
                                    </strong>
                                  </h2>
                                  <strong>1. </strong>Installerad med HidLoc™
                                  dolda fästelement för att skapa enhetlig yta,
                                  vilket gör det säkrare och mer bekvämt för
                                  familjer med barn och husdjur.
                                  <br />
                                  <strong>2. </strong>Träfärgade färger skapar
                                  ett äkta kornmönster som inbjuder dig att
                                  koppla av och njuta av ditt personliga
                                  tropiska paradis.
                                  <br />
                                  <strong>3. </strong>Utmärkande inlay design,
                                  stil och färgalternativ
                                  <br />
                                  <strong>4. </strong>Ingen årlig färgning,
                                  tätning eller målning krävs
                                  <br />
                                  <strong>5. </strong>Exceptionell
                                  motståndskraft mot UV-ljus och blekning av
                                  färger
                                  <br />
                                  <strong>6. </strong>Hög glidmotstånd ger en
                                  säker yta, även i våta förhållanden
                                  <br />
                                  <strong>7. </strong>Kommer inte spricka,
                                  Flisa, Ruttna eller Vrida sig.
                                  <br />
                                  <strong>8. </strong>Fri från giftiga
                                  tillsatser
                                  <br />
                                  <strong>9. </strong>Lämplig för privat sektor
                                  <br />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*====================  End of Smart Classic Section-4 content  ====================*/}

                        {/*====================  Star Smart Classic Section-5 content ====================*/}
                        <div className="col-12 mb-80">
                        <h3>TILLBEHÖR</h3>
                          <hr />
                          <p style={{marginBottom:"60px"}}>
                            Green Plank SMART™ tillbehör utvidgar dina
                            horisonter ytterligare, så att du kan bygga ut
                            distinkta och förtjusande detaljer till ditt SMART™
                            -trall som förbättrar både dess skönhet och
                            funktionalitet. Från F- och L-Lister till,
                            ventilerade aluminium lister, pidestaler, reglar,
                            etc., Vi har allt material som behövs för att bygga
                            och avsluta ert SMART™ Kompositdäck.
                          </p>
                        </div>
                        {/*====================  End of Star Smart Classic Section-5 content  ===============*/}

                        {/*====================  Star Smart Classic Section-6 content  ====================*/}
                        <div className="col-12 mb-30 mt-80">
                          <h3>Dokument</h3>
                          <hr />

                          <Grid container spacing={3}>
                            <Grid item xs={6} sm={2}>
                              <a target="_blank" href="/pdfs/Broschyr-SV.pdf">
                                <img
                                  src={pdfimg1}
                                  className="img-fluid"
                                  alt=""
                                />
                              </a>
                            </Grid>

                            <Grid item xs={6} sm={2}>
                              <a
                                target="_blank"
                                href="/pdfs/Everdeck/everdeck-swedish-with-aluminum-trims.pdf"
                              >
                                <img
                                  src={pdfimg4}
                                  className="img-fluid"
                                  alt=""
                                />
                              </a>
                            </Grid>

                            <Grid item xs={6} sm={2}></Grid>
                          </Grid>
                        </div>
                        {/*====================  End of Smart Classic Section-6 content  ====================*/}
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

export default everdeck;
