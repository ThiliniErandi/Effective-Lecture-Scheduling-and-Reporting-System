// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import NoticeForm from "./form";
  
// // EditStudent Component
// const EditStudent = (props) => {
//   const [formValues, setFormValues] = useState({
//     name: "",
//     email: "",
//     rollno: "",
//   });
    
//   //onSubmit handler
//   const onSubmit = (studentObject) => {
//     axios
//       .put(
//         "http://localhost:4000/students/update-student/" +
//           props.match.params.id,
//         studentObject
//       )
//       .then((res) => {
//         if (res.status === 200) {
//           alert("Student successfully updated");
//           props.history.push("/student-list");
//         } else Promise.reject();
//       })
//       .catch((err) => alert("Something went wrong"));
//   };
  
//   // Load data from server and reinitialize student form
//   useEffect(() => {
//     axios
//       .get(
//         "http://localhost:4000/students/update-student/" 
//         + props.match.params.id
//       )
//       .then((res) => {
//         const { name, email, rollno } = res.data;
//         setFormValues({ name, email, rollno });
//       })
//       .catch((err) => console.log(err));
//   }, []);
  
//   // Return student form
//   return (
//     <NoticeForm
//       initialValues={formValues}
//       onSubmit={onSubmit}
//       enableReinitialize
//     >
//       Update Student
//     </NoticeForm>
//   );
// };
  
// // Export EditStudent Component
// export default EditStudent;