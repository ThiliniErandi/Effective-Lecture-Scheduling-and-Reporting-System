import { Container, Col, Row } from "react-bootstrap";

export default function Footer() {
    return (
        <div className = "font-small"
             style = {{ color: 'white', position:'relative', marginTop:'100px'  } } >
            <Container fluid className = "text-center text-md-left"
                       style = {{ backgroundColor: '#3B3B3B', paddingTop: '40px' } } >
                <Row className = "w-100"
                     style = {{ paddingLeft: '20px', height: '250px', fontFamily: 'Poppins' } } >
                    <Col md = "6" >
                        <h5 className = "title" > Footer Content </h5> 
                        <p >Here you can use rows and columns here to organize your footer content. </p> 
                    </Col> 
                    <Col md = "3" >
                        <h5 className = "title" > Links </h5> 
                        <ul >
                            <li className = "list-unstyled" >
                                <a href = "#!" > Link 1 </a> 
                            </li> 
                            <li className = "list-unstyled" >
                                <a href = "#!" > Link 2 </a> 
                            </li> 
                            <li className = "list-unstyled" >
                                <a href = "#!" > Link 3 </a> 
                            </li> 
                            <li className = "list-unstyled" >
                                <a href = "#!" > Link 4 </a> 
                            </li> 
                        </ul> 
                    </Col> 
                    <Col md = "3" >
                        <h5 className = "title" > Links </h5> 
                        <ul >
                            <li className = "list-unstyled" >
                                <a href = "#!" > Link 1 </a> 
                            </li> 
                            <li className = "list-unstyled" >
                                <a href = "#!" > Link 2 </a> 
                            </li> 
                            <li className = "list-unstyled" >
                                <a href = "#!" > Link 3 </a> 
                            </li> 
                            <li className = "list-unstyled" >
                                <a href = "#!" > Link 4 </a> 
                            </li> 
                        </ul> 
                    </Col> 
                </Row> 
                <Row className = "footer-copyright text-center y-4"
                     style = {{ backgroundColor: ' #162AE9', width: '100vw', fontFamily: 'Montserrat' } } >
                    <p style = {{ padding: '5px', fontSize: '15px', color: 'black' } } >
                        &copy; { new Date().getFullYear() }Copyright:
                        <a href = "https://www.mdbootstrap.com"
                        style = {{ textDecoration: 'none', fontWeight: '500' } } > Name.com </a> 
                    </p> 
                </Row> 
            </Container> 
        </div>
    );
}