import React from 'react';
import LogoImage from '../../images/logo.svg';

function Logo() {
  return (
    <div className="logo">
        <a href="#">
            <img src={LogoImage} />
        </a>
    </div>
  )
}

export default Logo