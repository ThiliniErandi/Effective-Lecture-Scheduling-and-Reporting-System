import React, { useState } from 'react';
import { MDBBtn, MDBInput, MDBValidation } from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import './report.css';
import PDF from './PDF';

const Report = () => {

  const initialState = {
    // report_id: '',
    name: '',
    description: '',
    postSubmitted: false
  }

    const [formValue, setFormValue] = useState(initialState);
    // const [ yearErrMsg, setYearErrorMsg ] = useState(null);
    const { name, description } = formValue;

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if(!year) {
        //     setYearErrorMsg("Please Select the Student Batch")
        // }
        if( name && description ) {
                const response = await axios.post("http://localhost:8070/reports/add");
                if(response.status === 201 ) {
                    toast.success("Report created successfully");
                }else{
                    toast.error("Something went wrong");
                }
            }
            setFormValue({ name: "", description: "" });
            window.location = '/pdf';
        }
    

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    //selections
    // const years = ['2019/2020', '2018/2019', '2017/2018', '2016/2017']

    // const onYearChange = (e) => {
    //     setYearErrorMsg(null);
    //     setFormValue({ ...formValue, year: e.target.value});
    // };

    return ( 
        <>
        <Navbar/>
        { !this.initialState.postSubmitted ? 
        (<MDBValidation className='report-row '
            noValidate onSubmit={handleSubmit}
        >
          <div className="report">

            <h3>Create Report</h3>

            <div className="report-form">

                {/* <select 
                        style={{fontSize:'14px', width:'100%', borderRadius:'4px', height:'35px', borderColor:'#83ccc5', marginBottom:'25px' }} 
                        onChange={onYearChange}
                        value={year} >
                            <option >Select the Year</option>
                            {years.map((option, index) => (
                                <option value={option || ""} key={index}>
                                    {option}
                                </option>
                            ))}
                </select> */}

                    {/* {yearErrMsg && (
                        <div 
                            className="typeErrMsg" 
                            style={{color:'#DC143C', textAlign:'left',fontSize: '14px', marginTop:'-20px', marginBottom:'10px'}}>
                            {yearErrMsg}
                        </div>
                    )} */}
{/* 
                <MDBInput 
                    value={report_id || ""}
                    name="report_id"
                    label='Report ID'
                    type="text"
                    onChange={onInputChange}
                    // required validation='Please provide a valid hod_id'
                    invalid />

                <br /> */}

                <MDBInput 
                    value={name || ""}
                    name="name"
                    label='Name'
                    type="text"
                    onChange={onInputChange}
                    style={{marginTop:'5px'}}
                    required validation='Please provide a valid name'
                    invalid />

                <br />

                <MDBInput 
                    value={description || ""}
                    name="description"
                    label='Description'
                    type="text"
                    textarea={4}
                    onChange={onInputChange}
                    required validation='Please provide a description'
                    invalid />

                <br />

                <MDBBtn className='formBtn'
                    type='submit'
                    style={{ marginLeft: '20px', paddingInline: '40px', fontSize: '15PX', marginTop: '30px', marginRight:'40px'}}
                >Create
                </MDBBtn>
                <Link to='/home'>
                    <MDBBtn color='dark'
                        style={{ paddingInline: '40px', fontSize: '15PX', marginTop: '20px' }}
                        >Go Back
                    </MDBBtn>
                </Link>
                </div>
            </div>
        </MDBValidation> ): ( 
          <PDF name={this.initialState.name} description={this.initialState.description}/> )} 
      </>
    )
}

export default Report;
