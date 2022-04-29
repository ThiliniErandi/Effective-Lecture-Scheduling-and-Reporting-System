import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { MDBBtn, MDBInput, MDBValidation } from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from '../../../components/Navbar';

const initialState = {
   dep_id: '',
   name: '',
}

const AddEditDepartment = () => {

    const [formValue, setFormValue] = useState(initialState);
    const { dep_id, name } = formValue;
    const [editMode, setEditMode] = useState(false);
     const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if( dep_id && name  ) {
            if(!editMode) {
                // const updatedUserData = { ...formValue };
                const response = await axios.post("http://localhost:8070/departments/add", formValue);
                if(response.status === 200 ) {
                    toast.success("Department added successfully");
                    history.push('departments');
                }else{
                    toast.error("Something went wrong");
                }
            }else {
                const response = await axios
                .put(`http://localhost:8070/departments/update/${id}`, formValue);
                if(response.status === 201 ) {
                    toast.success("Department updated successfully");
                }else{
                    toast.error("Something went wrong");
                }
            }
            setFormValue({ dep_id: "", name: "" });
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
            getSingleDepartment(id)
        }else {
            setEditMode(false);
            setFormValue({ ...initialState});
        }
    }, [id]);

    const getSingleDepartment = async (id) => {
        const singleDepartment = await axios.get(`http://localhost:8070/departments/${id}`)
        if(singleDepartment.status === 200) {
            setFormValue({ ...singleDepartment.data});
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
                { editMode ? "Update Department" : "Add Department"}
            </h3>

            <div style={{ margin: 'auto', padding: "15px", maxWidth: "400px", alignContent: "center" }}>

                <MDBInput 
                    value={dep_id || ""}
                    name="dep_id"
                    label='Department ID'
                    type="text"
                    onChange={onInputChange}
                    required validation='Please provide a valid department id'
                    invalid />

                <br />

                <MDBInput 
                    value={name || ""}
                    name="name"
                    label='Department Name'
                    type="text"
                    onChange={onInputChange}
                    required validation='Please provide the name of the Department'
                    invalid />

                <br />

                <MDBBtn className='formBtn'
                    type='submit'
                    style={{ marginLeft: '50px', paddingInline: '40px', fontSize: '15PX', marginTop: '30px', marginRight:'20px'}}
                >{ editMode ? "Update" : "Add"}
                </MDBBtn>
                <Link to='/departments'>
                    <MDBBtn color='dark'
                        style={{ paddingInline: '40px', fontSize: '15PX', marginTop: '20px' }}
                        >Go Back
                    </MDBBtn>
                </Link>
            </div>
        </MDBValidation></>
    )
}

export default AddEditDepartment;
