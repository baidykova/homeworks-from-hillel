import React from 'react';
import './Navigation.css'

function Navigation() {
  return (
    <nav>
      <ul>
        <li className='links'><a href="#">головна</a></li>
        <li className='links'><a href="#">контакти</a></li>
        <li className='links'><a href="#">о нас</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
