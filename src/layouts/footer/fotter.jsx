import React from "react"
import './footter.css'
import logo from '../../assets/logo.png'
import { Lineicon } from "../../Components/Lineicon/icons"



export const Footter = () => {
    return (
      <>
      <div className="fott">
      <Lineicon/>
      <div className="fottlogo">
      <img className="imgLogo" src={logo} alt="logo"/>
          <p className="fottitle"> DUNGEON </p>
      </div>
      </div>
      </>
    )
  }