import React, { useState } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import bgImage from "../assets/images/backgrounds/5-1-1024x273.webp";
import heart from "../assets/images/shapes/192-by-192.png";

const HemLastSection = () => {
    return (
        <section className=" text-center pt-10 pb-20">


            <Container>
                <div className="text-center block-title" >
                    <h3 className="block title" style={{ marginBottom: "1em" }}>
                        <img src={heart} width="15" alt="" />
                        Green Plank<sup>&reg;</sup> komposittrall jämfört med trädäck
                    </h3>
                    <h4>
                    När man jämför komposittrall med trätrall är hållbarhet en av de största skillnaderna. Sedan 1980 har trä-plastkomposit, även känt som WPC, trä alternativ eller naturfibrer komposit (NFC) snabbt blivit det snabbast växande materialet till altan för bostäder och kommersiellt bruk.
                        Många husägare väljer trädäck eftersom det är bekant, lättillgängligt och prisvärt. Samtidigt orsakar trätrall problem som splinter, röta och kräver högt underhåll.
                    </h4>
                    <h5>Även om komposittrall är lätt att underhålla, oroar vissa husägare att komposittrall inte ser lika bra ut som trätrall. Green Plank<sup>&reg;</sup> har dock utvecklat komposittrall som efterliknar det rika, naturliga utseendet på trä utan besväret med att underhålla ett trädäck.
                        Green Plank<sup>&reg;</sup> komposittrall är ett miljövänligt träalternativ som kombinerar återvunnen plast och trä / risskal fibrer. Green Plank<sup>&reg;</sup> komposittrall är lätt tillgänglig i de flesta stora byggvaruhus i hela Europa.</h5>
                </div>
            </Container>
        </section>
    );
};

export default HemLastSection;
