import { useState, useEffect } from 'react';
import { MDBCol, MDBRow, MDBInput, MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import verifyUser from '../../../helpers/authCheck';
import { useCookies } from 'react-cookie';

const Profile = ({ user_name, password, email, user_type, id, new_pwd, confirm_pwd }) => {

    const [cookies, removeCookie] = useCookies([]);

    useEffect(() => {
        verifyUser("home", cookies, removeCookie);
    }, [cookies, removeCookie])

    const [data, setData] = useState([]);
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        async function getData() {
        await axios
            .get(`http://localhost:8070/users/get/${id}`)
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

    console.log('data', data);

    return ( <><Navbar/>
        <MDBContainer >
            <MDBRow className='w-100'>
                <MDBCol md="4">
                    <div style={{marginTop:'80px', marginLeft:'50px'}}>
                        <img className="rounded-circle mb-3" width="165px" height="150px" src="/assets/images/userIcon.png" alt='user-icon'/>
                            <br />
                            <div >
                                <span className="font-weight-bold" style={{marginLeft:'50px'}}>Admin</span><br />
                                <span className="text-black-50" style={{marginLeft:'20px'}}>admin@mail.com</span>
                            </div>
                    </div>
                </MDBCol>
                <MDBCol md="4" className='text-center'>
                        {/* <div className="d-flex justify-content-between align-items-center mb-2"> */}
                    <h4 className="text-center mt-3 mb-5">User Profile</h4>
                    
                    <MDBInput 
                        type="text" 
                        value={ user_name } 
                        label='Username'
                    />
                    <br />

                    <MDBInput 
                        type="text"
                        value={password}
                        label='Password'
                    />
                    <br />

                    <MDBInput 
                        type="text" 
                        value={email} 
                        label='Email'
                    />
                    <br />
                    
                    <MDBInput 
                        type="text" 
                        value={user_type} 
                        label='User Type'
                    />
                    <br />

                    <MDBRow style={{display:'inline-block', textAlign:'center'}}>
                        <Link to='/addEditUser'>
                            <MDBBtn color='primary' type="submit" style={{marginRight: '10px'}}>update</MDBBtn>
                        </Link>
                        <Link to='/home'>
                            <MDBBtn color='warning' type="submit">Go back</MDBBtn>
                        </Link>
                    </MDBRow>
                </MDBCol>
                <MDBCol md="4" className='text-center mt-5'>
                    <h5 className="text-center mt-5 mb-5">Change Password</h5>
                    <MDBInput 
                        type="text" 
                        value={new_pwd} 
                        label='New Password'
                    />
                    <br />
                    
                    <MDBInput 
                        type="text" 
                        value={confirm_pwd} 
                        label='Confirm Password'
                    />
                    <br />

                    <MDBBtn color='primary' type="submit" style={{paddingInline:'40px' }} onClick=''>Save</MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <Footer />
        </>
    );
}
 
export default Profile;
