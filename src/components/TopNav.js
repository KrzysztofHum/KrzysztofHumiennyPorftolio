import React, { useState } from "react"
import { FaDownload } from "react-icons/fa"

export default function TopNav() {
  const [show, setShow] = useState(false)
  return (
    <div className="top-nav">
      <div className="logo-container">KH</div>
      <div className="menu-list__icon-container">
        <button
          className={show ? "hamburger-active" : ""}
          aria-expanded={show}
          onClick={() => setShow(!show)}
        >
          <span className="sr-only">Open/Close menu</span>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <ul className={show ? "menu-list show-links" : "menu-list"}>
        <li className="cv-li">
          <a
            aria-label="CV on Google Drive"
            href="https://drive.google.com/file/d/1_ou2-A9fHTPgDHdtHYnSWFEonAwtl-wu/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            <FaDownload className="small-icon-style" />
            <span> </span>CV
          </a>
        </li>
        <li className="contact-li">
          <a
            aria-label="Link to Email"
            rel="noreferrer"
            href="mailto:k.humienny1996@wp.pl"
            data-hover="k.humienny1996@wp.pl"
          >
            Kontakt
          </a>
        </li>
      </ul>
    </div>
  )
}
