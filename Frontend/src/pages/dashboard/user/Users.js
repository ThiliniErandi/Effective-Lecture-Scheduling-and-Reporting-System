import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import {
    MDBContainer,
    MDBBtn,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
} from 'mdb-react-ui-kit';
import User from '../../../components/DashboardComponents/user/User';
import Navbar from '../../../components/Navbar'
import { Link } from 'react-router-dom';
import Sidebar from '../../../components/DashboardComponents/Sidebar';
import { Row } from 'react-bootstrap';
import '../dashboard.css';

const Users = () => {

    // set a state to tell the component it need to wait until the result is fetched from the api
    const [loadingData, setLoadingData] = useState(true);
    const [data, setData] = useState([]);
    // const [id, setId] = useState([]);

    useEffect(() => {
        async function getData() {
            await axios
                .get("http://localhost:8070/users/view")
                .then((response) => {
                    // check if the data is populated
                    console.log(response.data);
                    setData(response.data);
                    // tell it that I had the result
                    setLoadingData(false);
                });
        }
        if (loadingData) {
            // axios call, if the result is not ready
            getData();
        }
    }, []);

    const handleDelete = async(id) => {
        if (window.confirm("Are you sure that you wanted to delete this user?")) {
            const response = await axios.delete(`http://localhost:8070/users/delete/${id}`);
            console.log(response);
            if (response.status === 200) {
                toast.success("User deleted successfully");
                loadingData();
            } else {
                toast.error("Something went wrong");
            }
        }
    };

    return ( 
        <div className='dashboard'>
            <Navbar/>
            <Sidebar/>
            <div className="content w-75" style={{marginLeft:'300px'}} >
        { /* check if the state is loading otherwise get a blank page because the data is an empty array at the moment of mounting */ } {
            loadingData ? ( 
                <p > Loading Please wait... </p>
            ) : ( 
            <MDBContainer style = {{ marginTop: '90px' } } >

                <Link to = "/dashboard" >
                    <MDBBtn color = "primary"
                            style = {{ marginBottom: '30px', float: 'left', paddingInline: '30px' }} >
                     Back</MDBBtn>
                </Link >

                <Link to = "/addEditUser" >
                    <MDBBtn color = "success"
                    style = {{ marginBottom: '30px', float: 'right', paddingInline: '30px' } } >
                    Add </MDBBtn>
                    </Link >

                <MDBTable hover bordered striped style = {{ marginTop: '5px' } } >
                    <caption > List of users </caption> 
                    <MDBTableHead style = {{ backgroundColor: "#FDDA0D" } } >
                        <tr > 
                            { /* <th>#</th> */ } 
                        <th > Name </th> 
                        <th > Password </th> 
                        <th > Type </th> 
                        <th > Email </th> 
                        <th > Actions </th> 
                        </tr> 
                    </MDBTableHead> 
                    <MDBTableBody>
                        {
                            data && data.map((item, index) => ( <
                                User key = { index } {...item }
                                handleDelete = { handleDelete }
                                />
                            ))
                        }
                    </MDBTableBody> 
                </MDBTable> 
            </MDBContainer>
            )
        } 
        </div>
        <Row className = "footer-dashboard text-center y-4" >
                <p style = {{ padding: '5px', fontSize: '15px', color: 'black' } } >
                    &copy; { new Date().getFullYear() }Copyright:
                    <a href = "https://www.mdbootstrap.com"
                    style = {{ textDecoration: 'none', fontWeight: '500' } } > Name.com </a> 
                </p> 
        </Row> 
        </div>

    );
};

export default Users;