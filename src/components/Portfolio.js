import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  SiJavascript,
  SiReact,
  SiStyledcomponents,
  SiGatsby,
} from "react-icons/si"

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__entry">
        <div className="entry__img-container">
          <div className="shown-img">
            <StaticImage
              width="1200"
              height="900"
              alt="FitPrzepisy"
              src="../assets/images/FitPrzepisy1.png"
              layout="constrained"
            />
          </div>
        </div>
        <div className="entry__right-container">
          <div className="entry__link-container">
            <a
              aria-label="Fit Przepisy"
              rel="noreferrer"
              target="_blank"
              className="entry-link__see-live"
              href="https://fit-przepisy.netlify.app"
            >
              Zobacz Live
            </a>
            <a
              aria-label="Fit Przepisy"
              rel="noreferrer"
              target="_blank"
              className="entry-link__view-live"
              href="https://github.com/KrzysztofHum/fit-przepisy_v1"
            >
              Zobacz Kod
            </a>
          </div>
          <div className="entry__title-container">
            <h2>Fit Przepisy</h2>
          </div>
          <p className="entry__about-text">
            W pełni responsywny blog kulinarny napisany w GatsbyJs, połączony z
            headless CMS jakim jest Contentful. Blog powstał w celu
            rozpowszechnienia pasji do gotowania za pomocą dzielenia sie
            przepisami na zdrowe potrawy. Projekt wraz z moją nauką, będzie
            ciągle rozwijany.
            <br />
            <br />
            W projecie wykorzystałem:
            <br />
            - Gatsby umożliwił stworzenie szybkiej, bezpiecznej i wydajnej
            strony przy użyciu platformy React.
            <br />
            - Contentful jako headless CMS jest używany do zarządzanie treścą
            <br />- StyledComponents ułatwily mi stylowanie projektu, dzięki
            czemu jest czytelniejszy oraz łatwiejszy do edycji
          </p>
          <div className="entry__tools-container">
            <SiJavascript className="icon-style" />
            <SiReact className="icon-style" />
            <SiGatsby className="icon-style" />
            <SiStyledcomponents className="icon-style" />
          </div>
        </div>
      </div>
      <div className="portfolio__entry">
        <div className="entry__img-container">
          <div className="shown-img">
            <StaticImage
              width="1200"
              height="900"
              src="../assets/images/mediakingImg.png"
              layout="constrained"
              alt="mediaKing"
            />
          </div>
        </div>
        <div className="entry__right-container">
          <div className="entry__link-container">
            <a
              aria-label="Media King"
              rel="noreferrer"
              target="_blank"
              className="entry-link__see-live"
              href="https://media-king-web.onrender.com/"
            >
              Zobacz Live
            </a>
            <a
              aria-label="Media King"
              rel="noreferrer"
              target="_blank"
              className="entry-link__view-live"
              href="https://github.com/KrzysztofHum/mediaking"
            >
              Zobacz Kod
            </a>
          </div>
          <div className="entry__title-container">
            <h2>Media-King</h2>
          </div>
          <p className="entry__about-text">
            Ciągle rozwijany sklep internetowy z panelem Admina. Frontend jest
            napisany za pomocą React.js, natomiast backend -node, express.js
            oraz bazy danych mongoDB.
            <br />
            <br />
            W projecie wykorzystałem: <br />
            - React Hook's, bootstrap, formik, yup.
            <br />
            - React Redux do zarządzania stanem w React.
            <br />- System logowania, tworzenia kont z zastosowaniem tokenów.
            <br />
            <br />
            Funkcjonalność: <br />- Możliwość korzystania z panelu admina w celu
            dodania nowego przedmiotu do sklepu. <br />- Częściowo dalsze plany
            projektowe są zapisane na github - issues
          </p>
          <div className="entry__tools-container">
            <SiJavascript className="icon-style" />
            <SiReact className="icon-style" />
            <SiGatsby className="icon-style" />
            <SiStyledcomponents className="icon-style" />
          </div>
        </div>
      </div>
      <div className="portfolio__entry">
        <div className="entry__img-container">
          <div className="shown-img">
            <StaticImage
              width="1200"
              height="900"
              src="../assets/images/VideoApp.png"
              layout="constrained"
              alt="VideoApp"
            />
          </div>
        </div>
        <div className="entry__right-container">
          <div className="entry__link-container">
            <a
              aria-label="Video App"
              rel="noreferrer"
              target="_blank"
              className="entry-link__see-live"
              href="https://video-generator.netlify.app"
            >
              Zobacz Live
            </a>
            <a
              aria-label="GSM World"
              rel="noreferrer"
              target="_blank"
              className="entry-link__view-live"
              href="https://github.com/KrzysztofHum/Videoapp"
            >
              Zobacz Kod
            </a>
          </div>
          <div className="entry__title-container">
            <h2>Video-App</h2>
          </div>
          <p className="entry__about-text">
            Aplikacja zapisująca dodane filmy za pośrednictwem linka z
            youtube/vimeo, napisana w React korzystająca z youtube oraz vimeo
            API.
            <br />
            <br />
            W projecie wykorzystałem: <br />
            - React, reactstrap, bootstrap.
            <br />
            - React Redux do zarządzania stanem w React.
            <br />- API z youtube oraz vimeo do wczytywania danych.
            <br />
            <br />
            Funkcjonalność: <br />
            - Możliwość wczytania bazy filmów.
            <br /> - Możliwość dodania filmu do ulubionych. <br />- Sortowanie,
            filtrowanie, usuwanie filmów.
            <br /> - Włączenie filmu w modalu
          </p>
          <div className="entry__tools-container">
            <SiJavascript className="icon-style" />
            <SiReact className="icon-style" />
            <SiGatsby className="icon-style" />
            <SiStyledcomponents className="icon-style" />
          </div>
        </div>
      </div>
      <div className="portfolio__entry">
        <div className="entry__img-container">
          <div className="shown-img">
            <StaticImage
              width="1200"
              height="900"
              layout="constrained"
              alt="Portfolio"
              src="../assets/images/Portfolio1.png"
            />
          </div>
        </div>
        <div className="entry__right-container">
          <div className="entry__link-container">
            <a
              aria-label="Fit Przepisy"
              rel="noreferrer"
              target="_blank"
              className="entry-link__see-live"
              href="https://krzysztofhumienny.netlify.app"
            >
              Zobacz Live
            </a>
            <a
              aria-label="Fit Przepisy"
              rel="noreferrer"
              target="_blank"
              className="entry-link__view-live"
              href="https://github.com/KrzysztofHum/KrzysztofHumiennyPorftolio"
            >
              Zobacz Kod
            </a>
          </div>
          <div className="entry__title-container">
            <h2>Portfolio</h2>
          </div>
          <p className="entry__about-text">
            Portfolio zostało napisane w React za pomocą frameworka Gatsby Js.
            Zadaniem strony jest zaprezentowanie moich umiejętności w celach
            rekrutacyjnych poprzez ujawnienie zrealizowany przezemnie projektów.
            <br />
            <br />
            W projecie wykorzystałem:
            <br />
            - Gatsby umożliwił stworzenie szybkiej, bezpiecznej i wydajnej
            strony przy użyciu platformy React.
            <br />- SASS ułatwily mi stylowanie projektu, dzięki czemu jest
            czytelniejszy oraz łatwiejszy do edycji.
          </p>
          <div className="entry__tools-container">
            <SiJavascript className="icon-style" />
            <SiReact className="icon-style" />
            <SiGatsby className="icon-style" />
            <SiStyledcomponents className="icon-style" />
          </div>
        </div>
      </div>
    </div>
  )
}
