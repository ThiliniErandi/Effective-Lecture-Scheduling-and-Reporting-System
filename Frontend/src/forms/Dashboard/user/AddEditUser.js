import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { MDBBtn, MDBInput, MDBValidation } from 'mdb-react-ui-kit';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../../../components/Navbar';

const initialState = {
    user_name: '',
    password: '',
    email: '',
    user_type: ''
}

const AddEditUser = () => {

    const [formValue, setFormValue] = useState(initialState);
    const [typeErrMsg, setTypeErrorMsg] = useState(null);
    const { user_name, password, user_type, email } = formValue;
    const [editMode, setEditMode] = useState(false);
    const history = useHistory();

    const genarateError = (err) => toast.error(err, {
        position: "top-right"
    })


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user_type) {
            setTypeErrorMsg("Please Select a User Type")
        }
        if (user_name && password && email && user_type) {
            if (!editMode) {
                // const updatedUserData = { ...formValue };
                axios.defaults.withCredentials = true;
                const response = await axios.post("http://localhost:8070/users/add", formValue, {
                    withCredentials: true
                });
                if (response.status === 201) {
                    toast.success("User added successfully");
                } else {
                    if (response) {
                        if (response.errors) {
                            const { email, password } = response.errors;
                            if (email) genarateError(email)
                            else if (password) genarateError(password)
                        }
                    }
                }
            } else {
                const response = await axios
                    .put("http://localhost:8070/users/update/6207c99611e120e162e87354", formValue);
                if (response.status === 201) {
                    toast.success("User updated successfully");
                } else {
                    toast.error("Something went wrong");
                }
            }

            history.push('/users');
            setFormValue({ user_name: "", password: "", email: "", user_type: "" });
        }
    };

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    const options = ['Admin', 'Dean', 'HOD', 'Lecturer', 'Student']

    const onTypeChange = (e) => {
        setTypeErrorMsg(null);
        setFormValue({ ...formValue, user_type: e.target.value });
    };

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            setEditMode(true);
            getSingleUser(id)
        } else {
            setEditMode(false);
            setFormValue({ ...initialState });
        }
    }, [id]);

    const getSingleUser = async (id) => {
        const singleUser = await axios.get(`http://localhost:8070/users/${id}`)
        if (singleUser.status === 200) {
            setFormValue({ ...singleUser.data });
            console.log(singleUser);
        } else {
            toast.error("Something went wrong");
        }
    }

    // const onUploadImage = (file) => {
    //     console.log("file", file);
    //     const formData = new FormData();
    //     formData.append("file", file);
    //     formData.append("upload_preset", "")
    //     axios
    //         .post("http://localhost:8070/notices/image/upload", formData)
    //         .then((res) => {
    //            toast.info("Image uploaded successfully");
    //            setFormValue({ ...formValue }); 
    //     })
    //         .catch((err)=> {
    //             toast.err("SOmething went wrong");
    //         });

    // };

    // const {id} = useParams();

    // useEffect(() => {

    // })

    //   


    return (<>
        <><Navbar /><MDBValidation className='row '
            style={{ margin: '50px', marginLeft: '400px', width: '800px' }}
            noValidate onSubmit={handleSubmit}
        >
            <h3 style={{ textAlign: 'center', paddingBottom: '10px', fontFamily: 'Poppins' }}>
                {editMode ? "Update User" : "Add User"}
            </h3>

            <div style={{ margin: 'auto', padding: "15px", maxWidth: "400px", alignContent: "center" }}>

                {/* <MDBInput 
                    type='file'
                    onChange={(e) => onUploadImage(e.target.files)}
                    required validation='Please provide a description'
                    invalid />

                <br /> */}

                {/* 
                <MDBInput 
                    value={userId || ""}
                    name="userId"
                    label='UserId'
                    type="text"
                    onChange={onInputChange}
                    required validation='Please provide a valid userID'
                    invalid /> */}

                <br />


                <MDBInput
                    value={user_name || ""}
                    name="user_name"
                    label='Username'
                    type="text"
                    onChange={onInputChange}
                    required validation='Please provide a valid username'
                    invalid />

                <br />

                <MDBInput
                    value={password || ""}
                    name="password"
                    label='Password'
                    type="password"
                    onChange={onInputChange}
                    required validation='Please provide a strong password'
                    invalid />

                <br />

                <MDBInput
                    value={email || ""}
                    name="email"
                    label='Email'
                    type="email"
                    onChange={onInputChange}
                    required validation='Please provide a valid email'
                    invalid />

                <br />

                <select
                    style={{ fontSize: '14px', width: '100%', borderRadius: '4px', height: '35px', borderColor: '#83ccc5' }}
                    onChange={onTypeChange}
                    value={user_type} >
                    <option >Please Select User Type</option>
                    {options.map((option, index) => (
                        <option value={option || ""} key={index}>
                            {option}
                        </option>
                    ))}
                </select>
                {typeErrMsg && (
                    <div
                        className="typeErrMsg"
                        style={{ color: '#DC143C', textAlign: 'left', fontSize: '14px' }}>
                        {typeErrMsg}
                    </div>
                )}

                <br />

                <MDBBtn className='formBtn'
                    type='submit'
                    style={{ marginLeft: '50px', paddingInline: '40px', fontSize: '15PX', marginTop: '30px', marginRight: '20px' }}
                >{editMode ? "Update" : "Add"}
                </MDBBtn>
                <Link to='/users'>
                    <MDBBtn color='dark'
                        style={{ paddingInline: '40px', fontSize: '15PX', marginTop: '20px' }}
                    >Go Back
                    </MDBBtn>
                </Link>
            </div>
        </MDBValidation></>
        <ToastContainer />
    </>
    )
}

export default AddEditUser;
