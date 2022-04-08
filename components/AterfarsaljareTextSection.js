import React, { useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Byggochfix from "../assets/images/backgrounds/byggochfix.jpg";
import Ebygghandel from "../assets/images/backgrounds/ebygghandel.webp";


const AterfarsaljareTextSection = () => {
    return (
        <section className=" text-center pt-60 pb-120">


            <Container>
                <div className="text-center block-title" >
                    <h5>Hitta den återförsäljare av Green Plank naturfiber komposit produkter som ligger närmast dig. Lär dig var du kan köpa Green Plank trall, staket, beklädnads material och de förnödenheter du behöver för att slutföra ditt nya projekt.</h5>
                </div>
                <div>
                    <Container>
                        <Row className="text-center">
                            <Col md={2} xs={6}>
                                 <a href="http://ebygghandel.com/">
                                    <div className="mt-20 mb-20">
                                        <div className="mt-20 text-center">
                                          <h4 className="title"><b>Ebygghandel</b></h4> 
                                        </div>
                                    </div>
                                   </a>
                            </Col>
                            <Col md={2} xs={6}>
                                    <div className="mt-20 mb-20">
                                        <div className="mt-20 text-center">
                                           <h4 className="title"><b>optimera</b></h4> 
                                        </div>
                                    </div>
                            </Col>
                            <Col md={2} xs={6}>
                                    <div className="mt-20 mb-20">
                                        <div className="mt-20 text-center">
                                            <h4 className="title"><b>beijer bygg</b></h4>
                                        </div>
                                    </div>
                            </Col>
                            <Col md={2} xs={6}>
                                    <div className="mt-20 mb-20">
                                        <div className="mt-20 text-center">
                                            <h4 className="title"><b>K bygg</b></h4>
                                        </div>
                                    </div>
                            </Col>
                            <Col md={2} xs={6}>
                                    <div className="mt-20 mb-20">
                                        <div className="mt-20 text-center">
                                            <h4 className="title"><b>woody</b></h4>
                                        </div>
                                    </div>
                            </Col>
                            <Col md={2} xs={6}>
                                    <div className="mt-20 mb-20">
                                        <div className="mt-20 text-center">
                                            <h4 className="title"><b>Xxl bygg</b></h4>
                                        </div>
                                    </div>
                            </Col>
                            <Col md={2} xs={6}>
                                    <div className="mt-20 mb-20">
                                        <div className="mt-20 text-center">
                                           <h4 className="title"><b>Karl Heiden  AB</b></h4> 
                                        </div>
                                    </div>
                            </Col>
                        </Row>
                    </Container>
                    {/* <iframe src="https://storage.googleapis.com/greenplankdata1/index.html" width="100%" height="600px" scrolling="no" frameborder="no" allowtransparency="true"></iframe> */}
                </div>
            </Container>
        </section>
    );
};

export default AterfarsaljareTextSection;
