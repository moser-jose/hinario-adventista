import React from 'react';
import { Link } from 'react-scroll';

const download= ({phoneBlack, phoneWhite})=>

<section id="download" className="download">
<div className="container">
<div className="info grid-8">
    <h1>
      Download do App
    </h1>
    <p className="texto">
    São mais de 600 hinos, que podem ser entoados não apenas no culto congregacional mas também no culto familiar, nas reuniões de jovens, na devoção particular e muito mais. Tira o maior proveito. Deus o abençoe.
    </p>
    {/* <a target="_blank" href="https://play.google.com/store/apps/details?id=com.hin7" className="play">
      <div className="link">
        <span className="goo"><i className="i fab fa-google-play"></i> GooglePlay</span>
      </div>
    </a> */}
    <a target="_blank" href="https://github.com/moser-jose/Hina7/releases/tag/v1.0.8" className="apk">
      <div className="link">
        <span className="goo"><i className="i fab fa-android"></i> Download APK</span>
      </div>
    </a>
    <Link duration={1000} smooth={true} to='novo' className="vers">Versão atual v1.0.8</Link>
  </div>
  <img className="black" src={phoneBlack} alt="Logo"/>
  <img className="white" src={phoneWhite} alt="Logo"/>

 </div>
</section>


export default download;

