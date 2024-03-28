import "./index.css";
import React from "react";
import GitHub from "../../assets/img/gitHub.svg";
import LinkedIn from "../../assets/img/linkedIn.svg";
import William from "../../assets/img/william.png";
import Cartoon from "../../assets/img/cartoon.svg";
import JsIcon from "../../assets/img/js-icon.svg";
import CssIcon from "../../assets/img/css-icon.svg";
import ReactIcon from "../../assets/img/react-icon.svg";
import tailwindcss from "../../assets/img/tailwindcss.png";
import figma from "../../assets/img/figma.png";
import MetaAds from "../../assets/img/metaads.png";
import wordpress from "../../assets/img/wordpress.png";
import gitbash from "../../assets/img/gitbash.png";
import elbus from "../../assets/img/elbus.png";
import magica from "../../assets/img/magica.png";
import artesanato from "../../assets/img/artesanato.png";
import emBreve from "../../assets/img/emBreve.png";

import Carousel from "nuka-carousel";
import { CardsSkill } from "../../components/cardsSkill/CardsSkill";
import { useState } from "react";

export const HomePage = () => {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };
  return (
    <div className="container">
      <header>
        <p className="title">Portfólio</p>
        <div className="sections-header">
          <a href="#section01">Apresentação</a>
          <a href="#section02">Sobre mim</a>
          <a href="#section03">Habilidades</a>
          <a href="#section04">Projetos</a>
        </div>
        <input type="checkbox" name="" id="checkbox-menu" />
        <label htmlFor="checkbox-menu" id="menu" onClick={ToggleMode}>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </header>
      <div className={active ? "menu-style" : "disabled"}>
        <div className="menu-tools">
          <a href="#section01">Apresentação</a>
          <a href="#section02">Sobre mim</a>
          <a href="#section03">Habilidades</a>
          <a href="#section04">Projetos</a>
        </div>
      </div>
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
              <Carousel
                className="carousel"
                wrapAround
                cellSpacing="100"
                animation="zoom"
                autoplay
                autoplayInterval="3000"
                renderCenterLeftControls={({ previousSlide }) => (
                  <button className="anterior" onClick={previousSlide}>
                    Anterior
                  </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button className="proximo" onClick={nextSlide}>
                    Próximo
                  </button>
                )}
              >
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://github.com/cbolla"
                >
                  <img src={GitHub} alt="Icone do GitHub" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.linkedin.com/in/williamfabiano/"
                >
                  <img src={LinkedIn} alt="Icone do LinkedIn" />
                </a>
              </Carousel>
            </div>
          </div>
          <div className="links">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/cbolla"
            >
              <img src={GitHub} alt="Icone do GitHub" />
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/williamfa/"
            >
              <img src={LinkedIn} alt="Icone do LinkedIn" />
            </a>
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
            Meu nome é William Fabiano de Almeida,
            <br />
            eu realmente amo programação web estou
            <br />
            envolvido com tecnologia desde criança
            <br />
            e estou sempre procurando aprender mais.
            <br />
            Atualmente sou apenas desenvolvedor
            <br />
            Front-End, mas quero ser um desenvolvedor
            <br />
            Full-Stack no futuro.
            <br />
          </p>
        </div>
      </div>

      <div className="section3" id="section03">
        <h1>Habilidades</h1>
        <div className="tools">
          <div className="react">
            <CardsSkill
              img={ReactIcon}
              text="React JS: Mais de 1 ano de experiência"
            />
          </div>
          <div className="css">
            <CardsSkill
              img={CssIcon}
              text="CSS: Mais de 3 anos de experiência"
            />
          </div>
          <div className="js">
            <CardsSkill
              img={JsIcon}
              text="JavaScript: Mais de 2 anos de experiência"
            />
          </div>
          <div className="tailwindcss">
            <CardsSkill
              img={tailwindcss}
              text="TailwindCSS: Mais de 1 ano de experiência"
            />
          </div>
          <div className="js">
            <CardsSkill
              img={figma}
              text="Figma: Mais de 2 anos de experiência"
            />
          </div>
          <div className="wodpress">
            <CardsSkill
              img={wordpress}
              text="WordPress: Mais de 1 ano de experiência"
            />
          </div>
          <div className="Meta Ads">
            <CardsSkill
              img={MetaAds}
              text="Meta Ads: Mais de 1 ano de experiência"
            />
          </div>
          <div className="git">
            <CardsSkill
              img={gitbash}
              text="Git e Git Hub: Mais de 3 anos de experiência"
            />
          </div>
        </div>
      </div>

      <div className="section4" id="section04">
        <h1>Projetos</h1>
        <div className="projetos">
          <div className="elbus">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://elbus.vercel.app/"
            >
              <img src={elbus} alt="Projeto de transporte público" />
            </a>
          </div>
          <div className="elbus">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://forestgreen-lyrebird-755778.hostingersite.com/"
            >
              <img src={artesanato} alt="Projeto de transporte público" />
            </a>
          </div>
          <div className="elbus">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://cbollamagica-6j2mhfb83-cbolla.vercel.app/"
            >
              <img src={magica} alt="Projeto de transporte público" />
            </a>
          </div>
          <div className="emBreve">
            <a href="">
              <img src={emBreve} alt="Projeto de transporte público" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
