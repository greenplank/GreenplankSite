import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header-MarineJumbo";
import { Container, Row, Col } from "react-bootstrap";
import Grid from '@material-ui/core/Grid';

import Image11 from "../assets/images/products/innerPages/Komposittrall/marinejumbo/BeachGrey_thumbnail.webp";

import Imagecolor1 from "../assets/images/colors/marine_jumbo/Teak.png";
import Imagecolor2 from "../assets/images/colors/marine_jumbo/Beach-Grey.png";
import Imagecolor3 from "../assets/images/colors/marine_jumbo/Red-Cherry.png";


import Imagesurface from "../assets/images/surface/marine_jumbo/MarineJumbo-8.png";

import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";
import pdfimg5 from "../assets/images/projects/greenplank-tds-composite-technical-data-sheet-1.jpg";
import Footer from "../components/footer";
import Head from "next/head";

const marinejumbokomposittrall = () => {
  return (
    <Layout pageTitle="marine-jumbo-komposittrall">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="marine-jumbo-komposittrall" crumbTitle="marine-jumbo-komposittrall" />
      <section className="blog-details pt-120 pb-40">
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
                          <h2>Marine Jumbo™</h2>
                          <strong>Heavy Duty kommersiell kompositplattform
                            tidlös elegans för högre krav – PVC-fri!</strong>
                          <div class="et_pb_text_inner">
                            <div class="ce_text block">

                              <strong>Green Plank MARINE JUMBO ™ är inspirerad av naturens styrka, bakom bevis, och är det bredaste reversibla Heavy Duty-kompositplattan på marknaden, som används av nordiska kommuner.</strong>
                              <p>
                                Den kraftiga MARINE JUMBO ™ naturfiberkompositplattan är speciellt utvecklad för kommersiella kompositplattformar. Den är perfekt för tunga offentliga platser som nöjesparker, stadioner, strandpromenad, marinor och hotell. Den robusta, barfota vänliga ytan och ett traditionellt och elegant utseende levererar årtionden av hållbara prestanda med lågt underhåll. Med vändbara räfflade / räfflade borstad ytor, förbättrad halmotstånd och långvarig prestanda är vår MARINE JUMBO ™ kompositplatta det professionella valet för kommersiella projekt.
                                Hög halksäker, borstad yta med räfflad / räfflad borstning för att ge bra grepp i våta områden som runt pooler, strandpromenader, de är säkra att gå på med bara fötter.</p>
                              <p>Precis som äkta träskivor kan vår MARINE JUMBO ™ kompositplatta slipas eller sågas till vilken önskad form som helst utan att tappningens äkta träeffekt ser ut.</p>
                              <div>
                                <ul>
                                  <li><strong>Premiumkvalitet</strong> – beprövad nordisk kvalitetsplattform för hårt väder och grönare boende.</li>
                                  <li><strong>Uniformitet </strong> – HidLoc ™ gömda däckfästen säkerställer en jämn och jämn yta som är säker att gå på.</li>
                                  <li><strong>Kompletterande tillbehör  </strong>– Slutför ditt terrassprojekt med våra fasadlister och lock – den perfekta matchningen för ditt högpresterande MARINE JUMBO ™ -däck.</li>

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
                                  {/* <img src="assets/img/projects/img12.PNG" className="img-fluid" alt="" /> */}
                                  <img src={Image11} className="img-fluid" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="project-information">
                                <h3>Produktinformation</h3>
                                <table width="100%">
                                  <tbody>
                                    <tr>
                                      <td align="left"><strong>Yta:</strong></td>
                                      <td align="left">Halkbeständig ribbad med en plan yta på baksidan, tropiska lövträd; vändbara brädor</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Storlek:</strong></td>
                                      <td align="left">ca. 31 * 225 mm</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Längd:</strong></td>
                                      <td align="left">ca. 2.8 m, 3.6 m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Åtgång:</strong></td>
                                      <td align="left">ca. 4.40 meters for 1 m²</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Vikt:</strong></td>
                                      <td align="left">ca. 9.00 kg / m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Regelavstånd:</strong></td>
                                      <td align="left">60 cm c / c för kommersiella applikationer *</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              {/* </div> */}
                              <div className="row mt-40 mb-30">

                                <div className="row" style={{ marginTop: ".5em", marginRight: "8px", marginLeft: "4px" }}>
                                  <img src={Imagesurface} />
                                </div>


                              </div>
                              <div className="row mt-60">

                                <Grid container spacing={3}>
                                  <Grid item xs={6} sm={4} lg={4}>
                                    <a target="_blank" href="/bestall-prov" className="thm-btn" >beställ prov</a>
                                  </Grid>
                                  {/* <Grid item xs={6} sm={4}>
                                                            <a target="_blank" href={`${process.env.PUBLIC_URL}/assets/pdfs/smart-classic-deck-swedish.pdf`} className="thm-btn"  >installationsguide</a>
                                                        </Grid> */}
                                  <Grid item xs={8} sm={6} lg={6}>
                                    <a target="_blank" href="/pdfs/MarineJumbo/marine-jumbo-swedish-with-aluminum.pdf" className="thm-btn" >installation av aluminium</a>
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
                        <h3>VISA FÄRGTRENDS - ingrodd med naturlig och distinkt karaktär</h3>
                        <hr />
                        <Grid container spacing={3}>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor3} className="img-fluid" alt="" />
                              <h4 className="section-space--top--20 text-center">Röd körsbär</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor1} className="img-fluid" alt="" />
                              <h4 className="section-space--top--20 text-center">Teak</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor2} className="img-fluid" alt="" />
                              <h4 className="section-space--top--20 text-center">Strandgrå</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                          </Grid>
                        </Grid>
                      </div>

                      {/*====================  End of Smart Classic Section-3 content  ====================*/}

                      {/*====================  Star Smart Classic Section-4 content ====================*/}
                      <div className="col-lg-12 mb-80">
                        <div className="project-gallery-wrapper">
                          <div className="row">
                            <div className="col-md-6 col-mobile-6 mb-40 section-space--top--20 pl-30 pl-sm-15 pl-xs-15">
                              <div className="project-details">
                                <h2 className="mb-40 section-space--top--20"><strong>Produktinformation</strong></h2>
                                <h3>Färgval</h3>
                                <p>
                                  Studio fotografering och / eller din surfings enhet kanske inte ger en exakt bild av färgerna. För att se färgerna personligen, vänligen begär gratis prover.
                                </p>
                                <h3>Naturlig skönhet</h3>
                                <p>
                                  Våra produkter är designade för att se ut som naturligt trä och kan ha svag färg / textur och skuggnings variationer från bräde till bräda. Färg variationen påverkar inte på något sätt produktens prestanda.</p>
                                <h3>Behåll skönheten</h3>
                                <p>
                                  Alla yttre ytor samlar smuts, damm och föroreningar och kräver rengöring. Det är nödvändigt att rengöra ditt komposit trall med jämna mellanrum för att hålla den så vacker som den dag du installerade det.</p>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-40 section-space--top--20 pl-30 pl-sm-15 pl-xs-15">
                              <div className="project-details">
                                <h2 className="mb-40 section-space--top--20"><strong>Pålitlig hållbarhet, överlägsen kvalitet</strong></h2>
                                <ul>
                                  <li><strong>1. </strong>Installerad med HidLoc™ dolda fästelement för att skapa enhetlig yta, vilket gör det säkrare och mer bekvämt för familjer med barn och husdjur.</li>
                                  <li><strong>2. </strong>Träfärgade färger skapar ett äkta kornmönster som inbjuder dig att koppla av och njuta av ditt personliga tropiska paradis.</li>
                                  <li><strong>3. </strong>Utmärkande inlay design, stil och färgalternativ</li>
                                  <li><strong>4. </strong>Ingen årlig färgning, tätning eller målning krävs</li>
                                  <li><strong>5. </strong>Exceptionell motståndskraft mot UV-ljus och blekning av färger</li>
                                  <li><strong>6. </strong>Hög glidmotstånd ger en säker yta, även i våta förhållanden</li>
                                  <li><strong>7. </strong>Kommer inte spricka, Flisa, Ruttna eller Vrida sig.</li>
                                  <li><strong>8. </strong>Fri från giftiga tillsatser</li>
                                  <li><strong>9. </strong>Lämplig för privat sektor</li>
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
                        <p className="mb-40">Green Plank SMART ™ -täcknings tillbehör utvidgar dina horisonter ytterligare, så att du kan bygga ut distinkta och förtjusande funktioner i ditt SMART ™ -trall som förbättrar både dess skönhet och funktionalitet. Från F-trim och L-trim till stige rörelser, ventilerade aluminium lister, trall pedaler, balk, etc., här är alla trall delar du behöver för att slutföra ditt SMART ™ trall projekt.</p>

                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={4}>
                            <iframe width="360" height="315" src="https://www.youtube.com/embed/SO9_1Pm42Rw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <iframe width="360" height="315" src="https://www.youtube.com/embed/u5aosoMYRt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <iframe width="360" height="315" src="https://www.youtube.com/embed/JsJv1k0dTco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Grid>
                        </Grid>
                      </div>
                      {/*====================  End of Star Smart Classic Section-5 content  ===============*/}

                      {/*====================  Star Smart Classic Section-6 content  ====================*/}
                      <div className="col-12 mb-30 mt-80" >
                        <h3>
                          Ladda ner Pdfs</h3>
                        <hr />

                        <Grid container spacing={3}>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/Broschyr-SV.pdf">
                              <img src={pdfimg1} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/Green-Plank-Marine-Decking-System-Installation-Guide-2019.pdf">
                              <img src={pdfimg3} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/MarineJumbo/marine-jumbo-swedish-with-aluminum.pdf">
                              <img src={pdfimg4} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/MarineJumbo/datablad-greenplank-komposittrall-marine-jumbo.pdf">
                              <img src={pdfimg5} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>

                          </Grid>

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
  );
};

export default marinejumbokomposittrall;
