import React from "react";
import tiktok from "../public/icons/tiktok_icon.png";
import facebook from "../public/icons/facebook_icon.png";
import insta from "../public/icons/insta_icon.png";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className="socials">
        <a href="#">
          <Image src={tiktok} alt="Foofest Tiktok Page" className="icon" />
        </a>
        <a href="#">
          <Image src={insta} alt="Foofest Instagram Page" className="icon" />
        </a>
        <a href="#">
          <Image src={facebook} alt="Foofest Facebook Page" className="icon" />
        </a>
      </div>
      <h5>FAQs</h5>
      <h5>Volunteer</h5>
      <h5>Merch</h5>
      <h5>Contact</h5>
    </footer>
  );
}

export default Footer;
