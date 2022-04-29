import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBCardText,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function App() {
    const [showNavRight, setShowNavRight] = useState(false);
    const [scrollableModal, setScrollableModal] = useState(false);
    const [cookies, removeCookie] = useCookies(["jwt"]);

  return (
    <MDBNavbar expand='lg' style={{ backgroundColor: '#2C3333', width: '100%' }}>
      <MDBContainer fluid style={{ height: '40px', paddingTop: '10px' }}>
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
          <ul>
           <MDBNavbarItem active aria-current='page'>
              <Link to='/home' style={{ color:'white', fontFamily:'Poppins',letterSpacing:'1px'}}>
                HOME
              </Link>
            </MDBNavbarItem>
          </ul>
          <ul>
            <MDBNavbarItem>
              <Link to='/dashboard' style={{ color:'white', fontFamily:'Poppins',  letterSpacing:'1px'}}>
                DASHBOARD
              </Link>
            </MDBNavbarItem>
          </ul>
          <ul>
            <MDBNavbarItem>
              <Link to='/report' style={{ color:'white', fontFamily:'Poppins', letterSpacing:'1px'}}>
                REPORTS
              </Link>
            </MDBNavbarItem>
          </ul>
          <ul>
            <MDBNavbarItem>
              <HashLink to='/home/#timetables' style={{ color:'white', fontFamily:'Poppins', letterSpacing:'1px'}}>
                TIMETABLES
              </HashLink>
            </MDBNavbarItem>
          </ul>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem style={{marginTop:'-10px'}} >
            <MDBDropdown style={{paddingInline: '20px', }} onClick={() => setScrollableModal(!scrollableModal)}>
                <MDBDropdownToggle tag='a' className='nav-link' style={{marginRight:'0px', color:'#2C3333'}}>
                  <MDBIcon fas icon='bell fa-lg' style={{ color:'white'}}/>
                  <span className="badge rounded-pill badge-notification bg-danger">8</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu dark show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
                  <MDBDropdownItem>
                  <MDBDropdownLink><Link to='/' style={{fontSize:'18px'}}>Notifications</Link></MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink >
                        <MDBCardText>
                          <MDBIcon fas icon='bullhorn fa-md' style={{ color:'orange', paddingRight:'10px'}}/> 
                            Dr.Perera has posted a new notice <br /> 
                            <span style={{paddingLeft:'25px'}}>1 hour ago</span>
                        </MDBCardText>
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink > 
                        <MDBCardText>
                          <MDBIcon fas icon='comment fa-md' style={{ color:'blue', paddingRight:'10px'}}/>
                            Chloe Gileshas has sent you a message <br />
                            <span style={{paddingLeft:'25px'}}>3 hour ago</span>
                        </MDBCardText>
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink >
                        <MDBCardText>
                          <MDBIcon fas icon='users fa-md' style={{ color:'purple', paddingRight:'10px'}}/>
                            Ms.Alisha Church has cancelled the lecture <br />
                            <span style={{paddingLeft:'25px'}}>4 hour ago</span>
                        </MDBCardText>
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink >
                        <MDBCardText>
                          <MDBIcon fas icon='users fa-md' style={{ color:'purple', paddingRight:'10px'}}/>
                            Mr. Evan Novak has scheduled a lecture <br />
                            <span style={{paddingLeft:'25px'}}>8 hours ago</span>
                        </MDBCardText>
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>
                        <MDBCardText>
                          <MDBIcon fas icon='users fa-md' style={{ color:'purple', paddingRight:'10px'}}/>
                            Ms.Alisha Church has scheduled a lecture <br />
                            <span style={{paddingLeft:'25px'}}>1 day ago</span>
                        </MDBCardText>
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink >
                        <MDBCardText>
                          <MDBIcon fas icon='comment fa-md' style={{ color:'blue', paddingRight:'10px'}}/> 
                            Mr.Leonard Jones has sent you a message <br /> 
                            <span style={{paddingLeft:'25px'}}>1 day 1 hour ago</span>
                        </MDBCardText>
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink >
                        <MDBCardText>
                          <MDBIcon fas icon='bullhorn fa-md' style={{ color:'orange', paddingRight:'10px'}}/> 
                            Dr.Reagan Key has posted a new notice <br /> 
                            <span style={{paddingLeft:'25px'}}>1 day 5 hour ago</span>
                        </MDBCardText>
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink >
                        <MDBCardText>
                          <MDBIcon fas icon='users fa-md' style={{ color:'purple', paddingRight:'10px'}}/> 
                            Prof.Alijah Briggs has scheduled a lecture <br /> 
                            <span style={{paddingLeft:'25px'}}>1 day 15 hour ago</span>
                        </MDBCardText>
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to='/chats' style={{ paddingInline: '15px'}}>
                <MDBIcon fas icon='comments fa-lg' style={{ color:'white' }}/>
                <span className="badge rounded-pill badge-notification bg-danger">7</span>
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem style={{ marginTop: '-10px' }}>
              <MDBDropdown style={{ paddingInline: '20px', }}>
              <MDBDropdownToggle tag='a' className='nav-link' style={{ color:'#2C3333'}}>
                  <img src="../assets/images/profile-picture-girl-3.jpeg" style={{height:'30px', width:'30px', borderRadius:'15px'}} alt='pro-pic'/>
                </MDBDropdownToggle>
                <MDBDropdownMenu dark>
                  <MDBDropdownItem>
                    <Link to='/profile'><MDBDropdownLink>My Profile</MDBDropdownLink></Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem onClick={() => {

                    if (cookies.jwt) {
                      removeCookie("jwt", { path: '/' });
                      window.location = '/';
                    } else {

                    }
                  }}>
                    <MDBDropdownLink>Logout</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
