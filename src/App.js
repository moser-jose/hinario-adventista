import React, { useState, useEffect } from 'react';
import logo from './img/logo.svg';
import phoneWhite from './img/phone_white.svg';
import phoneBlack from './img/phone_dark.svg';
import darkHome from './img/telas/dark_home.jpg';
import darkPreload from './img/telas/dark_preload.jpg';
import darkCategorie from './img/telas/dark_seccoes.jpg';
import darkConfig from './img/telas/dark_config.jpg';
import darkSearch from './img/telas/dark_search.jpg';
import darkfavorites from './img/telas/dark_favorites.jpg';
import darkHino from './img/telas/dark_hino.jpg';
import lightHome from './img/telas/light_home.jpg';
import lightPreload from './img/telas/light_preload.jpg';
import lightCategorie from './img/telas/light_seccoes.jpg';
import lightConfig from './img/telas/light_config.jpg';
import lightSearch from './img/telas/light_search.jpg';
import lightfavorites from './img/telas/light_favorites.jpg';
import lightHino from './img/telas/light_hino.jpg';
import Tela from './Components/Telas';
import './App.scss';
import Corousel from 'react-elastic-carousel';
import { Link } from 'react-scroll';
import TapToTop from './Components/TapToTop';
import Download from './Components/Download';
import Novo from './Components/Novo';
export default function App() {
  const [menu, setMenu] = useState(true);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 1000, itemsToShow: 5 },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleClick = () => {
    setMenu(!menu);
    if (!menu) {
      document.querySelector('body').classList.add('body');
    }
    else {
      document.querySelector('body').classList.remove('body');
    }
  }

  const handleClickBody = () => {
    setMenu(!menu);
    document.querySelector('body').classList.remove('body');
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    setMenu(menu => !menu);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, []);

  return (
    <div className="App">

      <section id="home" className="home">
        <div className={menu === false ? "menu-ll" : "menu-l"}>
          <img className="whiteM" src={phoneBlack} alt="Logo" />
        </div>
        <div className="container">
          <div className="menu container">
            <a href="/"><img src={logo} alt="Logo" /></a>
            <div id="menu-bar" onClick={handleClick}>
              <div id="menu-b" className={menu === true ? "change" : ""}>
                <div id={menu === false ? "bar1" : "bar11"} className="bar"></div>
                <div id="bar2" className="bar"></div>
                <div id={menu === false ? "bar3" : "bar33"} className="bar"></div>
              </div>
            </div>
            <ul className={menu === false ? "dN" : "dB"}>
              <li><Link onClick={handleClickBody} className="link" duration={1000} smooth={true} to="home">Home</Link></li>
              <li><Link onClick={handleClickBody} className="link" duration={1000} smooth={true} to="telas">Telas do App</Link></li>
              <li><Link onClick={handleClickBody} className="link" duration={1000} smooth={true} to="novo">Novidades</Link></li>
              <li><Link onClick={handleClickBody} className="link" duration={1000} smooth={true} to="download">Download</Link></li>
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
            {/* <a target="_blank" href="https://play.google.com/store/apps/details?id=com.hin7" className="play">
              <div className="link">
                <span className="goo"><i className="i fab fa-google-play"></i> GooglePlay</span>
              </div>
            </a> */}
            <a target="_blank" rel="noreferrer" href="https://github.com/moser-jose/Hina7/releases/download/v1.0.8/hinario-v1.0.8.apk" className="apk">
              <div className="link">
                <span className="goo"><i className="i fab fa-android"></i> Download APK</span>
              </div>
            </a>
            <Link duration={1000} smooth={true} to='novo' className="vers">Versão atual v1.0.8</Link>
  
          </div>

        </div>

        <img className="white" src={phoneWhite} alt="Logo" />
        <img className="black" src={phoneBlack} alt="Logo" />
        <div className="fim"></div>
      </section>
      <section id="telas" className="telas">
        <div className="container">
          <div className="tela-and-title">
            <h1>Telas do App</h1>
            <p>Veja as telas do App e desfrute do Aplicativo, louve a Deus e adore-o na sua plenitude.</p>
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
      <Novo phoneBlack={phoneBlack}/>
      <Download phoneWhite={phoneWhite} phoneBlack={phoneBlack}></Download>
      
      {scrollPosition > 50 && <TapToTop></TapToTop>}

      <footer>
        <div className="prefooter container">
          <p>👨🏽‍💻 Aventure-se e contribua com o Projecto no <a href="https://github.com/moser-jose/Hina7" target="_blank" rel="noreferrer">GitHub</a> ✌🏼</p>

        </div>
        <div className="footer">
          <div className="container">
            <a href="/"><img src={logo} alt="Logo" /></a>
            <ul className={menu === false ? "dN" : "dB"}>
              <li><Link onClick={handleClickBody} className="link" duration={1000} smooth={true} to="home">Home</Link></li>
              <li><Link onClick={handleClickBody} className="link" duration={1000} smooth={true} to="telas">Telas do App</Link></li>
              <li><Link onClick={handleClickBody} className="link" duration={1000} smooth={true} to="novo">Novidades</Link></li>
              <li><Link onClick={handleClickBody} className="link" duration={1000} smooth={true} to="download">Download</Link></li>
            </ul>
            <p>Alguns direitos reservados &copy; {new Date().getFullYear()}</p>
          </div>
        </div>

      </footer>
    </div>
  );
}