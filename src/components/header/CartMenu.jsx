import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';

function CartMenu() {
  return (
      <div className="cart-menu">
          <a href="#">
              <i>
                  <AiOutlineShoppingCart />
              </i>
              <span>Sepetim</span>
          </a>
      </div>
  )
}

export default CartMenu