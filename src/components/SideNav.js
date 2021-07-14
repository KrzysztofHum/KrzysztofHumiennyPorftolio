import React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function SideNav() {
  return (
    <nav className="side-nav">
      <ul>
        <li>
          <a
            aria-label="Linkedin"
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/kris-harington-39b88b205/"
          >
            <FaLinkedin className="icon-style" />
          </a>
        </li>
        <li>
          <a
            aria-label="GitHub"
            rel="noopener"
            target="_blank"
            href="https://github.com/KrzysztofHum"
          >
            <FaGithub className="icon-style" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
