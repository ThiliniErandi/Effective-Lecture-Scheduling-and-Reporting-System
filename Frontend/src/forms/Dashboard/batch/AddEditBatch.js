import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { MDBBtn, MDBInput, MDBValidation } from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const initialState = {
    year: '',
    department: '',
    // course_id: '',
    hod: '',
    rep: ''
}

const AddEditBatch = () => {

    const [formValue, setFormValue] = useState(initialState);
    const [ yearErrMsg, setYearErrorMsg ] = useState(null);
    const [ depErrMsg, setDepErrorMsg ] = useState(null);
    const { year, department, hod, rep } = formValue;
    const [editMode, setEditMode] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!year) {
            setYearErrorMsg("Please Select the Student Batch")
        }
        if(!department) {
            setDepErrorMsg("Please Select the Department")
        }
        if(year && department && hod && rep  ) {
            if(!editMode) {
                // const updatedUserData = { ...formValue };
                const response = await axios.post("http://localhost:8070/batches/add", formValue);
                if(response.status === 200 ) {
                    toast.success("Batch added successfully");
                    history.push('/batches');
                }else{
                    toast.error("Something went wrong");
                }
            }else {
                const response = await axios
                .put(`http://localhost:8070/batches/update/${id}`, formValue);
                if(response.status === 200 ) {
                    toast.success("Batch updated successfully");
                }else{
                    toast.error("Something went wrong");
                }
            }
            setFormValue({ year: "", department: "", hod: "", rep: ""});
        }
    };

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    //selections
    const years = ['2019/2020', '2018/2019', '2017/2018', '2016/2017']

    const onYearChange = (e) => {
        setYearErrorMsg(null);
        setFormValue({ ...formValue, year: e.target.value});
    };

    const departments = ['CIS', 'PST', 'FST', 'NR', 'SSPE']

    const onDepChange = (e) => {
        setDepErrorMsg(null);
        setFormValue({ ...formValue, department: e.target.value});
    };
    

    const {id} = useParams();

    useEffect(() => {
        if(id) {
            setEditMode(true);
            getSingleBatch(id)
        }else {
            setEditMode(false);
            setFormValue({ ...initialState});
        }
    }, [id]);

    const getSingleBatch = async (id) => {
        const singleBatch = await axios.get(`http://localhost:8070/batches/${id}`)
        if(singleBatch.status === 200) {
            setFormValue({ ...singleBatch.data});
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
                { editMode ? "Update Batch" : "Add Batch"}
            </h3>

            <div style={{ margin: 'auto', padding: "15px", maxWidth: "400px", alignContent: "center" }}>

                <select 
                        style={{fontSize:'14px', width:'100%', borderRadius:'4px', height:'35px', borderColor:'#83ccc5', marginBottom:'25px' }} 
                        onChange={onYearChange}
                        value={year} >
                            <option >Select the Year</option>
                            {years.map((option, index) => (
                                <option value={option || ""} key={index}>
                                    {option}
                                </option>
                            ))}
                </select>

                    {yearErrMsg && (
                        <div 
                            className="typeErrMsg" 
                            style={{color:'#DC143C', textAlign:'left',fontSize: '14px', marginTop:'-20px', marginBottom:'10px'}}>
                            {yearErrMsg}
                        </div>
                    )}

                <select 
                        style={{fontSize:'14px', width:'100%', borderRadius:'4px', height:'35px', borderColor:'#83ccc5', marginBottom:'25px' }} 
                        onChange={onDepChange}
                        value={department} >
                            <option >Select the Department</option>
                            {departments.map((option, index) => (
                                <option value={option || ""} key={index}>
                                    {option}
                                </option>
                            ))}
                </select>
                
                    {depErrMsg && (
                            <div 
                                className="typeErrMsg" 
                                style={{color:'#DC143C', textAlign:'left',fontSize: '14px', marginTop:'-20px', marginBottom:'10px'}}>
                                {depErrMsg}
                            </div>
                        )}
                {/* <select 
                        style={{fontSize:'14px', width:'100%', borderRadius:'4px', height:'35px', borderColor:'#83ccc5', marginBottom:'25px' }} 
                        onChange={onCourseChange}
                        value={course} >
                            <option >Select the course</option>
                            {departments.map((option, index) => (
                                <option value={option || ""} key={index}>
                                    {option}
                                </option>
                            ))}
                </select>
                
                    {depErrMsg && (
                            <div 
                                className="typeErrMsg" 
                                style={{color:'#DC143C', textAlign:'left',fontSize: '14px', marginTop:'-20px', marginBottom:'10px'}}>
                                {depErrMsg}
                            </div>
                        )} */}

                <MDBInput 
                    value={hod || ""}
                    name="hod"
                    label='Head of the Department'
                    type="text"
                    onChange={onInputChange}
                    required validation='Please provide a valid hod_id'
                    invalid />

                <br />

                <MDBInput 
                    value={rep || ""}
                    name="rep"
                    label='Student Batch Representative'
                    type="text"
                    onChange={onInputChange}
                    required validation='Please provide a valid rep_id'
                    invalid />

                <br />

                <MDBBtn className='formBtn'
                    type='submit'
                    style={{ marginLeft: '50px', paddingInline: '40px', fontSize: '15PX', marginTop: '30px', marginRight:'20px'}}
                >{ editMode ? "Update" : "Add"}
                </MDBBtn>
                <Link to='/batches'>
                    <MDBBtn color='dark'
                        style={{ paddingInline: '40px', fontSize: '15PX', marginTop: '20px' }}
                        >Go Back
                    </MDBBtn>
                </Link>
            </div>
        </MDBValidation>
        <Footer/>
        </>
    )
}

export default AddEditBatch;
