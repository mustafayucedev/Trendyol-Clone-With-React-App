import React from 'react';
import './footer.css';
import './footer-responsive.css';

function Footer() {
  return (
    <footer>
      <div className="footer-menu-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <div className="footer-menu">
                <div className="footer-menu-title"> Trendyol </div>
                <div className="footer-menu-content">
                  <ul>
                    <li> <a href="#"> Biz Kimiz </a> </li>
                    <li> <a href="#"> Kariyer </a> </li>
                    <li> <a href="#"> İletişim </a> </li>
                    <li> <a href="#"> Trendyol'da Satış Yap </a> </li>
                    <li> <a href="#"> Kurumsal Hediye Çeki </a> </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <div className="footer-menu">
                <div className="footer-menu-title"> About Us </div>
                <div className="footer-menu-content">
                  <ul>
                    <li> <a href="#"> Who we are </a> </li>
                    <li> <a href="#"> Careers </a> </li>
                    <li> <a href="#"> Contact us </a> </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <div className="footer-menu">
                <div className="footer-menu-title"> Kampanyalar </div>
                <div className="footer-menu-content">
                  <ul>
                    <li> <a href="#"> Aktif Kampanyalar </a> </li>
                    <li> <a href="#"> Elite Üyelik </a> </li>
                    <li> <a href="#"> Hediye Fikirleri </a> </li>
                    <li> <a href="#"> Trendyol Fırsatları </a> </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <div className="footer-menu">
                <div className="footer-menu-title"> Yardım </div>
                <div className="footer-menu-content">
                  <ul>
                    <li> <a href="#"> Sıkça Sorulan Sorular </a> </li>
                    <li> <a href="#"> Canlı Yardım </a> </li>
                    <li> <a href="#"> Nasıl İade Edebilirim </a> </li>
                    <li> <a href="#"> İşlem Rehberi </a> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        Frontend Developer <a href="https://www.github.com/mustafayucedev" target="_blank"> Mustafa Yüce </a>
      </div>
    </footer>
  )
}

export default Footer