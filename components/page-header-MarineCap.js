import React from "react";
import Link from "next/link";
import pageHeaderBg from "../assets/images/backgrounds/MarineCap.webp";

const PageHeader = ({ title, crumbTitle }) => {
  return (
    <section className="page-header container">
      <div
        className="page-header__bg"
        style={{ backgroundImage: `url(${pageHeaderBg})` }}
      ></div>

      <div className="container">
        <h1 style={{fontSize:"2.5rem",color:"white"}}>{title}</h1>
        <ul className="thm-breadcrumb list-unstyled ">
          <li>
            <Link href="/">
              <a>Hem</a>
            </Link>
          </li>
          <li>-</li>
          <li>
            <span>{crumbTitle}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PageHeader;
