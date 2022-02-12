import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar from '../../components/Navbar';
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';
import axios from 'axios'; 
// import { toast } from 'react-toastify';

 const AddNotice = () => {

//   const getDate = () => {
//       let today = new Date();
//       let dd = String(today.getDate()).padStart(2, "0");
//       let mm =  String(today.getMonth()).padStart(2, "0");
//       let yyyy = today.getFullYear();

//       today = dd + "/" + mm + "/" + yyyy;
//       return today; 
//   };  

    // const stuBatches = [
    //     { key:'', value: ''},
    //     { key:'', value: ''},
    //     { key:'', value: ''},
    //     { key:'', value: ''}
    // ]

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    //   customFile:'',
    //   stuBatches: []
    },

    validationSchema: Yup.object({
      title: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required(),
      description: Yup.string()
        .max(5000, 'Must be 5000 characters or less')
        .required(),
    //   stuBatches: Yup.array().required(),
    //   titleImg: Yup.mixed()
    //     .required()
    //     .test("FILE_SIZE", "Uploaded file is too big.", 
    //         value => !value || (value && value.size <= FILE_SIZE))
    //     .test("FILE_FORMAT", "Uploaded file has unsupported format.", 
    //         value => !value || (value && SUPPORTED_FORMATS.includes(value.type)))
    }),
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));

      axios.post("http://localhost:8070/notices/add", values)
      .then((res)=> {
          alert("Notice Created successfully")
          window.location = '/notices';
      }).catch((err)=>{
          alert("Something went wrong")
      })

    },

    // handleSubmit: values => {
    //     if (title && description && titleImg) {
    //         const currentDate = getDate();
    //         const updatedNoticeData = {...values, date: currentDate};
    //         const response = axios.post("http://localhost:8070/notices", updatedNoticeData);
    //         if(response.status === 201){
    //             toast.success("Notice added succesfully")
    //         }else{
    //             toast.error("Something went wrong")
    //         }
    //     }
    // }
  });

  return (
     <>
      <Navbar/>
        <div className='formContainer' style={{ marginLeft:'350px', padding: '20px', textAlign:'justify', width:'45vw' }}>
            
            <form onSubmit={formik.handleSubmit} >

                <h3 style={{ textAlign:'center', paddingBottom:'10px', fontFamily:'Poppins' }}>Add Notice</h3>

                {/* <MDBInput
                    label='Notice_Id'
                    id="Notice_id"
                    name="id"
                    type="text"
                    style={{ display:'block', paddingRight:'333px', marginBottom:'20px', paddingBottom:'8px' }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.id}
                    disabled
                /> */}

                <MDBInput
                    label='Title'
                    id="title"
                    name="title"
                    type="text"
                    style={{fontSize:'10px'}}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                    style={{color:"grey"}}
                />
                {formik.touched.title && formik.errors.title ? (
                    <div style={{ marginBottom:'10', color:'red', marginTop:'-3px' }}>{formik.errors.title}</div>
                ) : null}
{/* 
                <MDBValidation isValidated> */}
                    {/* <div className='file-container' style={{ marginTop:'10px'}}>
                        <MDBFile 
                            id='titleImg' 
                            name='titleImg'
                            style={{ paddingRight:'0px' }} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.titleImg}
                        />
                    </div> */}
                {/* </MDBValidation> */}

                {/* <div className="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="d-flex">
                    <div className="toast-body">
                    Hello, world! This is a toast message.
                </div>
                    <button className="btn-close me-2 m-auto" type="button" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                </div> */}
                
                <MDBInput
                    label='Description'
                    id="description"
                    name="description"
                    type="text"
                    textarea rows={6}
                    style={{marginTop:'10px' }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                />

                {formik.touched.description && formik.errors.description ? (
                    <div style={{ marginBottom:'10px', color:'red', marginTop:'-3px' }}>{formik.errors.description}</div>
                ) : null}

                {/* <div style={{ marginTop:'10px' }}>
                    <p style={{ display:'inline-block', marginRight:'50px', marginBottom:'20px'}}>
                        Select student batch/batches
                    </p>
                    <MDBCheckbox name='stuBatch' id='stuBatchbox1' value='First Year' label='1' inline/>
                    <MDBCheckbox name='stuBatch' id='stuBatchbox2' value='Second Year' label='2' inline />
                    <MDBCheckbox name='stuBatch' id='stuBatchbox3' value='Third Year' label='3' inline />
                    <MDBCheckbox name='stuBatch' id='stuBatchbox4' value='Fourth Year' label='4' inline />
                </div> */}

                <MDBBtn 
                    className='formBtn'
                    type='submit' 
                    // color='primary' 
                    style={{ width:'528px', padding:'10px', fontSize:'15PX', marginTop:'30px' }}
                    >ADD</MDBBtn>
                {/* <MDBBtn 
                    type='submit' 
                    color='dark'
                    style={{ width:'528px', padding:'10px', fontSize:'15PX', marginTop:'20px' }} >
                    <Link to='/notices' style={{  color:'white'  }}>Cancel</Link>
                </MDBBtn> */}
            </form>
        </div>
    </>
  );
};  

export default AddNotice;
