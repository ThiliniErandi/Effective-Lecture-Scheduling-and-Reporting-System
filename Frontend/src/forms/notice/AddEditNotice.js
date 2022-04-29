import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { MDBBtn, MDBInput, MDBValidation } from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const initialState = {
    title: '',
    description: '',
}

const AddEditNotice = () => {

    const [formValue, setFormValue] = useState(initialState);
    const [editMode, setEditMode] = useState(false);
    const { title, description} = formValue;
    const history = useHistory();
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Choose Image');
    const[uploadedFile, setUploadedFile] = useState({});

    // this.setState({file})

    // const getDate = () => {
    //     let today = new Date();
    //     let dd = String(today.getDate()).padStart(2, "0");
    //     let mm =  String(today.getMonth()).padStart(2, "0");
    //     let yyyy = today.getFullYear();

    //     today = dd + "/" + mm + "/" + yyyy;
    //     return today; 
    // };  

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const imageValidation = !editMode ? imageUrl : true;
     
        if(title && description && file ) {
             // const currentDate = getDate();
            if(!editMode) {
                
                // const updatedNoticeData = { ...formValue };
                const response = await axios
                    .post("http://localhost:8070/notices/add", formValue );
                if(response.status === 200 ) {
                    toast.success("Notice created successfully");
                    history.push('/home');
                } else{
                    toast.error("Something went wrong");
                }
            } 
            // else {
            //     const response = await axios
            //     .put(`http://localhost:8070/notices/update/${id}`, formValue);
            //     if(response.status === 200 ) {
            //         toast.success("Notice updated successfully");
            //     }else{
            //         toast.error("Something went wrong");
            //     }
            // }
            setFormValue({ title: "", description: "", file: ""});
        }
    };

      // 
    //
    // formData.append("upload_preset", "")
    // axios
    //     .post("http://localhost:8070/notices/upload", formData)
    //     .then((res) => {
    //        console.log("Response", res);
    //        toast.info("Image uploaded successfully");
    //        setFormValue({ ...formValue }); 
    // })
    //     .catch((err)=> {
    //         toast.error("Something went wrong");
    //     });

    const {_id} = useParams();

    useEffect(() => {
        if(_id) {
            setEditMode(true);
            getSingleNotice(_id);
        }else {
            setEditMode(false);
            setFormValue({ ...initialState});
        }
    }, [_id]);

    const getSingleNotice = async (_id) => {
        const singleNotice = await axios.get(`http://localhost:8070/notices/get/${_id}`);
        if(singleNotice.status === 200) {
            setFormValue({ ...singleNotice.data});
        }else {
            toast.error("Something went wrong");
        }
    }

    const onInputChange = (e) => {
        
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value }) ;
    };

    const onUploadImage = async (e) => {
 
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await axios
                .post('http://localhost:8070/notices/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
            });

            const  { fileName, filepath } = res.data;
            setUploadedFile({ fileName, filepath });

        } catch(err) {
            if(err.status === 500 ) {
                toast.error("Something went wrong");
            } else {
                toast.success("Image uploaded successfully");
            }
        }
    }


    return ( 
        <>
        <Navbar />
        <MDBValidation 
            className='row '
            style={{ margin: '50px', marginLeft: '400px', width:'800px'}}
            noValidate onSubmit={handleSubmit}>

            <h3 
                style={{ textAlign: 'center', paddingBottom: '10px', fontFamily: 'Poppins' }}>
                { editMode ? "Update Notice" : "Add Notice"}
            </h3>

            <div style={{ margin: 'auto', padding: "15px", maxWidth: "400px", alignContent: "center" }}>

                <MDBInput 
                    value={title || ""}
                    name="title"
                    label='Title'
                    type="text"
                    onChange={onInputChange}
                    required 
                    validation='Please provide a title'
                    invalid />

                <br />

                <MDBInput 
                    value={description || ""}
                    name="description"
                    label='Description'
                    type="text"
                    textarea rows={6}
                    onChange={onInputChange}
                    required 
                    validation='Please provide a description'
                    invalid />

                <br />
{/* 
                { !editMode && (
                    <> */}
                     <MDBInput 
                        type='file'
                        onChange={onUploadImage}
                        required 
                        validation='Please provide a suitable image'
                        invalid />
                    {/* </>
                )} */}

                <br />
                <br />

                <MDBBtn
                    type='submit'
                    style={{ marginLeft: '50px', paddingInline: '40px', fontSize: '15PX', marginTop: '30px', marginRight:'20px'}}
                >{ editMode ? "Update" : "Add"}
                </MDBBtn>
                <Link to="/home">
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

export default AddEditNotice;
