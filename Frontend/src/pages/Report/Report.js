import React, { Component } from 'react';
import { MDBBtn, MDBInput, MDBValidation } from 'mdb-react-ui-kit';
import PDF from './PdfView';
import './report.css';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

class Report extends Component {

    state = {
        name: '',
        description: '',
        reportSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    submitReport = (e) => {
        if (!this.state.name || !this.state.description) {
            alert('All fields are required!');
            e.preventDefault();
        } else {
            this.setState({
                reportSubmitted: true
            });
        }
    }

    render() {
        return ( <> 
        <Navbar/>
        {!this.state.reportSubmitted ?
                ( < MDBValidation className = 'report-row '
                    noValidate onSubmit = { this.submitReport } >
                    <div className = "report" >

                    <h3> Create Report </h3>

                    <div className = "report-form" >

                    <MDBInput
                    // value={name || ""}
                    name = "name"
                    label = 'Name'
                    type = "text"
                    onChange = { this.onChange('name') }
                    style = {
                        { marginTop: '5px' } }
                    required validation = 'Please provide a valid name'
                    invalid/>

                    <br/>

                    <MDBInput
                    // value={description || ""}
                    name = "description"
                    label = 'Description'
                    type = "text"
                    textarea = { 4 }
                    onChange = { this.onChange('description') }
                    required validation = 'Please provide a description'
                    invalid/>

                    <br/>

                    <MDBBtn className = 'formBtn'
                        type = 'button'
                        onClick = { this.submitReport }
                        style = {{ marginLeft: '20px', paddingInline: '40px', fontSize: '15PX', marginTop: '30px', marginRight: '40px' } } >
                        Create 
                    </MDBBtn> 
                    <Link to='/home'>
                        <MDBBtn className = 'formBtn'
                            type = 'button'
                            color='dark'
                            style = {{ marginLeft: '20px', paddingInline: '40px', fontSize: '15PX', marginTop: '30px', marginRight: '40px' } } >
                            Go Back 
                        </MDBBtn> 
                    </Link>
                    {
                        /* <Link to='/home'>
                                                    <MDBBtn color='dark'
                                                        style={{ paddingInline: '40px', fontSize: '15PX', marginTop: '20px' }}
                                                        >Go Back
                                                    </MDBBtn>
                                                </Link> */
                    } </div> 
                    </div> 
                    </MDBValidation> ): (  <
                    PDF name = { this.state.name }
                    description = { this.state.description }
                    /> )
                } 
                </>
            );
        }
    }

    export default Report;