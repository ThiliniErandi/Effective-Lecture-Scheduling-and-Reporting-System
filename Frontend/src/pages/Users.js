import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
import User from './User';
import Navbar from '../components/Navbar'

const Users = () => {

  // set a state to tell the component it need to wait until the result is fetched from the api
  const [loadingData, setLoadingData] = useState(true);

  // const columns = useMemo(() => [
  //   {
  //     Header: "#",
  //     accessor: "user_id",
  //   },
  //   {
  //     Header: "user_name",
  //     accessor: "Name",
  //   },
  //   {
  //     Header: "password",
  //     accessor: "Password",
  //   },
  //   {
  //     Header: "user_ype",
  //     accessor: "Type",
  //   },
  //   {
  //     Header: "email",
  //     accessor: "Email",
  //   },
  // ]);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .get("http://localhost:8070/users/view")
        .then((response) => {
          // check if the data is populated
          console.log(response.data);
          setData(response.data);
          // tell it that I had the result
          setLoadingData(false);
        });
    }
    if (loadingData) {
      // axios call, if the result is not ready
      getData();
    }
  }, []);

  const handleDelete = async(id) => {
    if (window.confirm("Are you sure that you wanted to delete this notice?")) {
        const response = await axios.delete(`http://localhost:8070/users/delete/${id}`);
        if (response.status === 200) {
            toast.success("User deleted successfully");
            loadingData();
        } else {
            toast.error("Something went wrong");
        }
    }
};

  return (<>
    <Navbar/>
          {/* check if the state is loading otherwise get a blank page because the data is an empty array at the moment of mounting */}
          {loadingData ? (
      <p>Loading Please wait...</p>
      ) : (
      <MDBContainer style={{marginTop:'20px'}}> 
        <MDBBtn color="primary" style={{ marginBottom:'20px', float:'right'}}>
      Add
    </MDBBtn>
        { data && data.map((item, index) => ( 
            <User key = { index } {...item }
            handleDelete = { handleDelete }
            />
        ))
    } 
    </MDBContainer>
    )}
      </> 
      
      );
};

export default Users;