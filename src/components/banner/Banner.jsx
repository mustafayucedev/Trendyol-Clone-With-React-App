import {useState , useEffect} from 'react';
import './banner.css';
import './banner-responsive.css';
import BannerItems from './BannerItems';
import BannerAPI from '../../api/banners.json';

function Banner() {

  const [banners, SetBanners] = useState([]);

  useEffect(() => {
    SetBanners(BannerAPI)
  }, [])

  return (
    <div className="home-banners">
      <div className="container">
        <div className="row">
          {banners && banners.map((banner,index) => <BannerItems key={index} banner={banner} /> )}
        </div>
      </div>
    </div>
  )
}

export default Banner