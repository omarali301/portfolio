import React from 'react';
import logo from '../../../images/omar logo.png';
import './Header.css';

const Header = () => {
    return (

      <div className="container sticky-top">
        <nav class="navbar navbar-expand-lg navbar-blue ms-5">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img className="logo" src={logo} alt=""/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link ms-4 active" aria-current="page" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-4" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-4" href="#service">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-4" href="#blog">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-4" href="#contact">Contact</a>
              </li>
                
            </ul>
         
          </div>
        </div>
      </nav>
      </div>
    );
};

export default Header;