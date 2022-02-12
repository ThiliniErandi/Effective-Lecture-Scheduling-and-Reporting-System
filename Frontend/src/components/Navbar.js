import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" 
         style={{ paddingBottom:'0px', backgroundImage: 'linear-gradient(to right bottom, #0f0c29,#005AA7, #302b63)' }}>
      <div className="container-fluid justify-content-between">

      <div className="d-flex">
          <a className="navbar-brand me-2 mb-1 d-flex align-items-center">
            <h4 style={{ fontFamily:'Nunito-regular', color:'white' }}>Computing and Information Systems</h4>
          </a>
        </div>

      <ul className="navbar-nav flex-row d-none d-md-flex">
          <li className="nav-item me-3 me-lg-1 active "  style={{ paddingInline:'10px' }}>
            <a className="nav-link">
              <span><Link to='/home' style={{ color:'white' }}><i className="fas fa-home fa-lg"></i></Link></span>
            </a>
          </li>

          <li className="nav-item me-3 me-lg-1" style={{ paddingInline:'10px' }}>
            <a className="nav-link" >
              <span><Link to='/home' style={{ color:'white' }}><i className="fas fa-flag fa-lg"></i></Link></span>
              <span className="badge rounded-pill badge-notification bg-danger">2</span>
            </a>
          </li>

          {/* <li className="nav-item me-3 me-lg-1">
            <a className="nav-link" href="www.google.com">
              <span><i className="fas fa-users fa-lg"></i></span>
              <span className="badge rounded-pill badge-notification bg-danger">2</span>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a className="dropdown-item" href="www.google.com">My profile</a>
              </li>
              <li>
                <a className="dropdown-item" href="www.google.com">Settings</a>
              </li>
              <li>
                <a className="dropdown-item" href="www.google.com">Logout</a>
              </li>
            </ul>
          </li> */}
       
        

        {/* <ul className="navbar-nav flex-row"> */}
        <li className="nav-item dropdown me-3 me-lg-1" style={{ paddingInline:'10px' }}>
            <a
              className="nav-link dropdown-toggle hidden-arrow"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <Link to='/home' style={{ color:'white' }}>
              <i className="fas fa-bell fa-lg"></i>
              </Link>
              <span className="badge rounded-pill badge-notification bg-danger">12</span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" >Some news</a>
              </li>
              <li>
                <a className="dropdown-item" >Another news</a>
              </li>
              <li>
                <a className="dropdown-item" >Something else here</a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown me-3 me-lg-1" style={{ paddingInline:'10px' }}>
            <a
              className="nav-link dropdown-toggle hidden-arrow"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <Link to='/home' style={{ color:'white' }}>
              <i className="fas fa-comments fa-lg"></i>
              </Link>

              <span className="badge rounded-pill badge-notification bg-danger">6</span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" >Some news</a>
              </li>
              <li>
                <a className="dropdown-item" >Another news</a>
              </li>
              <li>
                <a className="dropdown-item" >Something else here</a>
              </li>
            </ul>
          </li>
        
          <li className="nav-item dropdown" style={{ paddingInline:'10px' }}>
            <a
              className="nav-link dropdown-toggle d-flex align-items-center"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="assets/images/hero-right-img.png"
                className="rounded-circle"
                height="22"
                alt="Portrait of a Woman"
                loading="lazy"
              />
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <Link to='/home'><a className="dropdown-item" >My profile</a></Link>
              </li>
              <li>
                <a className="dropdown-item" >Settings</a>
              </li>
              <li>
                <a className="dropdown-item" >Logout</a>
              </li>
            </ul>
          </li>
          {/* <form className="input-group w-auto my-auto d-none d-sm-flex">
            <input
              autocomplete="off"
              type="search"
              className="form-control rounded"
              placeholder="Search"
              style={{minWidth: '125px'}}
            />
            <span className="input-group-text border-0 d-none d-lg-flex"
              ><i className="fas fa-search"></i
            ></span>
          </form> */}
        </ul>
      </div>
    </nav>
  </div>;
};

export default Navbar;
