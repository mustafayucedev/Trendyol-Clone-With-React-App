import {useEffect , useState} from 'react';
import './product.css';
import './product-responsive.css';
import ProductsItems from './productsItem';
import ProductsAPI from '../../api/products.json';
import Slick from "react-slick";

function Product() {

  const settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 474,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 374,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ProductsAPI)
  }, [])

  return (
    <div className="container">
      <div className="products">
        <div className="products-header">
          <span>Çok Satan Ürünler</span>
          <a href="#"> Tüm Ürünler! </a>
        </div>
        <div className="products-content">
            <Slick {...settings}>
                {products && products.map((product,index) => <ProductsItems key={index} product={product} /> )}
            </Slick>
        </div>
      </div>
    </div>
  )
}

export default Product