import React from 'react';
import GitSvg from '../../../img/github.svg';
import LinkedinSvg from '../../../img/linkedin.svg';
import './Social.css';

const Social = () => {
  return (
    <div className="Social">
      <div className="SocialItem">
        <a href="http://github.com/lozzo27" target="_blank" rel="noopener noreferrer">
          <img src={GitSvg} alt="Github"/>
        </a>
      </div>
      <div className="SocialItem">
        <a href="http://linkedin.com/in/daniele-sordi" target="_blank" rel="noopener noreferrer">
          <img src={LinkedinSvg} alt="LinkedIn"/>
        </a>
      </div>
    </div>
  );
}

export default Social;
