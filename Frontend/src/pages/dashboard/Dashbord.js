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
import { useCookies } from 'react-cookie';
import verifyUser from '../../helpers/authCheck';
import { ToastContainer, toast } from 'react-toastify';

const Dashboard = () => {

    const [cookies, removeCookie] = useCookies([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        verifyUser("dashboard", cookies, removeCookie);
    }, [cookies, removeCookie])

    useEffect(() => {
        loadTimetablesData();
    }, [])
    
    const loadTimetablesData = async() => {
        const response = await axios.get("http://localhost:8070/timetables/view");
        if (response.status === 200) {
            setData(response.data)
        } else {
            toast.error("Something went wrong");
        }
    };

    const handleDelete = async(id) => {
        if (window.confirm("Are you sure that you wanted to delete this timetable?")) {
            const response = await axios.delete(`http://localhost:8070/timetables/delete/${id}`);
            console.log(response);
            if (response.status === 200) {
                toast.success("Timetable deleted successfully");
                loadTimetablesData();
            } else {
                toast.error("Something went wrong");
            }
        }
    };

    return ( 
        <div className='dashboard'  style={{overflow:'hidden'}}>

            <Navbar/>

            <Sidebar/>

            <div className='dashboard-section w-75' style={{marginLeft:'270px'}}>
                    
                <h2 style={{marginTop:'30px', marginBottom:'0px', textAlign:'center', color:'black', }}> Timetables </h2> 

                <Link to="/AddEditTimetable">
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
                                            <TimetableComponent key = { index } {...item }
                                                handleDelete = { handleDelete }
                                            />
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
