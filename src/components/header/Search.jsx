import React from 'react';
import {FiSearch} from 'react-icons/fi';


function Search() {
  return (
    <div className="search">
      <form action="" method="">
        <input type="text" placeholder="Aradığınız ürün,kategori veya markayı yazınız"/>
        <button type="submit">
          <FiSearch />
        </button>
      </form>
    </div>
  )
}

export default Search