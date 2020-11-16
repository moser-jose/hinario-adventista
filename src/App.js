import React, { useState, useEffect } from 'react';
import logo from './img/logo.svg';
import phoneWhite from './img/phone_white.svg';
import phoneBlack from './img/phone_dark.svg';
import darkHome from './img/telas/dark_home.png';
import darkPreload from './img/telas/dark_preload.png';
import darkCategorie from './img/telas/dark_seccoes.png';
import darkConfig from './img/telas/dark_config.png';
import darkSearch from './img/telas/dark_search.png';
import darkfavorites from './img/telas/dark_favorites.png';
import darkHino from './img/telas/dark_hino.png';
import lightHome from './img/telas/light_home.png';
import lightPreload from './img/telas/light_preload.png';
import lightCategorie from './img/telas/light_seccoes.png';
import lightConfig from './img/telas/light_config.png';
import lightSearch from './img/telas/light_search.png';
import lightfavorites from './img/telas/light_favorites.png';
import lightHino from './img/telas/light_hino.png';
import Tela from './Components/Telas';
import './App.scss';
import Corousel from 'react-elastic-carousel';
import {Link, animateScroll as scroll} from 'react-scroll';
import TapToTop from './Components/TapToTop';
import Download from './Components/Download';
import Footer from './Components/Footer';
export default function App() {
  const [menu, setMenu]=useState(true);
  const breakPoints=[
    {width:1, itemsToShow:1},
    {width:500, itemsToShow:2},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:5}
  ];

const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

const handleClick =()=>{
      setMenu(!menu);
      if(!menu){
        document.querySelector('body').classList.add('body');
      }
      else{
        document.querySelector('body').classList.remove('body');
      }
}

const handleClickBody =()=>{
  setMenu(!menu);
  document.querySelector('body').classList.remove('body');
}
useEffect(() => {
    handleClick();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    
}, []);

  return (
    <div className="App">
  
    <section className="home">
      <div className={menu===false ? "menu-ll": "menu-l"}>
        <img className="whiteM" src={phoneBlack} alt="Logo"/>
      </div>
        <div className="container">
        <div className="menu container">
          <a href="/"><img src={logo} alt="Logo"/></a>
          <div id="menu-bar" onClick={handleClick}>
            <div id="menu-b" className={menu===true ? "change": ""}>
                  <div id={menu===false ? "bar1": "bar11"} className="bar"></div>
                  <div id="bar2" className="bar"></div>
                  <div id={menu===false ? "bar3": "bar33"} className="bar"></div>
            </div>
          </div>
          <ul className={menu===false ? "dN":"dB"}>
            <li onClick={()=>
              scroll.scrollToTop()
            }><Link onClick={handleClickBody} className="link" duration={1000} smooth={true} to="telas">Home</Link></li>
            <li><Link onClick={handleClickBody} className="link" duration={1000} smooth={true} to="telas">Telas do App</Link></li>
            <li> <Link onClick={handleClickBody}  className="link" duration={1000} smooth={true} to="download">Download</Link></li>
            <div id="animacao" className="animacao s-home"></div>
            <p className="github">👨🏽‍💻 Aventure-se e contribua com o Projecto no <a href="https://github.com/moser-jose/Hina7" target="_blank" rel="noreferrer">GitHub</a> ✌🏼</p>
          </ul>
        </div>
          <div className="info grid-8">
          <h1>
            Faça o Download do Hinário Adventista do 7º dia
          </h1>
          <p className="texto">
          São mais de 600 hinos, que podem ser entoados não apenas no culto congregacional mas também no culto familiar, nas reuniões de jovens, na devoção particular e muito mais. Tira o maior proveito. Deus o abençoe.
          </p>
          <a href="#id" className="play">
            <div className="link">
              <span className="goo"><i className="i fab fa-google-play"></i> GooglePlay</span>
            </div>
          </a>
          <a href="#id" className="apk">
            <div className="link">
              <span className="goo"><i className="i fab fa-android"></i> Download APK</span>
            </div>
          </a>
          
          <p className="obs">
            <span>Obs:</span> Brevemente na App Store
          </p>
        </div>
        
        </div>
        
        <img className="white" src={phoneWhite} alt="Logo"/>
        <img className="black" src={phoneBlack} alt="Logo"/>
        <div className="fim"></div>
      </section>
    <section id="telas" className="telas">
      <div className="container">
        <div className="tela-and-title">
              <h1>Telas do App</h1>
              <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                  auctor nisi elit consequat ipsum, nec sagittis sem!</p>
        </div>
          <div className="telas-phone">
            <Corousel disableArrowsOnEnd={false} pagination={false} transitionMs={500} breakPoints={breakPoints}>
              <Tela imagem={darkPreload}></Tela>
              <Tela imagem={darkHome}></Tela>
              <Tela imagem={darkCategorie}></Tela>
              <Tela imagem={darkSearch}></Tela>
              <Tela imagem={darkHino}></Tela>
              <Tela imagem={darkConfig}></Tela>
              <Tela imagem={darkfavorites}></Tela>
              <Tela imagem={lightPreload}></Tela>
              <Tela imagem={lightHome}></Tela>
              <Tela imagem={lightCategorie}></Tela>
              <Tela imagem={lightSearch}></Tela>
              <Tela imagem={lightHino}></Tela>
              <Tela imagem={lightConfig}></Tela>
              <Tela imagem={lightfavorites}></Tela>
            </Corousel>
          </div>
      </div>
    </section>
    <Download phoneWhite={phoneWhite} phoneBlack={phoneBlack}></Download>
    {scrollPosition > 50 && <TapToTop></TapToTop>}
    
    <Footer></Footer>
    
    </div>
  );
}