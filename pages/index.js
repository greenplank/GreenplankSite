import React, { useEffect } from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import VideoCards from "../components/header/videoCard";
import StickyHeader from "../components/header/sticky-header";
import MainSliderTwo from "../components/slider/main-slider-2";
import VideoCard from "../components/videos/video-card";
import HemRelatedProducts from "../components/HemRelatedProducts";
import HemGallery from "../components/HemGallery";
import FeaturedCause from "../components/featured-cause";
import ServiceTwo from "../components/services/service-two";
import HemLastSection from "../components/HemLastSection";
import BrandCarousel from "../components/brand-carousel";
import Head from "next/head";

import Footer from "../components/footer";

const HomeTwo = () => {
  console.log(process.env.authAPIkey);
  return (
    <>
      <Head>
    <meta name=“google-site-verification” content=“tnWNe69KBE1qlIN2fpG0eEwe-dMpPi5VGPnbL_I6fQ4" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta name="title" content="Miljövanliga komposittrall, fasad, staket och plank med minimalt underhåll och maximal hållbarhet" />
        <meta name="description" content="Green Plank är Europas ledande leverantör av komposittrall, fasadbeklädnad, staket och plank sedan 2004. Skandinavisk kvalitets komposittrall, kompositfasad, staket och plank med minimala underhållskrav för privata och offentliga miljöer." />
      </Head>
      <Layout pageTitle="Skandinavisk kvalitets miljövanliga komposittrall, fasad, staket och plank med minimalt underhåll och maximal hållbarhet">
        <HeaderTwo />
        <StickyHeader extraClassName="stricky-header-two" />
        <MainSliderTwo />
        <VideoCards />
        <HemGallery />
        <HemRelatedProducts />
        <ServiceTwo />
        <VideoCard />
        <FeaturedCause />
        <HemLastSection />
        <BrandCarousel extraClass="client-carousel__has-border-top" />
        <Footer />
      </Layout>




      <div class="alert text-center cookiealert" role="alert">
        Vi använder cookies på vår webbplats för att ge dig den mest relevanta upplevelsen genom att komma ihåg dina preferenser och upprepade besök. Genom att klicka på "Acceptera" godkänner du att ALLA cookies används
        <a href="https://www.greenplank.se/integritetspolicy" target="_blank"> Läs mer</a>

        <button type="button" class="btn btn-primary btn-sm acceptcookies">
          jag håller med
        </button>
      </div>

      <script>
        for (var i = 1; i= 150; i++)
        document.querySelector("#fillme").innerHTML += "Underhållsfria altangolv, fasadpanel, staket och plank med slitstark yta och träkänsla. Flera färger och mönster anpassad efter skandinavisk design och miljö. Brett sortiment. Skandinavisk kvalitet och design.";
      </script>

      <script src="https://cdn.jsdelivr.net/gh/Wruczek/Bootstrap-Cookie-Alert@gh-pages/cookiealert.js"></script>

    </>
  );
};

export default HomeTwo;


