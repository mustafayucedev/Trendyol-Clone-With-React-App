import React from 'react';
import {BiUser} from 'react-icons/bi';

function UserMenu() {
  return (
    <div className="user-menu">
        <a href="#">
            <i>
                <BiUser />
            </i>
            <span>Hesabım</span>
        </a>
    </div>
  )
}

export default UserMenu