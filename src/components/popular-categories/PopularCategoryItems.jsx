import React from 'react'

function PopularCategoryItems( {category: {id,title,image,url}} ) {
  return (
      <div className="col-auto">
          <div className="popular-categories-item">
              <div className="popular-categories-image">
                  <a href={url}>
                      <img src={image} alt={title} />
                  </a>
              </div>
              <div className="popular-categories-title">
                  <a href={url}> {title} </a>
              </div>
          </div>
      </div>
  )
}

export default PopularCategoryItems