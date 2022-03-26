import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  // MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <MDBNavbar expand='lg' style={{backgroundColor: '#0F304D'}}>
      <MDBContainer fluid style={{height:'42px', paddingTop:'20px'}}>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <Link to='/home' style={{ paddingInline: '20px'}}>
                <MDBIcon fas icon='home fa-lg' style={{ color:'white'}}/>
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to='/dashboard' style={{ paddingInline: '20px'}}>
                <MDBIcon fas icon='desktop fa-lg' style={{ color:'white'}}/>
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem style={{marginTop:'-10px'}}>
              <MDBDropdown style={{paddingInline: '20px', }}>
                <MDBDropdownToggle tag='a' className='nav-link' style={{marginRight:'7px', color:'white'}}>
                  <MDBIcon fas icon='calendar fa-lg' style={{ color:'white'}}/>
                </MDBDropdownToggle>
                <MDBDropdownMenu dark>
                  <MDBDropdownItem>
                    <MDBDropdownLink><Link to='/profile'>Timetables</Link></MDBDropdownLink>
                  </MDBDropdownItem>
                  <hr className='dropdown-divider' />
                  <MDBDropdownItem>
                    <MDBDropdownLink><Link to='/profile'>CIS</Link></MDBDropdownLink>
                  </MDBDropdownItem>
                  <hr className='dropdown-divider' />

                  <MDBDropdownItem>
                    <MDBDropdownLink><Link to='/profile'>FST</Link></MDBDropdownLink>
                  </MDBDropdownItem>
                  <hr className='dropdown-divider' />
                  <MDBDropdownItem>
                    <MDBDropdownLink><Link to='/profile'>PST</Link></MDBDropdownLink>
                  </MDBDropdownItem>
                  <hr className='dropdown-divider' />
                  <MDBDropdownItem>
                    <MDBDropdownLink><Link to='/profile'>NR</Link></MDBDropdownLink>
                  </MDBDropdownItem>
                  <hr className='dropdown-divider' />
                  <MDBDropdownItem>
                    <MDBDropdownLink><Link to='/profile'>SPORTS</Link></MDBDropdownLink>
                  </MDBDropdownItem>
                  {/* <MDBDropdownItem>
                    <MDBDropdownLink>Something else here</MDBDropdownLink>
                  </MDBDropdownItem> */}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link style={{ paddingInline: '20px'}}>
                <MDBIcon fas icon='bell fa-lg' style={{ color:'white'}}/>
                <span className="badge rounded-pill badge-notification bg-danger">12</span>
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to='/chats' style={{ paddingInline: '20px'}}>
                <MDBIcon fas icon='comments fa-lg' style={{ color:'white', }}/>
                <span className="badge rounded-pill badge-notification bg-danger">12</span>
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem style={{marginTop:'-10px'}}>
              <MDBDropdown style={{paddingInline: '20px', }}>
                <MDBDropdownToggle tag='a' className='nav-link' style={{marginRight:'7px', color:'white'}}>
                  <img src="../assets/images/profile-picture-girl-3.jpeg" style={{height:'30px', width:'30px', borderRadius:'15px'}} />
                </MDBDropdownToggle>
                <MDBDropdownMenu dark>
                  <MDBDropdownItem>
                    <Link to='/profile'><MDBDropdownLink>My Profile</MDBDropdownLink></Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Logout</MDBDropdownLink>
                  </MDBDropdownItem>
                  {/* <MDBDropdownItem>
                    <MDBDropdownLink>Something else here</MDBDropdownLink>
                  </MDBDropdownItem> */}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            {/* <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem> */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}