import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { MDBBtn, MDBInput, MDBValidation } from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from '../../../components/Navbar';

const initialState = {
    lecturer_id: '',
    name: '',
    email: '',
    course_id : '',
    designation: '',    
    user_id: ''
}

const AddEditLecturer = () => {

    const [formValue, setFormValue] = useState(initialState);
    // const [ typeErrMsg, setTypeErrorMsg ] = useState(null);
    const { lecturer_id, name, email, course_id, designation, user_id } = formValue;
    const [editMode, setEditMode] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if(!user_type) {
        //     setTypeErrorMsg("Please Select a User Type")
        // }
        if(lecturer_id && name && email && course_id && designation && user_id  ) {
            if(!editMode) {
                // const updatedUserData = { ...formValue };
                const response = await axios.post("http://localhost:8070/lecturers/add", formValue);
                if(response.status === 200 ) {
                    toast.success("Lecturer added successfully");
                    history.push('/lecturers');
                }else{
                    toast.error("Something went wrong");
                }
            }else {
                const response = await axios
                .put(`http://localhost:8070/lecturers/update/${id}`, formValue);
                if(response.status === 200 ) {
                    toast.success("Lecturer updated successfully");
                    history.push('/lecturers');
                }else{
                    toast.error("Something went wrong");
                }
            }
            setFormValue({ lecturer_id: "", designation: "", name: "", email: "", course_id: "",  user_id: ""});
        }
    };

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    // const options = ['Admin', 'Dean', 'HOD', 'Lecturer', 'Student']

    // const onTypeChange = (e) => {
    //     setTypeErrorMsg(null);
    //     setFormValue({ ...formValue, user_type: e.target.value});
    // };

    const {id} = useParams();

    useEffect(() => {
        if(id) {
            setEditMode(true);
            getSingleLecturer(id)
        }else {
            setEditMode(false);
            setFormValue({ ...initialState});
        }
    }, [id]);

    const getSingleLecturer = async (id) => {
        const singleLecturer = await axios.post(`http://localhost:8070/lecturers/get/${id}`)
        if(singleLecturer.status === 200) {
            setFormValue({ ...singleLecturer.data.lecturer});
        }else {
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


    return ( 
        <><Navbar />
        <MDBValidation className='row '
            style={{ margin: '50px', marginLeft: '400px', width:'800px'}}
            noValidate onSubmit={handleSubmit}
        >
            <h3 style={{ textAlign: 'center', paddingBottom: '10px', fontFamily: 'Poppins' }}>
                { editMode ? "Update Lecturer" : "Add Lecturer"}
            </h3>

            <div style={{ margin: 'auto', padding: "15px", maxWidth: "400px", alignContent: "center" }}>

              {/* <MDBInput 
                    type='file'
                    onChange={(e) => onUploadImage(e.target.files)}
                    required validation='Please provide a description'
                    invalid />

                <br /> */}

                <MDBInput 
                    value={lecturer_id || ""}
                    name="lecturer_id"
                    label='Lecturer Id'
                    type="text"
                    onChange={onInputChange}
                    required validation='Please provide a valid Lecturer_ID'
                    invalid />

                <br />

                {/* change to a selection */}
                <MDBInput 
                    value={designation || ""}
                    name="designation"
                    label='Designation'
                    type="text"
                    onChange={onInputChange}
                    required validation='Please provide a valid Designation'
                    invalid />

                <br />

                <MDBInput 
                    value={name || ""}
                    name="name"
                    label='Name'
                    type="text"
                    onChange={onInputChange}
                    required validation='Please provide a valid Name'
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

                {/* change to a selection */}
                <MDBInput 
                    value={course_id || ""}
                    name="course_id"
                    label='Course Id'
                    type="text"
                    onChange={onInputChange}
                    required validation='Please provide a valid Course_ID'
                    invalid />

                <br />

                <MDBInput 
                    value={user_id || ""}
                    name="user_id"
                    label='User Id'
                    type="text"
                    onChange={onInputChange}
                    required validation='Please provide a valid User_ID'
                    invalid />

                <br />

                {/* <select 
                    style={{fontSize:'14px', width:'100%', borderRadius:'4px', height:'35px', borderColor:'#83ccc5' }} 
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
                        style={{color:'#DC143C', textAlign:'left',fontSize: '14px'}}>
                        {typeErrMsg}
                    </div>
                )}
               
                <br /> */}

                <MDBBtn className='formBtn'
                    type='submit'
                    style={{ marginLeft: '50px', paddingInline: '30px', fontSize: '15PX', marginTop: '30px', marginRight:'20px'}}
                >{ editMode ? "Update" : "Add"}
                </MDBBtn>
                <Link to='/lecturers'>
                    <MDBBtn color='dark'
                        style={{ paddingInline: '30px', fontSize: '15PX', marginTop: '20px' }}
                        >Go Back
                    </MDBBtn>
                </Link>
            </div>
        </MDBValidation></>
    )
}

export default AddEditLecturer;
