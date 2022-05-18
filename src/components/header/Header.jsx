import React from 'react';
import './header.css';
import './header-responsive.css';
import StaticMenu from './StaticMenu';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';
import Favorites from './Favorites';
import CartMenu from './CartMenu';
import Navigation from './Navigation';
import {GiHamburgerMenu} from 'react-icons/gi';

function Header() {
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <StaticMenu />
        </div>
      </div>
      <div className="header-middle">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto order-1 d-lg-none">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto d-lg-none">
                  <div className="mobile-navigation">
                    <a href="javascript:void(0)">
                      <GiHamburgerMenu />
                    </a>
                    <div className="mobile-navigation-content">
                      <Navigation />
                    </div>
                  </div>
                </div>
                <div className="col-auto d-lg-none">
                  <Favorites />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-auto order-lg-3 order-2">
              <Logo />
            </div>
            <div className="col-lg-6 order-lg-4 order-7">
              <Search />
            </div>
            <div className="col-lg-4 col-auto order-lg-5 order-3">
              <div className="row align-items-center justify-content-end">
                <div className="col-auto order-lg-6 order-4">
                  <UserMenu />
                </div>
                <div className="col-auto order-lg-7 order-5 d-none d-lg-block">
                  <Favorites />
                </div>
                <div className="col-auto order-lg-8 order-6">
                  <CartMenu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <Navigation />
        </div>
      </div>
    </header>
  )
}

export default Header