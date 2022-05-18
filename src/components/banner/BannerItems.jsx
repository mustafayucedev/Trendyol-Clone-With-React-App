import React from 'react'

function BannerItems( {banner: {id,image,title,buttonTitle,url}} ) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
        <div className="home-banner-item">
            <a href={url}>
            <div className="home-banner-image">
                <img src={image} alt={title} />
            </div>
            <div className="home-banner-content">
                <div className="home-banner-title"> {title} </div>
                <div className="home-banner-button-title"> {buttonTitle} </div>
            </div>
            </a>
        </div>
    </div>
  )
}

export default BannerItems