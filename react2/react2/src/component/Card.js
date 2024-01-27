import React, { useState } from "react";
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ icon, title, backgroundColor, titleColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card-container ${isHovered ? "hovered" : ""}`}
      style={{ backgroundColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-content">
        <div className="icon">
          {icon && <FontAwesomeIcon icon={icon} />}
        </div>
        {title && <h1 className="card-title" style={{ color: titleColor }}>{title}</h1>}
      </div>
    </div>
  );
};

const SocialIcon = ({ icon, link, socialIconColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`social-icon ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={icon} style={{ color: socialIconColor }} />
      </a>
    </div>
  );
};


export { Card, SocialIcon };
