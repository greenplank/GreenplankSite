import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import causeImage from "../assets/images/resources/1.webp";
const FeaturedCause = () => {
  return (
    <section className="about-two pt-80 pb-80 featured-cause"> 
      <Container>
        <div className="inner-container background-secondary ">
          <Row>
            <Col lg={4}>
              <img src={causeImage} className="img-fluid" alt="" />
            </Col>
            <Col lg={8} className=" d-flex">
              <div className="my-auto" >
                <h6 style={{marginBottom:"1em",color:"white"}}>UTVALDA ARTIKEL </h6>
                <h3>Test av träslag och trä alternativ material i bryggor vid Öresund</h3>
                <p style={{color:"white"}}>
                Denna rapport innehåller resultat av olika trä-, plast- och kompositmaterial exponerade i två bryggor vid Sibbarps badplats vid Öresund strax norr om Øresundsbron. Tanken med att exponera materialen i denna miljö är att relativt snabbt får besked om vilka material som ser ut att klara sig bäst och uppfylla Malmö Stads gatukontors krav på utseende, hållbarhet och funktion i en utsatt miljö.
                </p>
                <h8 style={{marginBottom:"1em",color:"white"}}>Alla rättigheter går till SP / RISE.</h8>
                <Link href="/artiklar">
                <a className="thm-btn p-2 ml-2" style={{background:"black"}}> Läs mer</a>
              </Link>
              </div>
             
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCause;
