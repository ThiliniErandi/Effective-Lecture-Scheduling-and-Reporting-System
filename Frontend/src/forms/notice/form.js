// import React, { useState, useEffect } from 'react';
// import { useParams, Link, useHistory } from 'react-router-dom';
// import { MDBBtn, MDBInput, MDBValidation } from 'mdb-react-ui-kit';

// const initialState = {
//     title: '',
//     description: '',
// }

// const AddEditNotice = () => {

//     const { title, description} = formValue;

//     return ( 
//         <>
//         <Navbar />
//         <MDBValidation 
//             className='row '
//             style={{ margin: '50px', marginLeft: '400px', width:'800px'}}
//             noValidate>

//             <h3 
//                 style={{ textAlign: 'center', paddingBottom: '10px', fontFamily: 'Poppins' }}>
//                 Add Notice
//             </h3>

//             <div style={{ margin: 'auto', padding: "15px", maxWidth: "400px", alignContent: "center" }}>

//                 <MDBInput 
//                     value={title}
//                     name="title"
//                     label='Title'
//                     type="text"
//                     onChange={onInputChange}
//                     required 
//                     validation='Please provide a title'
//                     invalid />

//                 <br />

//                 <MDBInput 
//                     value={description }
//                     name="description"
//                     label='Description'
//                     type="text"
//                     textarea rows={6}
//                     onChange={onInputChange}
//                     required 
//                     validation='Please provide a description'
//                     invalid />

//                 <br />
// {/* 
//                 { !editMode && (
//                     <> */}
//                      <MDBInput 
//                         type='file'
//                         onChange={onUploadImage}
//                         required 
//                         validation='Please provide a suitable image'
//                         invalid />
//                     {/* </>
//                 )} */}

//                 <br />
//                 <br />

//                 <MDBBtn
//                     type='submit'
//                     style={{ marginLeft: '50px', paddingInline: '40px', fontSize: '15PX', marginTop: '30px', marginRight:'20px'}}
//                 >Add
//                 </MDBBtn>
//                 <Link to="/home">
//                     <MDBBtn color='dark'
//                         style={{ paddingInline: '40px', fontSize: '15PX', marginTop: '20px' }}
//                         >Go Back
//                     </MDBBtn>
//                 </Link>
//             </div>
//         </MDBValidation>
//         <Footer/>
//         </>
//     )
// }

// export default AddEditNotice;
