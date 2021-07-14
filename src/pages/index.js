import React from "react"
import TopNav from "../components/TopNav"
import SideNav from "../components/SideNav"
import Wrapper from "../components/Wrapper"
import "normalize.css"
import "../assets/css/styles.sass"

export default function Home() {
  return (
    <div className="page">
      <TopNav />
      <SideNav />
      <Wrapper />
    </div>
  )
}
