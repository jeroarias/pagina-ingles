import React from "react";
import './Colum2.css'
import { Subimg } from "../../Components/Subimg/Subimg";
import { Projects} from "../../Components/spaceproject/spaceprojects";
import { Footter } from "../../layouts/footer/fotter";
import uno from '../../assets/1.jpg'
import dos from '../../assets/2.jpg'
import tres from '../../assets/3.jpg'
import cuatro from '../../assets/4.jpg'
import sinco from '../../assets/5.jpg'
import seis from '../../assets/6.jpg'
import siete from '../../assets/7.jpg'
import ocho from '../../assets/8.jpg'
import nueve from '../../assets/9.jpg'
import diez from '../../assets/10.jpg'


export const Colum2 = () => {
    return(
        <div className="colum2">
            <div className="text">
                <Subimg content='ABOUT-US'/>
                <p>"Welcome to DUNGEON!

At DUNGEON, we're passionate about video games. We strive to provide our visitors with a unique experience where they can explore the vast world of video games and stay up-to-date with the latest news, reviews, guides, and much more.

From classic retro games to the most recent and exciting titles, our team is constantly curating content to keep you informed and entertained."</p>
   
                <Subimg content='GAMES OF THE WEEK' />
                <div className="ProjectsPace">
                <Projects title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam." imageSrc={uno}/>
                <Projects title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam." imageSrc={dos}/>
                <Projects title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam." imageSrc={tres}/>
                <Projects title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam." imageSrc={cuatro}/>
                <Projects title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam." imageSrc={sinco}/>
                <Projects title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam." imageSrc={seis}/>
                <Projects title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam." imageSrc={siete}/>
                <Projects title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam." imageSrc={ocho}/>
                <Projects title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam." imageSrc={nueve}/>
                <Projects title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam." imageSrc={diez}/>

                </div>

            </div>
            <Footter/>

        </div>
    )
}