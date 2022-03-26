import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { MDBRow, MDBCol, MDBContainer, MDBTypography, MDBBtn } from 'mdb-react-ui-kit';
import Notice from '../../components/NoticeBoard/Notice';
import { Link } from 'react-router-dom';

const depH1 = {
    textAlign: 'center',
    marginTop: '70px',
    fontFamily: 'Montserrat',
    marginBottom: '0px',
}

const NoticeHome = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        loadNoticesData();
    }, [])

    const loadNoticesData = async() => {
        const response = await axios.get("http://localhost:8070/notices/view");
        if (response.status === 200) {
            setData(response.data)
        } else {
            toast.error("Something went wrong");
        }
    };

    console.log('data', data);

    const handleDelete = async(id) => {
        if (window.confirm("Are you sure that you wanted to delete this notice?")) {
            const response = await axios.delete(`http://localhost:8070/notices/delete/${id}`);
            if (response.status === 200) {
                toast.success("Notice deleted successfully");
                loadNoticesData();
            } else {
                toast.error("Something went wrong");
            }
        }
    };


    const excerpt = (str) => {
        if (str.length > 50) {
            str = str.substring(0, 50) + " ... ";
        }
        return str;
    };

    return ( <> { /* <Navbar/> */ } 
        <h1 style = { depH1 } > NOTICE BOARD </h1> 
        <Link to="/addEditNotice">
                    <MDBBtn color='success'
                        style={{ paddingInline: '40px', fontSize: '15PX', marginTop: '20px', marginLeft:'1100px' }}
                        >Create Notice
                    </MDBBtn>
                </Link>
        <MDBRow style = {{ paddingLeft: '75px', paddingRight: '75px',  }} > {
            data.length === 0 && ( 
                <MDBTypography className = 'text-center mb-0'
                    tag = 'h2' >
                    No Notice Found 
                </MDBTypography>
            )} 
            <MDBCol>
                <MDBContainer >
                    <MDBRow style = {{ width: '1350px' }}> 
                    {
                        data && data.map((item, index) => ( 
                            <Notice key = { index } {...item }
                            excerpt = { excerpt }
                            handleDelete = { handleDelete }
                            />
                        ))
                    } 
                    </MDBRow>  
                </MDBContainer>  
            </MDBCol>  
        </MDBRow>  
        </>
    );
};

export default NoticeHome;