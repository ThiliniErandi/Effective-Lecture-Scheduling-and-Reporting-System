import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBListGroup, MDBListGroupItem  } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faLinkedin  } from "@fortawesome/free-brands-svg-icons";

const depH1 = {
    textAlign:'center', 
    marginTop:'70px', 
    fontFamily:'Montserrat'
}

const socialIcon = {
    padding: '5px', 
    fontSize: '35px',
    cursor: 'pointer'
}

function Depcarousel() {
  return (
    <section className="home-content" id='timetables'>

      <h1 style={depH1}>TIMETABLES</h1>

        <Container>
            <Row className=" w-100">
              <Col>
                <MDBCard style={{ maxWidth: '22rem'}}>
                  <MDBCardImage src='../assets/images/home/cis.jpeg' position='top' alt='...' style={{height:'150px'}}/>
                  <MDBCardBody>
                    <MDBCardTitle>Computing and Information Systems</MDBCardTitle>
                    <MDBCardText>
                        <FontAwesomeIcon 
                            className='social-icon'
                            style={socialIcon}
                            icon={ faTwitter } />
                        <FontAwesomeIcon 
                            className='social-icon'
                            style={socialIcon}
                            icon={ faFacebook } />
                        <FontAwesomeIcon 
                            className='social-icon'
                            style={socialIcon}
                            icon={ faLinkedin } />
                      </MDBCardText>
                      <MDBListGroup style={{ minWidth: '10rem' }}>
                        <MDBListGroupItem tag='a' action active aria-current='true' color='warning'>
                          CIS Timetables
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          First Year
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Second Year
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='./timetable' action>
                          Third Year
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Fourth Year
                        </MDBListGroupItem>
                      </MDBListGroup>
                  </MDBCardBody>
                </MDBCard>
              </Col>
              <Col>
                <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBCardImage src='../assets/images/home/fd.jpg' position='top' alt='...' style={{height:'150px'}} />
                    <MDBCardBody>
                      <MDBCardTitle>Food Science and Technology</MDBCardTitle>
                      <MDBCardText  style={{height:'59px', paddingTop: '20px'}}>
                        <FontAwesomeIcon 
                            className='social-icon'
                            style={socialIcon}
                            icon={ faTwitter } />
                        <FontAwesomeIcon 
                            className='social-icon'
                            style={socialIcon}
                            icon={ faFacebook } />
                        <FontAwesomeIcon 
                            className='social-icon'
                            style={socialIcon}
                            icon={ faLinkedin } />
                      </MDBCardText>
                      <MDBListGroup style={{ minWidth: '10rem' }}>
                        <MDBListGroupItem tag='a' action active aria-current='true' color='warning'>
                          FST Timetables
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          First Year
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Second Year
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Third Year
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Fourth Year
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCardBody>
                </MDBCard>
              </Col>
              <Col>
                <MDBCard style={{ maxWidth: '22rem' }}>
                  <MDBCardImage src='../assets/images/home/pst.jpeg' position='top' alt='...' style={{height:'150px'}}/>
                  <MDBCardBody>
                    <MDBCardTitle>Physical Science and Technology</MDBCardTitle>
                    <MDBCardText  style={{height:'59px', paddingTop: '20px'}}>
                        <FontAwesomeIcon 
                            className='social-icon'
                            style={socialIcon}
                            icon={ faTwitter } />
                        <FontAwesomeIcon 
                            className='social-icon'
                            style={socialIcon}
                            icon={ faFacebook } />
                        <FontAwesomeIcon 
                            className='social-icon'
                            style={socialIcon}
                            icon={ faLinkedin } />
                    </MDBCardText>
                    <MDBListGroup style={{ minWidth: '10rem' }}>
                        <MDBListGroupItem tag='a' action active aria-current='true' color='warning'>
                          PST Timetables
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          First Year
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Second Year
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Third Year
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Fourth Year
                        </MDBListGroupItem>
                      </MDBListGroup>
                  </MDBCardBody>
                </MDBCard>
              </Col>
              <Col>
                <MDBCard style={{ maxWidth: '22rem' }}>
                  <MDBCardImage src='../assets/images/home/nr.jpeg' position='top' alt='...' style={{height:'150px'}}/>
                  <MDBCardBody>
                    <MDBCardTitle>Natural Resources</MDBCardTitle>
                    <MDBCardText  style={{height:'82px', paddingTop: '43px'}}>
                        <FontAwesomeIcon 
                            className='social-icon'
                            style={socialIcon}
                            icon={ faTwitter } />
                        <FontAwesomeIcon 
                            className='social-icon'
                            style={socialIcon}
                            icon={ faFacebook } />
                        <FontAwesomeIcon 
                            className='social-icon'
                            style={socialIcon}
                            icon={ faLinkedin } />
                    </MDBCardText>
                    <MDBListGroup style={{ minWidth: '10rem' }}>
                        <MDBListGroupItem tag='a' action active aria-current='true' color='warning'>
                          NR Timetables
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          First Year
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Second Year
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Third Year
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Fourth Year
                        </MDBListGroupItem>
                      </MDBListGroup>
                  </MDBCardBody>
                </MDBCard>
              </Col>
              <Col>
                <MDBCard style={{ maxWidth: '22rem' }}>
                  <MDBCardImage src='../assets/images/home/sports2.jpeg' position='top' alt='...' style={{height:'150px'}}/>
                  <MDBCardBody>
                    <MDBCardTitle>Sports Science and Technology</MDBCardTitle>
                    <MDBCardText  style={{height:'55px', paddingTop: '20px'}}>
                        <FontAwesomeIcon 
                            className='social-icon'
                            style={socialIcon}
                            icon={ faTwitter } />
                        <FontAwesomeIcon 
                            className='social-icon'
                            style={socialIcon}
                            icon={ faFacebook } />
                        <FontAwesomeIcon 
                            className='social-icon'
                            style={socialIcon}
                            icon={ faLinkedin } />
                    </MDBCardText>
                    <MDBListGroup style={{ minWidth: '10rem' }}>
                        <MDBListGroupItem tag='a' action active aria-current='true' color='warning'>
                          SPORTS Timetables
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          First Year
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Second Year
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Third Year
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Fourth Year
                        </MDBListGroupItem>
                      </MDBListGroup>
                  </MDBCardBody>
                </MDBCard>
              </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Depcarousel