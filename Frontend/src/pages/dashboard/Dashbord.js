import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import Navbar from '../../components/Navbar';
import { Row } from 'react-bootstrap';
import './dashboard.css';
import axios from 'axios';
import '../../custom.css';
import TimetableComponent from '../../components/Dashboard/timetable/timetableComponent';
import { MDBRow, MDBTypography, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        loadTimetablesData();
    }, [])
    
    const loadTimetablesData = async() => {
        const response = await axios.get("http://localhost:8070/timetables/view");
        if (response.status === 200) {
            setData(response.data)
        } else {
            window.error("Something went wrong");
        }
    };

    return ( 
        <div className='dashboard'  style={{overflow:'hidden'}}>

            <Navbar/>

            <Sidebar/>

            <div className='dashboard-section w-75' style={{marginLeft:'270px'}}>
                    
                <h2 style={{marginTop:'30px', marginBottom:'0px', textAlign:'center', color:'black', }}> Timetables </h2> 

                <Link to="/addEditNotice">
                        <MDBBtn color='success'
                            style={{ paddingInline: '40px', fontSize: '15PX', marginTop: '10px', marginLeft:'950px' }}
                            >Add Timetable
                        </MDBBtn>
                    </Link>

                        <MDBRow style = {{ width:'1300px'  }} > {
                            data.length === 0 && ( 
                                <MDBTypography className = 'text-center mb-0'
                                    tag = 'h2' >
                                    Timetables Not Found 
                                </MDBTypography>
                            )} 
                            {/* <MDBCol>
                                <MDBContainer > */}
                                    <MDBRow style = {{ width: '1500px' }}> 
                                    {
                                        data && data.map((item, index) => ( 
                                            <TimetableComponent key = { index } {...item }/>
                                        ))
                                    } 
                                    </MDBRow>  
                                {/* </MDBContainer>  
                            </MDBCol>   */}
                        </MDBRow>  

                </div>
                <Row className = "footer-dashboard text-center y-4" >
                    <p style = {{ padding: '5px', fontSize: '15px', color: 'black' } } >
                        &copy; { new Date().getFullYear() }Copyright:
                        <a href = "https://www.mdbootstrap.com"
                        style = {{ textDecoration: 'none', fontWeight: '500' } } > APP.SUSL.com </a> 
                    </p> 
                </Row> 
        </div>
        
     );
}
 
export default Dashboard;
