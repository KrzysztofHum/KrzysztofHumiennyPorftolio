import React, { useState } from "react"
import { FaDownload } from "react-icons/fa"

export default function TopNav() {
  const [show, setShow] = useState(false)
  return (
    <div className="top-nav">
      <div className="logo-container"></div>
      <div className="menu-list__icon-container">
        <button
          className={show ? "hamburger-active" : ""}
          aria-expanded={show}
          onClick={() => setShow(!show)}
        >
          <span class="sr-only">Open/Close menu</span>
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <ul className={show ? "menu-list show-links" : "menu-list"}>
        <li className="cv-li">
          <a
            aria-label="CV on Google Drive"
            href="#"
            rel="noopener"
            target="_blank"
          >
            <FaDownload className="icon-style" />
            <span> </span>CV
          </a>
        </li>
        <li className="contact-li">
          <a aria-label="Link to Email" rel="noopener" href="#"></a>
        </li>
      </ul>
    </div>
  )
}
