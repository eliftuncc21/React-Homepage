import React, { useState } from "react";
import "./App.css";
import { Card, SocialIcon } from "./component/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge, faIdCard, faBlog, faDiagramProject, faChartPie, faComment, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [flagImageUrl, setFlagImageUrl] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_the_United_States_%281912-1959%29.svg/1024px-Flag_of_the_United_States_%281912-1959%29.svg.png");
  const [Icon, setIcon] = useState(faSun);
  const [backgroundColor, setBackgroundColor] = useState("#282c34"); 
  const [cardBackgroundColor, setCardBackgroundColor] = useState("#242424"); 
  const [titleColor, setTitleColor] = useState("#fff"); 
  const [socialIconBackgroundColor, setSocialIconBackgroundColor] = useState("#242424"); 
  const [socialIconColor, setSocialIconColor] = useState("#fff"); 
  const [lineColor, setLineColor] = useState("#fff");
  const [copyrightt, setcopyrightt] = useState("#fff");

  const changeFlagImage = () => {
    const newFlagImageUrl = flagImageUrl === "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_the_United_States_%281912-1959%29.svg/1024px-Flag_of_the_United_States_%281912-1959%29.svg.png"
      ? "https://media.istockphoto.com/id/1053420278/tr/vekt%C3%B6r/t%C3%BCrk-bayra%C4%9F%C4%B1-do%C4%9Fru-oranlar%C4%B1-vekt%C3%B6r.jpg?s=612x612&w=0&k=20&c=tm7M6ziGeCG3G_GLzaEyY5kBYGYd1dSKZXlUdPKXSds="
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_the_United_States_%281912-1959%29.svg/1024px-Flag_of_the_United_States_%281912-1959%29.svg.png";
    setFlagImageUrl(newFlagImageUrl);
  };

  const changeIcon = () => {
    const newIcon = Icon === faSun ? faMoon : faSun;
    setIcon(newIcon);
    setBackgroundColor(Icon === faSun ? "#f1f1f1" : "#282c34"); 
    setCardBackgroundColor(Icon === faSun ? "rgb(255, 255, 255)" : "#242424");
    setTitleColor(Icon === faSun ? "#000" : "#fff"); 
    setSocialIconBackgroundColor(Icon === faSun ? "rgb(255, 255, 255)" : "#242424");
    setSocialIconColor(Icon === faSun ? "#000" : "#fff");
    setLineColor(Icon === faSun ? "#000" : "#fff");
    setcopyrightt(Icon === faSun ? "#000" : "#fff"); 
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-3 g-4 py-3">
          <div className="col">
            <Card icon={faIdBadge} title="CV" backgroundColor={cardBackgroundColor} titleColor={titleColor} />
          </div>
          <div className="col">
            <Card icon={faIdCard} title="Kartvizit" backgroundColor={cardBackgroundColor} titleColor={titleColor} />
          </div>
          <div className="col">
            <Card icon={faBlog} title="Bloglar" backgroundColor={cardBackgroundColor} titleColor={titleColor} />
          </div>
          <div className="col">
            <Card icon={faDiagramProject} title="Projeler" backgroundColor={cardBackgroundColor} titleColor={titleColor} />
          </div>
          <div className="col">
            <Card icon={faChartPie} title="İstatistikler" backgroundColor={cardBackgroundColor} titleColor={titleColor} />
          </div>
          <div className="col">
            <Card icon={faComment} title="İletişim" backgroundColor={cardBackgroundColor} titleColor={titleColor} />
          </div>
        </div>
        <div className="row mt-1">
          <div className="col text-center">
            <div className="social-icons" style={{backgroundColor: socialIconBackgroundColor}}>
              <SocialIcon icon={faInstagram} link="https://www.instagram.com/ismetkizgin/" socialIconColor={socialIconColor}/>
              <SocialIcon icon={faLinkedin} link="https://www.linkedin.com/in/ismetkizgin/" socialIconColor={socialIconColor}/>
              <SocialIcon icon={faGithub} link="https://github.com/ismetkizgin" socialIconColor={socialIconColor}/>
              <SocialIcon icon={faNpm} link="https://www.npmjs.com/~ismetkizgin" socialIconColor={socialIconColor}/>
            </div>
            <div className="row mt-3 justify-content-center align-items-center">
              <div className="col-auto">
                <div className="d-flex align-items-center">
                  <img
                    src={flagImageUrl}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "25px",
                      backgroundColor: "transparent",
                      cursor: "pointer"
                    }}
                    alt="flag"
                    onClick={changeFlagImage}
                  />
                  <hr className="vertical-line" style={{backgroundColor: lineColor}}/>
                  <FontAwesomeIcon
                    icon={Icon}
                    style={{
                      fontSize: "32px",
                      color: Icon === faSun ? '#fff' : '#000',
                      cursor: "pointer"
                    }}
                    onClick={changeIcon}
                  />
                </div>
              </div>
            </div>
            <div className="row" style={{marginTop: "20px", color: copyrightt}}>
              <div className="col-auto">
                <div className="d-flex justify-content-center align-items-center">
                <div className="copyrightt">
                  Copyright © 2024 İsmet KİZGİN
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
