import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { MDBBtn, MDBInput, MDBValidation } from 'mdb-react-ui-kit';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../../components/Navbar';

const initialState = {
    timetable_id: '',
    name: '',
    batch_id: '',
    lecturer_id: '',
    rep_id : ''
}

const AddEditTimetable = () => {

    const [formValue, setFormValue] = useState(initialState);
    const [typeErrMsg, setTypeErrorMsg] = useState(null);
    const { timetable_id, name, batch_id, lecturer_id, rep_id } = formValue;
    const [editMode, setEditMode] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (timetable_id && name && batch_id && lecturer_id && rep_id) {
            if(!editMode) {
                // const updatedUserData = { ...formValue };
                const response = await axios.post("http://localhost:8070/timetables/add", formValue);
                if(response.status === 200 ) {
                    toast.success("Timetable added successfully");
                    history.push('/dashboard');
                }else{
                    toast.error("Something went wrong");
                }
            }else {
                const response = await axios
                .put(`http://localhost:8070/timetables/update/${id}`, formValue);
                if(response.status === 200 ) {
                    toast.success("Timetable updated successfully");
                }else{
                    toast.error("Something went wrong");
                }
            }
            setFormValue({ timetable_id: "", name: "", batch_id: "", lecturer_id: "", rep_id: "" });
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
                {editMode ? "Update Timetable" : "Add Timetable"}
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
                    value={timetable_id || ""}
                    name="timetable_id"
                    label='Timetable_ID'
                    type="text"
                    onChange={onInputChange}
                    required validation='Please provide a valid timetable_id'
                    invalid />

                <br />

                <MDBInput
                    value={name || ""}
                    name="name"
                    label='Name'
                    type="text"
                    onChange={onInputChange}
                    required validation='Please provide a suitable name'
                    invalid />

                <br />

                <MDBInput
                    value={batch_id || ""}
                    name="batch_id"
                    label='Batch_ID'
                    type="text"
                    onChange={onInputChange}
                    required validation='Please provide a valid batch_id'
                    invalid />

                <br />

                
                <MDBInput
                    value={lecturer_id || ""}
                    name="lecturer_id"
                    label='Lecturer_ID'
                    type="text"
                    onChange={onInputChange}
                    required validation='Please provide a valid lecturer_id'
                    invalid />

                <br />

                
                <MDBInput
                    value={rep_id || ""}
                    name="rep_id"
                    label='Rep_ID'
                    type="text"
                    onChange={onInputChange}
                    required validation='Please provide a valid rep_id'
                    invalid />

                <br />

                {/* <select
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
                )} */}

                <br />

                <MDBBtn className='formBtn'
                    type='submit'
                    style={{ marginLeft: '50px', paddingInline: '40px', fontSize: '15PX', marginTop: '30px', marginRight: '20px' }}
                >{editMode ? "Update" : "Add"}
                </MDBBtn>
                <Link to='/dashboard'>
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

export default AddEditTimetable;
