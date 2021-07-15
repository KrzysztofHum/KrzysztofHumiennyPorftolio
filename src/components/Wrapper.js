import React, { useState } from "react"
import Portfolio from "./Portfolio"

export default function Wrapper() {
  const [show, setShow] = useState(false)
  return (
    <div className="wrapper">
      <div className="heading-text-container">
        <h2 className="heading-text1">Krzysztof Humienny</h2>
        <h2 className="heading-text2">Front end Developer</h2>
        <div className="heading-line"></div>
        <a className="read-more__link" onClick={() => setShow(!show)}>
          {show ? "Więcej w CV" : "O mnie"}
        </a>
        <section className={show ? "about about__open" : "about"}>
          <h3>Programowanie to moje hobby</h3>
          <p className="about__about-text">
            Od ponad półtora roku uczę się programować w JavaScript, uwielbiam
            poznawać nowe technologię oraz rozwiązywać problemy na które się
            napotykam. Widzę czerpałem z dostępnych w internecie darmowych
            źródeł, aktualnie najczęściej korzystam z dokumentacji oraz
            stackoverflow.
          </p>
          <p className="about__about-text">
            Miałem okazje wykonywać projekty korzystając z takich technologii
            jak:
          </p>
          <div className="about-stack">
            <span>JavaScript</span>
            <span>React.Js</span>
            <span>Gatsby.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>Mongodb</span>
            <span>StyledComponent</span>
            <span>Git</span>
          </div>
          <p className="about__about-text">
            Jeśli chcesz dowiedzieć się o mnie więcej, nie wahaj się
            skontaktować, wszystkie moje dane są dostępne w moim &nbsp;
            <a
              aria-label="CV on Google Drive"
              rel="noopener"
              target="_blank"
              href="#"
            >
              CV.
            </a>
          </p>
          <div className="heading-line"></div>
        </section>
      </div>
      <Portfolio />
    </div>
  )
}
