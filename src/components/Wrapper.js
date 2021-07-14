import React, { useState } from "react"

export default function Wrapper() {
  const [show, setShow] = useState(false)
  return (
    <div className="wrapper">
      <div className="heading-text-container">
        <h2 className="heading-text1">Krzysztof Humienny</h2>
        <h2 className="heading-text2">Front end Developer</h2>
        <div className="heading-line"></div>
        <a className="read-more__link" onClick={() => setShow(!show)}>
          {show ? "Thats All" : "About Me"}
        </a>
        <section className={show ? "about about__open" : "about"}>
          <h3>JavaScript enthusiast.</h3>
          <p className="about__about-text">
            Programming gives me great pleasure, I have been writing code for
            over a year and a half after working full-time as commercial advisor
          </p>
          <p className="about__about-text">
            If you’d like to find out more about me, don't hesitate to get in
            touch, all my details are available on my &nbsp;
            <a
              aria-label="CV on Google Drive"
              rel="noopener"
              target="_blank"
              href="#"
            >
              CV right here.
            </a>
          </p>
          <div className="heading-line"></div>
        </section>
      </div>
      <div className="portfolio"></div>
    </div>
  )
}
