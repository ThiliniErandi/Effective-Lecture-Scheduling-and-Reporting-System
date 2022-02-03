import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar from '../../components/Navbar';
import { MDBBtn, MDBFile, MDBCheckbox, MDBInput, MDBValidation } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

 const AddNotice = () => {

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      customFile:'',
    },

    validationSchema: Yup.object({
      title: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Must be less than 100 characters.'),
      description: Yup.string()
        .max(5000, 'Must be 5000 characters or less')
        .required('Must be less than 5000 characters.'),
    //   attachment: Yup.mixed()
    //     .Required()
        // .test("FILE_SIZE", "Uploaded file is too big.", 
        //     value => !value || (value && value.size <= FILE_SIZE))
        // .test("FILE_FORMAT", "Uploaded file has unsupported format.", 
        //     value => !value || (value && SUPPORTED_FORMATS.includes(value.type)))
    }),
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
     <>
      <Navbar/>
        <div className='formContainer' style={{ margin: '15px 430px', padding: '30px', textAlign:'justify', width:'40vw' }}>
            
            <form onSubmit={formik.handleSubmit} >

                <h3 style={{ textAlign:'center', paddingBottom:'30px', fontFamily:'Poppins' }}>Add Notice</h3>

                <MDBInput
                    label='Notice_Id'
                    id="Notice_id"
                    name="id"
                    type="text"
                    style={{ display:'block', paddingRight:'333px', marginBottom:'20px', paddingBottom:'8px' }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.id}
                    disabled
                />

                <div style={{ marginRight:'10px', display:'inline-block', marginBottom:'20px'}}>
                    <input type="checkbox" className="btn-check" id="btn-check" checked autocomplete="off" style={{ marginRight:'20px' }} />
                    <label className="btn btn-outline-warning" for="btn-check">For Lecturers</label>
                </div>
                <div style={{ marginRight:'10px', display:'inline-block', marginBottom:'20px'}}>
                    <input type="checkbox" class="btn-check" id="btn-check2" autocomplete="off" />
                    <label className="btn btn-outline-warning" for="btn-check2">For Students</label>
                </div>

                <MDBInput
                    label='Title'
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title ? (
                    <div style={{ marginBottom:'20px', color:'red', marginTop:'-3px' }}>{formik.errors.title}</div>
                ) : null}

                <MDBValidation isValidated>
                    <div className='file-container' style={{ marginTop:'10px' }}>
                        <MDBFile id='customFile' style={{ paddingRight:'0px' }}/>
                        <div className='invalid-feedback'>This should less than 200Mb</div>
                    </div>
                </MDBValidation>

                <div className="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
                <div clasName="d-flex">
                    <div className="toast-body">
                    Hello, world! This is a toast message.
                </div>
                    <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                </div>
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}

                <MDBInput
                    label='Description'
                    id="description"
                    name="description"
                    type="text"
                    textarea rows={6}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                />

                {formik.touched.description && formik.errors.description ? (
                    <div style={{ marginBottom:'10px', color:'red', marginTop:'-3px' }}>{formik.errors.description}</div>
                ) : null}

                <div style={{ marginTop:'10px' }}>
                    <p style={{ display:'inline-block', marginRight:'50px', marginBottom:'30px'}}>
                        Select student batch/batches
                    </p>
                    <MDBCheckbox name='inlineCheck' id='inlineCheckbox1' value='First Year' label='1' inline />
                    <MDBCheckbox name='inlineCheck' id='inlineCheckbox2' value='Second Year' label='2' inline />
                    <MDBCheckbox name='inlineCheck' id='inlineCheckbox3' value='Third Year' label='3' inline />
                    <MDBCheckbox name='inlineCheck' id='inlineCheckbox4' value='Fourth Year' label='4' inline />
                </div>

                <MDBBtn 
                    type='submit' 
                    color='primary' 
                    style={{ float:'left',width:'225px', padding:'13px', fontSize:'15PX' }}
                    >ADD</MDBBtn>
                <MDBBtn 
                    type='submit' 
                    color='dark'
                    style={{ float:'right', width:'225px', padding:'13px', fontSize:'15PX' }} >
                    <Link to='/notices' style={{  color:'white'  }}>Cancel</Link>
                </MDBBtn>
            </form>
        </div>
    </>
  );
};  

export default AddNotice;
