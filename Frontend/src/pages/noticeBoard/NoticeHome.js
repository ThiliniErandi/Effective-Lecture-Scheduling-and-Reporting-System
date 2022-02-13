// import React, { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// // import axios from 'axios';
// import { MDBRow, MDBCol, MDBContainer, MDBTypography } from 'mdb-react-ui-kit';
// import Notices from './Notices';

// const NoticeHome = () => {
//     const [ data, setData ] = useState([]);

//     useEffect(() => {
//         loadNoticesData();
//     }, [])

//     const loadNoticesData = async () => {
//         // const response = await axios.get("");
//         // if(response.status === 200) {
//         //     setData(response.data)
//         // } else {
//         //     toast.error("Something went wrong");
//         // }
//     };

//     console.log('data', data);

//     const handleDelete = () => {};

//     const excerpt = (str) => {
//         if(str.length > 50){
//             str = str.substring(0, 50) + " ... ";
//         }
//         return str;
//     };

//     return ( 
//         <>
//             <MDBRow>
//                 {data.length === 0 && (
//                     <MDBTypography className='text-center mb-0' tag='h2'>
//                         No Notice Found
//                     </MDBTypography>
//                 )}
//                 <MDBCol>
//                     <MDBContainer>
//                         <MDBRow>
//                             { data && data.map(( item, index ) => (
//                                 <Notices
//                                     key={index}
//                                     { ...item }
//                                     excerpt={excerpt}
//                                     handleDelete={handleDelete}
//                                 />
//                             ))}
//                         </MDBRow>
//                     </MDBContainer>
//                 </MDBCol>
//             </MDBRow>
//         </>

//     );
// }; 
 
// export default NoticeHome;
