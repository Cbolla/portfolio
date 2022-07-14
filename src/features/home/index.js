import "./index.css"
import React from 'react'
import GitHub from "../../assets/img/gitHub.svg"
import LinkedIn from "../../assets/img/linkedIn.svg"
import William from "../../assets/img/william.svg"
import Cartoon from "../../assets/img/cartoon.svg"
import JsIcon from "../../assets/img/js-icon.svg"
import CssIcon from "../../assets/img/css-icon.svg"
import ReactIcon from "../../assets/img/react-icon.svg"
import Carousel from "nuka-carousel"
import { CardsSkill } from "../../components/cardsSkill/CardsSkill"



export const HomePage = () => {
      return (
    <div className="container">
        <header>
            <p className="title">Portfólio</p>
            <div className="sections-header">
                <a href="#section01">Apresentação</a>
                <a href="#section02">Sobre mim</a>
                <a href="#section03">Habilidades</a>
            </div>
        </header>
        <div className="section1" id="section01">
            <div className="section-right">
                <div className="container-info">
                    <p className="text-1">Ola, eu sou:</p>
                    <div>
                        <img src={William} alt="" />
                        <p className="text-2">William Fabiano</p>
                        <p>Desenvolvedor Front-End</p>
                    </div>
                </div>
            </div>
            <div className="section-left">
                <div className="circle">
                    <div className="div-carousel">
                        <Carousel className="carousel" cellSpacing="100" animation='zoom' autoplay autoplayInterval="2000">
                            <a target="_blank" href="https://github.com/cbolla"><img src={GitHub} alt="Icone do GitHub" /></a>
                            <a target="_blank" href="https://www.linkedin.com/in/williamfa/"><img src={LinkedIn} alt="Icone do LinkedIn"/></a>
                        </Carousel>
                    </div>
                </div> 
            </div>
        </div>

        <div className="section2" id="section02">
            <div className="side-left">
                <img src={Cartoon} alt="Eu em Cartoon" />
            </div>
            <div className="side-right">
                <h1>Sobre mim</h1>
                <p>
                Meu nome é William Fabiano de Almeida,<br/>
                eu realmente amo programação web estou<br/>
                envolvido com tecnologia desde criança<br/>
                e estou sempre procurando aprender mais.<br/>
                Atualmente sou apenas desenvolvedor<br/>
                Front-End, mas quero ser um desenvolvedor<br/>
                Full-Stack no futuro.<br/>
                </p>
            </div>
        </div>

        <div className="section3" id="section03">
            <h1>Habilidades</h1>
            <div className="tools">
                <div className="react">
                    <CardsSkill img={ReactIcon} text="React JS: 5 meses de experiência"/>
                </div>
                <div className="css">
                    <CardsSkill img={CssIcon} text="CSS: 12 meses de experiência"/>
                </div>
                <div className="js">
                    <CardsSkill img={JsIcon} text="JavaScript: 5 meses de experiência"/>
                </div>
            </div>
        </div>
    </div>
  )
}
