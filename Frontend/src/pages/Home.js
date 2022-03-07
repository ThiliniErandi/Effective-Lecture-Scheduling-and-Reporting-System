import Header from '../components/home/Header';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faLinkedin  } from "@fortawesome/free-brands-svg-icons";
import Footer from '../components/Footer';

const depH1 = {
    textAlign:'center', 
    marginTop:'70px', 
    fontFamily:'Montserrat'
}

const depRow = {
    marginTop: '50px',
    marginBottom: '10px',
    cursor: 'pointer'
}

const depImg = {
    width:'650px', 
    height:'400px',
}

const depNameCol = {
    marginLeft: '10px'
}

const depNameRow = {
    marginTop: '30px', 
    marginBottom: '20px'
}

const socialIcon = {
    padding: '10px', 
    fontSize: '60px',
    cursor: 'pointer'
}

const Home = () => {
    return (
        <div className="home" style={{overflow:'hidden'}}>
            <section className="header">
                <Header/>
            </section>
      
            <section className="home-content">

                <h1 style={depH1}>DEPARTMENTS</h1>

                <Container className="w-75">
                    <Row style={depRow} className=" w-100">
                        <Col >
                            <img src="../assets/images/home/cis.jpeg" alt="cis" style={depImg}/>
                        </Col>
                         <Col style={depNameCol}>
                            <Row style={depNameRow}>
                                <h2 >Department of Computing and Information Systems</h2>
                            </Row>
                            <Row >
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
                            </Row>
                        </Col>
                    </Row>
                
                    <Row className="w-100" style={depRow}>
                        <Col >
                            <Image src="../assets/images/home/fd.jpg" alt="food" style={depImg} />
                        </Col>
                        <Col style={depNameCol}>
                            <Row style={depNameRow}>
                                <h2 >Department of Food Science and Technology</h2>
                            </Row>
                            <Row >
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
                            </Row>
                        </Col>
                    </Row>
                    <Row className="w-100" style={depRow}>
                        <Col >
                            <img src="../assets/images/home/pst.jpeg" alt="pst"  style={depImg}/>
                        </Col>
                        <Col style={depNameCol}>
                            <Row style={depNameRow}>
                                <h2 >Department of Physical Science and Technology</h2>
                            </Row>
                            <Row >
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
                            </Row>
                        </Col>
                    </Row>
                    <Row className="w-100" style={depRow}>
                        <Col >
                            <img src="../assets/images/home/nr.jpeg" alt="nr"  style={depImg}/>
                        </Col>
                        <Col style={depNameCol}>
                            <Row style={depNameRow}>
                                <h2 >Department of Natural Resources</h2>
                            </Row>
                            <Row >
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
                            </Row>
                        </Col>
                    </Row>
                    <Row className="w-100" style={depRow}>
                        <Col >
                            <img src="../assets/images/home/sports2.jpeg" alt="sports"  style={depImg}/>
                        </Col>
                        <Col style={depNameCol}>
                            <Row style={depNameRow}>
                                <h2 >Department of Sports Science and Technology</h2>
                            </Row>
                            <Row >
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
                            </Row>
                        </Col>
                    </Row>
                     
                </Container>
            </section>
            
            <section className='footer'>
                    <Footer/>
            </section>
      </div>
    );
  }
 
export default Home;
