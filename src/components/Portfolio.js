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
              alt="FitPrzepisy"
              src="../assets/images/FitPrzepisy1.png"
              layout="fullWidth"
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
            <SiStyledComponents className="icon-style" />
          </div>
        </div>
      </div>
      <div className="portfolio__entry">
        <div className="entry__img-container">
          <div className="shown-img">
            <StaticImage
              src="../assets/images/VideoApp.png"
              layout="fullWidth"
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
            Aplikacja zapisująca dodane filmy dzięki czemu możemy zrobić własną
            playliste, napisana w React korzystająca z youtube oraz vimeo API.
            <br />
            <br />
            W projecie wykorzystałem: <br />
            - React, reactstrap, bootstrap.
            <br />
            - React Redux do zarządzania stanem w React.
            <br />- API z youtube oraz vimeo do wczytywania danych.
            <br />- Możliwość wczytania bazy filmów.
            <br /> - Możliwość dodania filmu do ulubionych. <br />- Sortowanie,
            filtrowanie, usuwanie filmów.
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
              alt="GsmWorld"
            />
          </div>
        </div>
        <div className="entry__right-container">
          <div className="entry__link-container">
            <a
              aria-label="GSM World"
              rel="noreferrer"
              target="_blank"
              className="entry-link__see-live"
              href="https://gsm-world.herokuapp.com/"
            >
              Zobacz Live
            </a>
            <a
              aria-label="GSM World"
              rel="noreferrer"
              target="_blank"
              className="entry-link__view-live"
              href="https://github.com/KrzysztofHum/GSM-World"
            >
              Zobacz Kod
            </a>
          </div>
          <div className="entry__title-container">
            <h2>GSM-World</h2>
          </div>
          <p className="entry__about-text">
            W pełni responsywny sklep internetowy napisany w React.js. Backend
            jest napisany w node.js za pomoca express.js, korzysta z mongoDB.
            <br />
            <br />
            W projecie wykorzystałem: <br />
            - Hooki, takie jak useEffect, useState.
            <br />
            - React Redux do zarządzania stanem w React.
            <br />- System logowania, tworzenia kont oparty na tokenach.
            <br /> - Możliwość korzystania z panelu admina wykonując takie
            czynności jak usuwanie, dodawanie, edytowanie przedmiotów oraz
            użytkowników. <br />- Wyszukiwanie, sortowanie, filtrowanie
            przedmiotów.
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
              layout="fullWidth"
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
            <SiStyledComponents className="icon-style" />
          </div>
        </div>
      </div>
    </div>
  )
}
