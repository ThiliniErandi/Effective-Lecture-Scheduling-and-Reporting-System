import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <div className = "font-small "
             style = {{ color: 'white', position:'relative', marginTop:'100px'  } } >
            <Container fluid className = "text-center text-md-left "
                       style = {{ backgroundColor: '#3B3B3B', paddingTop: '40px' } } >
                <Row className = "w-100"
                     style = {{ paddingLeft: '20px', height: '250px', fontFamily: 'Verdana',  } } >
                    <Col md = "6" style={{ textAlign: 'left'}} >
                        <h5 className = "title" > CONTACt INFO <hr style={{color:'yellow'}} /></h5> 
                        <p style={{paddingLeft:'30px'}}><FontAwesomeIcon icon={ faHome } style={{paddingRight:'5px', fontSize:'20px'}}/>
                            Sabaragamuwa University of Sri Lanka,</p>
                        <p style={{paddingLeft:'30px'}}> P.O. Box 02, Belihuloya, 70140, Sri Lanka.</p>
                        <p style={{paddingLeft:'30px'}}><FontAwesomeIcon icon={ faPhone } style={{paddingRight:'5px', fontSize:'20px'}}/>
                            +94-45-2280014 / +94-45-2280087</p>
                        <a href="info@sab.ac.lk" style={{color:'#00006f', paddingLeft:'30px'}}>
                            <FontAwesomeIcon icon={ faEnvelope } style={{paddingRight:'5px', fontSize:'20px', color:'white'}}/>
                            info@sab.ac.lk 
                        </a> 
                    </Col> 
                    <Col md = "3" style={{textAlign:'left', lineHeight:'30px'}}>
                        <h5 className = "title" > DEPARTMENTS <hr style={{color:'yellow'}} /></h5> 
                        <ul >
                            <li className = "list-unstyled" >
                                <a href = "#!" > Computing & Information Systems </a> 
                            </li> 
                            <li className = "list-unstyled" >
                                <a href = "#!" > Food Science & Technology </a> 
                            </li> 
                            <li className = "list-unstyled" >
                                <a href = "#!" > Physical Science & Technology  </a> 
                            </li> 
                            <li className = "list-unstyled" >
                                <a href = "#!" > Environmental Science & Natural Resources </a> 
                            </li> 
                            <li className = "list-unstyled" >
                                <a href = "#!" > Sports Science & Physical Education</a> 
                            </li> 
                        </ul> 
                    </Col> 
                    <Col md = "3" style={{textAlign:'left',lineHeight:'30px'}} >
                        <h5 className = "title" > EXTERNAL LINKS <hr style={{color:'yellow'}} /></h5> 
                        <ul >
                            <li className = "list-unstyled" >
                                <a href = "https://lms.appsc.sab.ac.lk/" > LMS@Faculty of Applied Sciences </a> 
                            </li> 
                            <li className = "list-unstyled" >
                                <a href = "https://www.sab.ac.lk/" > Sabaragamuwa University of Sri Lanka </a> 
                            </li> 
                            <li className = "list-unstyled" >
                                <a href = "https://www.ugc.ac.lk/" > University Grants Commission </a> 
                            </li> 
                        </ul> 
                    </Col> 
                </Row> 
                <Row className = "footer-copyright text-center y-4"
                     style = {{ backgroundColor: ' #162AE9', width: '100vw', fontFamily: 'Montserrat' } } >
                    <p style = {{ padding: '5px', fontSize: '15px', color: 'black' } } >
                        &copy; { new Date().getFullYear() }Copyright:
                        <a href = "https://www.mdbootstrap.com"
                        style = {{ textDecoration: 'none', fontWeight: '500' } } > APP.SUSL.com </a> 
                    </p> 
                </Row> 
            </Container> 
        </div>
    );
}