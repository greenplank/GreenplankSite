import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header-EntraKompositrall";
import { Container, Row, Col } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import Image1 from "../assets/images/products/innerPages/Komposittrall/ENTRAKomposittrall.webp";

import Imagecolor1 from "../assets/images/colors/entra/Cloudy-Grey-GreenPlank-composite-decking-color-200x200.webp";
// import Imagecolor2 from "../assets/images/colors/entra/greenplank-entra-cloudy-grey-composite-decking-color.gif";
// import Imagecolor3 from "../assets/images/colors/entra/greenplank-entra-teak-composite-decking-color.gif";
// import Imagecolor4 from "../assets/images/colors/entra/greenplank-entra-walnut-composite-decking-color.gif";

import Imagesurface from "../assets/images/surface/Asset-83-8.png";
import Head from "next/head";
import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";
import Footer from "../components/footer";

const entraKomposittrall = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="index,follow" />
        <title>
          ENTRA™ spontad komposittrall | massiv trallbrädor i komposit -
          GreenPlank.se
        </title>
        <meta
          name="title"
          content="ENTRA™ komposittrall | ENTRA™ kompositbrädor - GreenPlank.se"
        />
        <meta
          name="description"
          content="ENTRA ™ komposittrall, exceptionellt hög prestanda och kvalitet - PVC-fri! . ENTRA™ kompositbrädor fångar värmen och skönheten i naturligt. "
        />
        <link
          rel="canonical"
          href="https://www.greenplank.se/entra-komposittrall"
        />
      </Head>

      <Layout pageTitle="ENTRA™ komposittrall | ENTRA™ kompositbrädor - GreenPlank.se">
        <HeaderTwo />
        <StickyHeader />
        <PageHeader
          title="ENTRA™ spontad komposittrall"
          crumbTitle="ENTRA™ spontad komposittrall"
        />
        <section className="blog-details pb-40">
          <Container>
            <Row>
              <Col md={12} lg={12}>
                <div className="page-wrapper section-space--inner--120">
                  {/*Smart Classic section start*/}
                  <div className="project-section">
                    <div className="container">
                      <div className="row">
                        {/*====================  Star Smart Classic Section-1 content ====================*/}
                        <div className="col-lg-12 col-12 mb-80 pl-30 pl-sm-15 pl-xs-15">
                          <div className="project-details mt-40">
                            <h2>ENTRA™ spontad komposittrall</h2>
                            <strong>
                              exceptionellt hög prestanda och kvalitet –
                              PVC-fri!
                            </strong>
                            <div class="et_pb_text_inner">
                              <div class="ce_text block">
                                <strong>
                                  Inspirerad av naturen och designad med ett
                                  syfte … färg, struktur, skönhet & prestanda,
                                  hittar du ENTRA™ -komposit är vackert
                                  realistisk och mycket praktisk med en tidlös
                                  kvalitet.
                                </strong>
                                <p>
                                  Green Plank ENTRA™ Komposittrall av naturfiber
                                  är en av våra högkvalitativa komposittrall med
                                  Not och Spont system som är enkel att använda
                                  med fantastiska resultat. Det ger en visuellt
                                  stängd terrassyta som fortfarande inte
                                  tillåter ogräs att växa upp eller detaljer
                                  falla ner genom golvet. ENTRA™ -kompositbrädor
                                  fångar värmen och skönheten i naturliga och
                                  exotiska lövträ.
                                </p>
                                <p>
                                  {" "}
                                  Med Not och Spont teknologi och ett osynligt
                                  installationssystem ger våra ENTRA™ – trall en
                                  till synes clips-fri yta som möjliggör året
                                  runt komfort för dina bara fötter och dina
                                  husdjurs tassar. Den osynliga installationen
                                  säkerställer jämnt fogavstånd för att hjälpa
                                  dränering av vatten.
                                </p>

                                <p>
                                  Precis som äkta träskivor, kan vårt ENTRA™
                                  -kompositbrädor slipas eller sågas till vilken
                                  önskad form som helst utan att tappa
                                  täckbrädans äkta träeffekt.
                                </p>
                                <div>
                                  <strong>Premiumkvalitet</strong> – Beprövad
                                  nordisk kvalitet för hårt väder och grönare
                                  levande.
                                  <br />
                                  <strong>Enhetlighet </strong>– Vår komposit
                                  Not och Spont trall ger mycket enhetliga och
                                  släta ytor.
                                  <br />
                                  <strong>Komplimerande tillbehör</strong> –
                                  Komplett ditt dröm patio-trall design med våra
                                  Komposittäckbrädor – den perfekta matchen för
                                  din högpresterande ENTRA™ komposittrall.
                                  <br />
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
                                        <td align="left"> Entra</td>
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
                                        <td align="left"> 3000 mm</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Bredd :</strong>
                                        </td>
                                        <td align="left">150 mm</td>
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
                                        <td align="left">Grey,</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Yta :</strong>
                                        </td>
                                        <td align="left">
                                          vändbara brädor ,Med en exotisk
                                          färgnyans.
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Ytdetaljer :</strong>
                                        </td>
                                        <td align="left">
                                          halksäker räfflad yta på ena sidan och
                                          en plan yta på den andra
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Typ :</strong>
                                        </td>
                                        <td align="left">
                                          Komposit Trall solid tungt arbete
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Åtgång:</strong>
                                        </td>
                                        <td align="left">6,4 lm/m2</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Antal/St :</strong>
                                        </td>
                                        <td align="left">0,47 /m2</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Regelavstånd :</strong>
                                        </td>
                                        <td align="left">50 cc</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>mått :</strong>
                                        </td>
                                        <td align="left">3000 x 150 x 23 mm</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>vikt /st :</strong>
                                        </td>
                                        <td align="left">12,6 kg/st</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>vikt/m2 :</strong>
                                        </td>
                                        <td align="left">26,88 /m2</td>
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
                                {/* </div> */}
                                <div className="row mt-40 mb-30">
                                  <div
                                    className="row"
                                    style={{
                                      marginTop: ".5em",
                                      marginRight: "8px",
                                      marginLeft: "4px",
                                    }}
                                  >
                                    <img src={Imagesurface} />
                                  </div>
                                </div>
                                <div className="row mt-60">
                                  <Grid container spacing={3}>
                                    <Grid item xs={6} sm={3} lg={6}>
                                      <a
                                        target="_blank"
                                        href="/bestall-prov"
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

                        {/*====================  Star Smart Classic Section-3 content  ====================*/}

                        <div className="col-12 mb-80">
                          <h3>
                            Tillgängliga färger. (Kontakta oss för att veta
                            exakt kvantitet)
                          </h3>
                          <hr />
                          <Grid container spacing={3}>
                            <Grid item xs={6} sm={2}>
                              <div className="single-gallery-project__image">
                                <img
                                  src={Imagecolor1}
                                  className="img-fluid"
                                  alt=""
                                />
                                <h4 className="mt-20 text-center">
                                  Cloudy Grey
                                </h4>
                              </div>
                            </Grid>
                           
                            <Grid item xs={6} sm={2}></Grid>
                          </Grid>
                        </div>

                        {/*====================  End of Smart Classic Section-3 content  ====================*/}

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
                          <p style={{ marginBottom: "60px" }}>
                            Green Plank SMART™ tillbehör utvidgar dina
                            horisonter ytterligare, så att du kan bygga ut
                            distinkta och förtjusande detaljer till ditt SMART™
                            -trall som förbättrar både dess skönhet och
                            funktionalitet. Från F- och L-Lister till,
                            ventilerade aluminium lister, pidestaler, reglar,
                            etc., Vi har allt material som behövs för att bygga
                            och avsluta ert SMART™ Kompositdäck.
                          </p>

                          <Grid
                            container
                            spacing={3}
                            style={{ marginTop: "4em" }}
                          >
                            <Grid item xs={12} sm={4}>
                              <iframe
                                width="360"
                                height="315"
                                src="https://www.youtube.com/embed/SO9_1Pm42Rw"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <iframe
                                width="360"
                                height="315"
                                src="https://www.youtube.com/embed/u5aosoMYRt4"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <iframe
                                width="360"
                                height="315"
                                src="https://www.youtube.com/embed/JsJv1k0dTco"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </Grid>
                          </Grid>
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
                            {/* <Grid item xs={6} sm={2}>
                                            <a href="assets/pdfs/smart-classic-deck-swedish.pdf">
                                                <img src="assets/img/projects/pic.png" className="img-fluid" alt="" />
                                            </a>
                                        </Grid> */}
                            <Grid item xs={6} sm={2}>
                              <a
                                target="_blank"
                                href="/pdfs/Green-Plank-Entra-Decking-System-Installation-Guide-2019.pdf"
                              >
                                <img
                                  src={pdfimg3}
                                  className="img-fluid"
                                  alt=""
                                />
                              </a>
                            </Grid>
                            {/* <Grid item xs={6} sm={2}>
                                            <a href="assets/pdfs/smart-classic-deck-swedish (1).pdf">
                                                <img src="assets/img/projects/swedish.png" className="img-fluid" alt="" />
                                            </a>
                                        </Grid>
                                        <Grid item xs={6} sm={2}>
                                            <a href="assets/pdfs/Datablad-Smart-Decking.pdf">
                                                <img src="assets/img/projects/greenplank-tds-composite-technical-data-sheet-1.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </Grid> */}
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

export default entraKomposittrall;
