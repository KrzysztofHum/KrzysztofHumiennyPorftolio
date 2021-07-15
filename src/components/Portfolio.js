import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  SiJavascript,
  SiReact,
  SiStyledComponents,
  SiGatsby,
} from "react-icons/si"

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__entry">
        <div className="entry__img-container">
          <div className="shown-img">
            <StaticImage
              src="../assets/images/FitPrzepisy1.png"
              layout="fullWidth"
            />
          </div>
        </div>
        <div className="entry__right-container">
          <div className="entry__link-container">
            <a
              aria-label="Fit Przepisy"
              rel="noopener"
              target="_blank"
              className="entry-link__see-live"
              href="https://fit-przepisy.netlify.app"
            >
              See Live
            </a>
            <a
              aria-label="Fit Przepisy"
              rel="noopener"
              target="_blank"
              className="entry-link__view-live"
              href="https://github.com/KrzysztofHum/fit-przepisy"
            >
              View Code
            </a>
          </div>
          <div className="entry__title-container">
            <h2>Fit Przepisy</h2>
          </div>
          <p className="entry__about-text">
            W pełni responsywny blog kulinarny napisany w GatsbyJs, połączony z
            headless CMS jakim jest Contentful. Blog stał się projektem
            komeprcyjnym, na którym dzielę się swoja pasją do zdrowego żywienia.
            Projekt wraz z moją nauką, będzie ciągle rozwijany.
            <br />
            <br />
            W projecie użyłem:
            <br />
            - Gatsby umożliwił stworzenie szybkiej, bezpiecznej i wydajnej
            strony przy użyciu platformy React.
            <br />
            - Contentful jako headless CMS jest używany do zarządzanie treścą
            <br />- StyledComponents ułatwily mi stylowanie projektu, dzięki
            czemu jest czytelniejszy.
          </p>
          <div className="entry__tools-container">
            <SiJavascript className="icon-style" />
            <SiReact className="icon-style" />
            <SiGatsby className="icon-style" />
            <SiStyledComponents className="icon-style" />
          </div>
        </div>
      </div>
      <div className="portfolio__entry">
        <div className="entry__img-container">
          <div className="shown-img">
            <StaticImage
              src="../assets/images/GsmWorld.png"
              layout="fullWidth"
            />
          </div>
        </div>
        <div className="entry__right-container">
          <div className="entry__link-container">
            <a
              aria-label="Fit Przepisy"
              rel="noopener"
              target="_blank"
              className="entry-link__see-live"
              href="https://gsm-world.herokuapp.com/"
            >
              See Live
            </a>
            <a
              aria-label="Fit Przepisy"
              rel="noopener"
              target="_blank"
              className="entry-link__view-live"
              href="https://github.com/KrzysztofHum/GSM-World"
            >
              View Code
            </a>
          </div>
          <div className="entry__title-container">
            <h2>Fit Przepisy</h2>
          </div>
          <p className="entry__about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            eligendi, iusto cupiditate ea minus nihil fugiat nisi! Quibusdam,
            adipisci sit?
          </p>
          <div className="entry__tools-container">
            <SiJavascript className="icon-style" />
            <SiReact className="icon-style" />
            <SiGatsby className="icon-style" />
            <SiStyledComponents className="icon-style" />
          </div>
        </div>
      </div>
      <div className="portfolio__entry">
        <div className="entry__img-container">
          <div className="shown-img">
            <StaticImage src="../assets/images/ryzwarzywa.jpg" />
          </div>
        </div>
        <div className="entry__right-container">
          <div className="entry__link-container">
            <a
              aria-label="Fit Przepisy"
              rel="noopener"
              target="_blank"
              className="entry-link__see-live"
              href="#"
            >
              See Live
            </a>
            <a
              aria-label="Fit Przepisy"
              rel="noopener"
              target="_blank"
              className="entry-link__view-live"
              href="https://github.com/KrzysztofHum/KrzysztofHumiennyPorftolio"
            >
              View Code
            </a>
          </div>
          <div className="entry__title-container">
            <h2>Portfolio</h2>
          </div>
          <p className="entry__about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            eligendi, iusto cupiditate ea minus nihil fugiat nisi! Quibusdam,
            adipisci sit?
          </p>
          <div className="entry__tools-container">
            <SiJavascript className="icon-style" />
            <SiReact className="icon-style" />
            <SiGatsby className="icon-style" />
            <SiStyledComponents className="icon-style" />
          </div>
        </div>
      </div>
    </div>
  )
}
