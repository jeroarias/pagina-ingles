import React from "react"
import './spaceprojects.css'


export const Projects = ({ title, text, imageSrc }) => {
    return(
        <div className="ContentProject">
            <div className="Imgspace">
                <img className="Developimg" src={imageSrc} alt="develop" />
            </div>      
            <div className="TextCub">
                <h2 className="TitleProject">{title}</h2>
                <p className="TextProject">{text}</p>
                <a className="LinkProject" href="../pages/Homes/Home1">Get it now!!</a>
            </div>
        </div>
    )
}
