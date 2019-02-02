import React, { Component } from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
         <div className='navbar-item'>
          <p className='title'>MED<span>HACK</span></p>
         </div>
         <div className='navbar-item'>
         	<Link 
         		className="nav_el" to={{ 
	            pathname: `/about`
	        }}>
				Раздел
	        </Link>
         </div>
      </div>
    );
  }
}

export default Navbar;