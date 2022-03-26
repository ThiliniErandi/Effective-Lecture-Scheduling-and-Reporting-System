import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MDBBtn, MDBInput, MDBValidation } from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from '../../components/Navbar';

const initialState = {
    title: '',
    description: '',
    // checkbox: '',
    // imageUrl: ''
}

// const stuBatches = [
//     { key:'1', value: 'First'},
//     { key:'2', value: 'Second'},
//     { key:'3', value: 'Third'},
//     { key:'4', value: 'Fourth'}
// ]

const AddEditNotice = () => {

    const [formValue, setFormValue] = useState(initialState);
    // const [ checkboxErrMsg, setcheckboxErrorMsg ] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const { title, description } = formValue;

    // const getDate = () => {
    //     let today = new Date();
    //     let dd = String(today.getDate()).padStart(2, "0");
    //     let mm =  String(today.getMonth()).padStart(2, "0");
    //     let yyyy = today.getFullYear();

    //     today = dd + "/" + mm + "/" + yyyy;
    //     return today; 
    // };  

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const imageValidation = !editMode ? imageUrl : true;
        if(title && description ) {
             // const currentDate = getDate();
            if(!editMode) {
                // const updatedNoticeData = { ...formValue, date: currentDate };
                const response = await axios
                .post("http://localhost:8070/notices/add" );
                if(response.status === 201 ) {
                    toast.success("Notice added successfully");
                }else{
                    toast.error("Something went wrong");
                }
            } else {
                const response = await axios
                .put(`http://localhost:8070/notices/update/${id}`, formValue);
                if(response.status === 201 ) {
                    toast.success("Notice updated successfully");
                }else{
                    toast.error("Something went wrong");
                }
            }
            setFormValue({ title: "", description: "" });
            window.location = '/notices';
        }
    };

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

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

    const {id} = useParams();

    useEffect(() => {
        if(id) {
            setEditMode(true);
            getSingleNotice(id)
        }else {
            setEditMode(false);
            setFormValue({ ...initialState});
        }
    }, [id]);

    const getSingleNotice = async (id) => {
        const singleNotice = await axios.get(`http://localhost:8070/notices/${id}`)
        if(singleNotice.status === 200) {
            setFormValue({ ...singleNotice.data});
        }else {
            toast.error("Something went wrong");
        }
    }


    return ( 
        <>
        <Navbar />
        <MDBValidation 
            className='row '
            style={{ margin: '50px', marginLeft: '400px', width:'800px'}}
            noValidate onSubmit={handleSubmit}>

            <h3 
                style={{ textAlign: 'center', paddingBottom: '10px', fontFamily: 'Poppins' }}>
                { editMode ? "Update Notice" : "Add Notice"}
            </h3>

            <div style={{ margin: 'auto', padding: "15px", maxWidth: "400px", alignContent: "center" }}>

                {
                    /* <MDBInput
                                        label='Notice_Id'
                                        id="Notice_id"
                                        name="id"
                                        type="text"
                                        style={{ display:'block', paddingRight:'333px', marginBottom:'20px', paddingBottom:'8px' }}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.id}
                                        disabled
                                    /> */
                }

                <MDBInput 
                    value={title || ""}
                    name="title"
                    label='Title'
                    type="text"
                    onChange={onInputChange}
                    required validation='Please provide a title'
                    invalid />

                <br />

                <MDBInput 
                    value={description || ""}
                    name="description"
                    label='Description'
                    type="text"
                    textarea rows={6}
                    onChange={onInputChange}
                    required validation='Please provide a description'
                    invalid />

                <br />

                {/* { !editMode && (
                    <>
                     <MDBInput 
                        type='file'
                        onChange={(e) => onUploadImage(e.target.files)}
                        required validation='Please provide a description'
                        invalid />
                    </>
                )}
                
                <br /> */}

                {/* <div style={{display: 'inline'}}>

                    <p style={{display: 'inline', marginRight:'18px'}}>Student Batch/Baches:</p>

                    <input type="checkbox"
                        name="stu_batch"
                        value="First"
                        style={{display: 'inline', marginRight:'5px'}}
                        onclick="return ValidatePetSelection();" /> 1 

                    <input type="checkbox"
                        name="stu_batch"
                        value="Second"
                        style={{display: 'inline', marginRight:'5px', marginLeft: '30px'}}
                        onclick="return ValidatePetSelection();" /> 2 

                    <input type="checkbox"
                        name="stu_batch"
                        value="Third"
                        style={{display: 'inline', marginRight:'5px', marginLeft: '30px'}}
                        onclick="return ValidatePetSelection();" /> 3 

                    <input type="checkbox"
                        name="stu_batch"
                        value="Fourth"
                        style={{display: 'inline', marginRight:'5px', marginLeft: '30px'}}
                        onclick="return ValidatePetSelection();" /> 4
                </div> */}
               

                <br />
                <br />

                <MDBBtn className='formBtn'
                    type='submit'
                    style={{ marginLeft: '50px', paddingInline: '40px', fontSize: '15PX', marginTop: '30px', marginRight:'20px'}}
                >{ editMode ? "Update" : "Add"}
                </MDBBtn>
                <Link to="/home">
                    <MDBBtn color='dark'
                        style={{ paddingInline: '40px', fontSize: '15PX', marginTop: '20px' }}
                        >Go Back
                    </MDBBtn>
                </Link>
            </div>
        </MDBValidation></>
    )
}

export default AddEditNotice;
