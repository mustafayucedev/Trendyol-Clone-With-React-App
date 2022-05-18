import {useState , useEffect} from 'react';
import './popular-categories.css';
import './popular-categories-responsive.css';
import Slick from "react-slick";
import categoriesAPI from '../../api/categories.json';
import PopularCategoryItems from './PopularCategoryItems';

function PopularCategories() {

  const settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 10.5,
    slidesToScroll: 10.5,
    responsive: [
        {
            breakpoint: 991,
            settings: {
              slidesToShow: 5.5,
              slidesToScroll: 5.5
            }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4.5,
            slidesToScroll: 4.5
          }
        },
        {
          breakpoint: 474,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 3.5
          }
        },
        {
          breakpoint: 374,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2.5
          }
        }
    ]
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesAPI)
  }, [])

  return (
    <div className="popular-categories">
      <div className="container">
        <div className="popular-categories-content">
            <Slick {...settings}>
                {categories && categories.map((category,index) => <PopularCategoryItems key={index} category={category} /> )}
            </Slick>
        </div>
      </div>
    </div>
  )
}

export default PopularCategories