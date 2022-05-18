import React from 'react'

function productsItem(  {product: {id,name,brand,oldPrice,newPrice,image,category}} ) {
  return (
      <div className="col-auto">
          <div className="showcase">
              <div className="showcase-image-container">
                  <div className="showcase-image">
                      <a href="#">
                          <img src={image} alt={name} />
                      </a>
                  </div>
              </div>
              <div className="showcase-content">
                  <div className="showcase-brand">  
                    <a href="#"> {brand} </a>
                  </div>
                  <div className="showcase-title"> 
                    <a href="#"> {name} </a>
                  </div>
                  <div className="showcase-price">
                      <div className="showcase-price-old"> {oldPrice} </div>
                      <div className="showcase-price-new"> {newPrice} </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default productsItem