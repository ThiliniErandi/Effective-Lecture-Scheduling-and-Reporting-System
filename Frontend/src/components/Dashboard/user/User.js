import React from 'react';
import {
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const user = ({ user_name, password, user_type, email, handleDelete, _id }) => {
    return <>
       
        <tr>
          <td>{ user_name }</td>
          <td>{ password }</td>
          <td>{ user_type }</td>
          <td>{ email }</td>
          <td>
            <Link to = { `/addEditUser/${_id}` }> 
                <MDBIcon
                    fas
                    icon = 'edit'
                    style = {{ color: '#75acee', marginRight: '10px' }}
                    size = 'lg'/>
            </Link>
            <MDBBtn
                className = 'mt-1'
                tag = 'a'
                color = 'none'
                onClick = {() => handleDelete(_id)} >
                <MDBIcon
                    fas
                    icon = 'trash'
                    style = {{ color: '#dd4e39' }}
                    size = 'lg' />
            </MDBBtn> 
          </td>
        </tr>
    
        </>
  ;
};


export default user;