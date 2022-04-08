import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header-Marine40";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";

import Image11 from "../assets/images/products/innerPages/Komposittrall/marine40/BeachGrey_Thumbnail.webp";

import Imagecolor1 from "../assets/images/colors/marine_40/Brazilian-Oak.webp";
import Imagecolor2 from "../assets/images/colors/marine_40/teak.webp";
import Imagecolor3 from "../assets/images/colors/marine_40/Chocolate.webp";
import Imagecolor4 from "../assets/images/colors/marine_40/Charcoal.webp";
import Imagecolor5 from "../assets/images/colors/marine_40/Beach-Grey.webp";

import Imagesurface from "../assets/images/surface/marine_40/Marine40-8.png";

import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";

import Footer from "../components/footer";

const marine40 = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="index,follow" />
        <title>
          MARINE40™ massiv komposittrall, vackert realistisk trallbräda -
          GreenPlank.se
        </title>
        <meta
          name="title"
          content="MARINE40™ massiv komposittrall, vackert realistisk trallbräda - GreenPlank.se"
        />
        <meta
          name="description"
          content="MARINE 40 komposittrall, lågt underhåll, hög halkbeständig europeisk stil, naturfiber komposittrall. Bästa kvalitet komposittrall för hem och kontor."
        />
        <link
          rel="canonical"
          href="https://www.greenplank.se/marine-40-komposittrall"
        />
      </Head>

      <Layout pageTitle="MARINE40™ massiv komposittrall">
        <HeaderTwo />
        <StickyHeader />
        <PageHeader
          title="MARINE40™ massiv komposittrall"
          crumbTitle="MARINE40™ massiv komposittrall"
        />
        <section className="blog-details pt-40 pb-40">
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
                          <div className="project-details">
                            <h2>MARINE40™ massiv komposittrall</h2>
                            <strong>
                              Ger skönheten i det praktiska – PVC-fri!
                            </strong>
                            <div class="et_pb_text_inner">
                              <div class="ce_text block">
                                <strong>
                                  MARINE 40™ komposittrall gör skönheten
                                  praktiskt – PVC-fri! Samtida stil som skapar
                                  ett stort och varaktigt intryck, MARINE 40™
                                  terrassgolv är vackert realistiska och mycket
                                  praktiska med en tidlös kvalitet.
                                </strong>
                                <p>
                                  Green Plank MARINE 40™ Komposittrall av
                                  Naturfiber är konstruerade för att hålla
                                  vackert från installation under alla årstider
                                  i ditt däcks liv. Värdesmedvetna husägare
                                  väljer MARINE™ 40 för sitt traditionella,
                                  naturliga träliknande utseende och låga
                                  underhåll. Med ett så överraskande prisvärt
                                  alternativ finns det helt enkelt ingen
                                  anledning att nöja sig med färgning, tätning,
                                  spågor och konstant underhåll.
                                </p>
                                <p>
                                  Hög glidbeständig, fin, räfflad yta i
                                  europeisk stil ger en härlig filigran-look och
                                  möjliggör bra dragkraft i våta områden som
                                  runt pooler, de är säkra att gå på med bara
                                  fötter. Precis som äkta träskivor kan vårt
                                  MARINE 40™ -kompositbrädor slipas eller sågas
                                  till vilken önskad form som helst utan att
                                  tappa täckbrädans äkta träeffekt.
                                </p>
                                <div>
                                  <ul>
                                    <li>
                                      <strong>Premiumkvalitet</strong> –
                                      Beprövad nordisk kvalitet för hårt väder
                                      och grönare levande.
                                    </li>
                                    <li>
                                      <strong>Enhetlighet</strong> – HidLoc™
                                      dolda fästelement säkerställer en slät och
                                      enhetlig yta som är säker att gå på.
                                    </li>
                                    <li>
                                      <strong>Komplimerande tillbehör</strong>{" "}
                                      Komplettera dina drömuteplatser med våra
                                      kompletterande täckbrädor av komposit –
                                      den perfekta matchen för din
                                      högpresterande MARINE 40 ™- komposittrall.
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
                              <div className="col-md-6 col-mobile-6 section-space--bottom--20">
                                <div className="single-gallery-project">
                                  <div className="single-gallery-project__image">
                                    {/* <img src="assets/img/projects/img12.PNG" className="img-fluid" alt="" /> */}
                                    <img
                                      src={Image11}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-mobile-6 section-space--bottom--20">
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
                                        <td align="left"> Marine -40</td>
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
                                        <td align="left"> 4800 mm</td>
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
                                        <td align="left"> 19 mm</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Färg :</strong>
                                        </td>
                                        <td align="left">
                                          Teak,Charcoal,Beach Grey,chocolate,
                                          Walnut
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Yta :</strong>
                                        </td>
                                        <td align="left">
                                          vändbara brädor,tropiska lövträ;
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Ytdetaljer :</strong>
                                        </td>
                                        <td align="left">
                                          halksäker yta räfflade och ribbade,
                                          slående utseende emulerar exotiska,
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Typ :</strong>
                                        </td>
                                        <td align="left">
                                          Komposit Trall solid
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
                                        <td align="left">0,72/m2</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>Regal span :</strong>
                                        </td>
                                        <td align="left">40 cc</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>mått :</strong>
                                        </td>
                                        <td align="left">4800 x 146 x 19 mm</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>vikt /st :</strong>
                                        </td>
                                        <td align="left">17,28 kg/st</td>
                                      </tr>
                                      <tr>
                                        <td align="left">
                                          <strong>vikt/m2 :</strong>
                                        </td>
                                        <td align="left">24,12/m2</td>
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
                                        href="/pdfs/Marine40™/marine-40-swedish.pdf"
                                        className="thm-btn"
                                      >
                                        installationsguide
                                      </a>
                                    </Grid>
                                    <Grid item xs={8} sm={6} lg={8}>
                                      <a
                                        target="_blank"
                                        href="/pdfs/Marine40™/marine-40-swedish-with-aluminum.pdf"
                                        className="thm-btn"
                                      >
                                        installation av aluminium
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
                          <div className="text-center">
                            <Grid container spacing={3}>
                              <Grid item xs={6} sm={2}>
                                <div className="single-gallery-project__image">
                                  <img
                                    src={Imagecolor5}
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <h5 className="mt-20 text-center">
                                    Beach Grey
                                  </h5>
                                </div>
                              </Grid>
                              <Grid item xs={6} sm={2}>
                                <div className="single-gallery-project__image">
                                  <img
                                    src={Imagecolor4}
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <h5 className="mt-20 text-center">
                                    Charcoal
                                  </h5>
                                </div>
                              </Grid>
                              <Grid item xs={6} sm={2}>
                                <div className="single-gallery-project__image">
                                  <img
                                    src={Imagecolor3}
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <h5 className="mt-20 text-center">
                                    Chocolate
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
                                  <h5 className="mt-20 text-center">Teak</h5>
                                </div>
                              </Grid>
                              <Grid item xs={6} sm={2}>
                                <div className="single-gallery-project">
                                  <div className="single-gallery-project__image">
                                    <img
                                      src={Imagecolor1}
                                      className="img-fluid"
                                      alt=""
                                    />
                                    <h5 className="mt-20 text-center">
                                      Brazilian Oak
                                    </h5>
                                  </div>
                                </div>
                              </Grid>
                              <Grid item xs={6} sm={2}></Grid>
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
                                  <ul>
                                    <li>
                                      <strong>1. </strong>Installerad med
                                      HidLoc™ dolda fästelement för att skapa
                                      enhetlig yta, vilket gör det säkrare och
                                      mer bekvämt för familjer med barn och
                                      husdjur.
                                    </li>
                                    <li>
                                      <strong>2. </strong>Träfärgade färger
                                      skapar ett äkta kornmönster som inbjuder
                                      dig att koppla av och njuta av ditt
                                      personliga tropiska paradis.
                                    </li>
                                    <li>
                                      <strong>3. </strong>Utmärkande inlay
                                      design, stil och färgalternativ
                                    </li>
                                    <li>
                                      <strong>4. </strong>Ingen årlig färgning,
                                      tätning eller målning krävs
                                    </li>
                                    <li>
                                      <strong>5. </strong>Exceptionell
                                      motståndskraft mot UV-ljus och blekning av
                                      färger
                                    </li>
                                    <li>
                                      <strong>6. </strong>Hög glidmotstånd ger
                                      en säker yta, även i våta förhållanden
                                    </li>
                                    <li>
                                      <strong>7. </strong>Kommer inte spricka,
                                      Flisa, Ruttna eller Vrida sig.
                                    </li>
                                    <li>
                                      <strong>8. </strong>Fri från giftiga
                                      tillsatser
                                    </li>
                                    <li>
                                      <strong>9. </strong>Lämplig för privat
                                      sektor
                                    </li>
                                  </ul>
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
                          <p className="mb-40" style={{marginBottom:"2em"}}>
                            Green Plank SMART™ tillbehör utvidgar dina
                            horisonter ytterligare, så att du kan bygga ut
                            distinkta och förtjusande detaljer till ditt SMART™
                            -trall som förbättrar både dess skönhet och
                            funktionalitet. Från F- och L-Lister till,
                            ventilerade aluminium lister, pidestaler, reglar,
                            etc., Vi har allt material som behövs för att bygga
                            och avsluta ert SMART™ Kompositdäck.
                          </p>

                          <Grid container spacing={3}>
                            <Grid
                              item
                              xs={12}
                              sm={5}
                              style={{ marginRight: "3em" }}
                            >
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
                            <Grid
                              item
                              xs={12}
                              sm={5}
                              style={{ marginRight: "3em" }}
                            >
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
                            <Grid item xs={6} sm={4}></Grid>
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
                            <Grid item xs={6} sm={2}>
                              <a
                                target="_blank"
                                href="/pdfs/Marine40™/marine-40-swedish.pdf"
                              >
                                <img
                                  src={pdfimg2}
                                  className="img-fluid"
                                  alt=""
                                />
                              </a>
                            </Grid>
                            <Grid item xs={6} sm={2}>
                              <a
                                target="_blank"
                                href="/pdfs/Green-Plank-Marine-Decking-System-Installation-Guide-2019.pdf"
                              >
                                <img
                                  src={pdfimg3}
                                  className="img-fluid"
                                  alt=""
                                />
                              </a>
                            </Grid>
                            <Grid item xs={6} sm={2}>
                              <a
                                target="_blank"
                                href="/pdfs/Marine40™/marine-40-swedish-with-aluminum.pdf"
                              >
                                <img
                                  src={pdfimg4}
                                  className="img-fluid"
                                  alt=""
                                />
                              </a>
                            </Grid>
                            {/* <Grid item xs={6} sm={2}>
                                            <a target="_blank" href="assets/pdfs/Datablad-Smart-Decking.pdf">
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

export default marine40;
