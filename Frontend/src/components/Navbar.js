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
  MDBDropdownLink,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCardText,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  const [showNavRight, setShowNavRight] = useState(false);
  const [scrollableModal, setScrollableModal] = useState(false);

  return (
    <MDBNavbar expand='lg' style={{backgroundColor: '#1A4797', width:'100%'}}>
      <MDBContainer fluid style={{height:'40px', paddingTop:'8px'}}>
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
        <img src='../assets/images/logo.png' width='250px' height='30px' alt='logo'/>
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
            <MDBNavbarItem style={{marginTop:'-10px'}} >
            <MDBDropdown style={{paddingInline: '20px', }} onClick={() => setScrollableModal(!scrollableModal)}>
                <MDBDropdownToggle tag='a' className='nav-link' style={{marginRight:'7px', color:'#1A4797'}}>
                  <MDBIcon fas icon='bell fa-lg' style={{ color:'white'}}/>
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
              <Link to='/chats' style={{ paddingInline: '20px'}}>
                <MDBIcon fas icon='comments fa-lg' style={{ color:'white', }}/>
                <span className="badge rounded-pill badge-notification bg-danger">12</span>
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem style={{marginTop:'-10px'}}>
              <MDBDropdown style={{paddingInline: '20px', }}>
                <MDBDropdownToggle tag='a' className='nav-link' style={{marginRight:'7px', color:'white'}}>
                  <img src="../assets/images/profile-picture-girl-3.jpeg" style={{height:'30px', width:'30px', borderRadius:'15px'}} alt='pro-pic'/>
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






{/* <MDBIcon fas icon='bell fa-lg' style={{ color:'white', cursor: 'pointer',  }} onClick={() => setScrollableModal(!scrollableModal)}/>
<span className="badge rounded-pill badge-notification bg-danger">12</span>
<MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
<MDBModalDialog scrollable>
  <MDBModalContent>
    <MDBModalHeader>
      <MDBModalTitle>Modal title</MDBModalTitle>
      <MDBBtn
        className='btn-close'
        color='none'
        onClick={() => setScrollableModal(!scrollableModal)}
      ></MDBBtn>
  </MDBModalHeader>
    <MDBModalBody>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
        augue laoreet rutrum faucibus dolor auctor.
      </p>
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
        Close
      </MDBBtn>
      <MDBBtn>Save changes</MDBBtn>
    </MDBModalFooter>
  </MDBModalContent>
</MDBModalDialog>
</MDBModal> */}