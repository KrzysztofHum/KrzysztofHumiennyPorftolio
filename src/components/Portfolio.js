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
              href="#"
            >
              See Live
            </a>
            <a
              aria-label="Fit Przepisy"
              rel="noopener"
              target="_blank"
              className="entry-link__view-live"
              href="#"
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
              href="#"
            >
              See Live
            </a>
            <a
              aria-label="Fit Przepisy"
              rel="noopener"
              target="_blank"
              className="entry-link__view-live"
              href="#"
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
              href="#"
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
    </div>
  )
}
