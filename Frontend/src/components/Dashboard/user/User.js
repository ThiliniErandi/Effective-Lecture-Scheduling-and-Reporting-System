import React from 'react';
import {
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';

const User = ({ user_name, password, user_type, email, _id }) => {
  const history = useHistory();
  const HandleDelete = async () => {

    if (window.confirm("Are you sure that you wanted to delete this user?")) {
      const response = await axios.delete(`http://localhost:8070/users/delete/${_id}`, {}, {
        withCredentials: true
      });
      console.log(response);
      if (response.status === 200) {
        toast.success("User deleted successfully");
        window.location.reload();
      } else {
        toast.error("Something went wrong");
      }
    }
  }
  return <>

    <tr>
      <td>{user_name}</td>
      <td>{password}</td>
      <td>{user_type}</td>
      <td>{email}</td>
      <td>
        <Link to={`/addEditUser/${_id}`}>
          <MDBIcon
            fas
            icon='edit'
            style={{ color: '#75acee', marginRight: '10px' }}
            size='lg' />
        </Link>
        <MDBBtn
          className='mt-1'
          tag='a'
          color='none'
          onClick={() => HandleDelete(_id)} >
          <MDBIcon
            fas
            icon='trash'
            style={{ color: '#dd4e39' }}
            size='lg' />
        </MDBBtn>
      </td>
    </tr>

  </>
};


export default User;