import React from "react";
import Link from "next/link";
import pageHeaderBg from "../assets/images/backgrounds/SmartCap.webp";

const PageHeader = ({ title, crumbTitle }) => {
  return (
    <section className="page-header container">
      <div
        className="page-header__bg"
        style={{ backgroundImage: `url(${pageHeaderBg})` }}
      ></div>

      <div className="container">
        <h2>{title}</h2>
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