import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { MDBBtn, MDBInput, MDBValidation } from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from '../../../components/Navbar';

const initialState = {
   course_id: '',
   name: '',
}

const AddEditCourse = () => {

    const [formValue, setFormValue] = useState(initialState);
    const { course_id, name } = formValue;
    const [editMode, setEditMode] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if( course_id && name  ) {
            if(!editMode) {
                // const updatedUserData = { ...formValue };
                const response = await axios.post("http://localhost:8070/courses/add", formValue);
                if(response.status === 200 ) {
                    toast.success("Course added successfully");
                    history.push('/courses');
                }else{
                    toast.error("Something went wrong");
                }
            }else {
                const response = await axios
                .put(`http://localhost:8070/courses/update/${id}`, formValue);
                if(response.status === 200 ) {
                    toast.success("Course updated successfully");
                    history.push('/courses');
                }else{
                    toast.error("Something went wrong");
                }
            }
            setFormValue({ course_id: "", name: "" });
        }
    };

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    const {id} = useParams();

    useEffect(() => {
        if(id) {
            setEditMode(true);
            getSingleCourse(id)
        }else {
            setEditMode(false);
            setFormValue({ ...initialState});
        }
    }, [id]);

    const getSingleCourse = async (id) => {
        const singleCourse = await axios.post(`http://localhost:8070/courses/get/${id}`)
        if(singleCourse.status === 200) {
            setFormValue({ ...singleCourse.data.course});
        }else {
            toast.error("Something went wrong");
        }
    }

    // const {id} = useParams();

    // useEffect(() => {

    // })

    //   


    return ( 
        <><Navbar />
        <MDBValidation className='row '
            style={{ margin: '50px', marginLeft: '400px', width:'800px', marginTop:'100px'}}
            noValidate onSubmit={handleSubmit}
        >
            <h3 style={{ textAlign: 'center', paddingBottom: '10px', fontFamily: 'Poppins' }}>
                { editMode ? "Update Course" : "Add Course"}
            </h3>

            <div style={{ margin: 'auto', padding: "15px", maxWidth: "400px", alignContent: "center" }}>

                <MDBInput 
                    value={course_id || ""}
                    name="course_id"
                    label='Course ID'
                    type="text"
                    onChange={onInputChange}
                    required validation='Please provide a valid course id'
                    invalid />

                <br />

                <MDBInput 
                    value={name || ""}
                    name="name"
                    label='Course Name'
                    type="text"
                    onChange={onInputChange}
                    required validation='Please provide the name of the course'
                    invalid />

                <br />

                <MDBBtn className='formBtn'
                    type='submit'
                    style={{ marginLeft: '50px', paddingInline: '30px', fontSize: '15PX', marginTop: '30px', marginRight:'20px'}}
                >{ editMode ? "Update" : "Add"}
                </MDBBtn>
                <Link to='/courses'>
                    <MDBBtn color='dark'
                        style={{ paddingInline: '30px', fontSize: '15PX', marginTop: '20px' }}
                        >Go Back
                    </MDBBtn>
                </Link>
            </div>
        </MDBValidation></>
    )
}

export default AddEditCourse;
