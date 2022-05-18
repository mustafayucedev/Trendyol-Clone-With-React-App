import React from 'react';
import {MdFavoriteBorder} from 'react-icons/md';


function Favorites() {
  return (
      <div className="favorites-menu">
          <a href="#">
              <i>
                  <MdFavoriteBorder />
              </i>
              <span>Favorilerim</span>
          </a>
      </div>
  )
}

export default Favorites