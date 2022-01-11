import React, { useState } from "react";
import Link from "next/link";
// import ModalVideo from "react-modal-video";
import { Container } from "react-bootstrap";
import bgImage from "../../assets/images/backgrounds/5-1-1024x273.webp";
import heart from "../../assets/images/shapes/192-by-192.png";

const VideoCard = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="video-card">
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="m20hG3KpQtI"
        onClose={() => setOpen(false)}
      /> */}
      <div
        className="video-card__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <Container className=" text-center pt-60 pb-60">
        <h3>
          <img src={heart} width="15" alt="" />
          Varför Green Plank?
        </h3>
        <h4 style={{color:"white"}}>
        Varumärket Green Plank<sup>&reg;</sup> är ett varumärke för hållbara byggprodukter som representerar kvalitet, hållbarhet och innovation i mer än 15 år. Green Plank<sup>&reg;</sup> står för innovation, tillförlitlighet, kvalitet, förtroende och kompetens – det här är grunden för vår verksamhet. Vi drivs av en passion för hållbara byggprodukter och detta återspeglas i var och en av våra kompositprodukter.
        </h4>
        <h5 style={{color:"white",marginTop:"1em"}}>Som ett paraplymärke omfattar Green Plank en bred varumärkesportfölj i de fyra kategorierna komposit terrasser, komposit fasadbeklädnad, kompositplankor och staket, inklusive produktmärke som AVON Flooring<sup>&reg;</sup>. Green Plank<sup>&reg;</sup> är det perfekta valet för krävande applikationer som hotellplattformar, liksom andra allmänna utrymmen som parker, förfriskningsbarer, brygger, verandor och klubbhusplattformar. Green Plank<sup>&reg;</sup> komposittrall är hållbara, barfota vänliga och lätta att hålla i utmärkt skick år efter år.</h5>
        <div className="video-card__btn-block">
          <Link href="/bestall-prov">
            <a className="thm-btn dynamic-radius">Beställ prov</a>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default VideoCard;
