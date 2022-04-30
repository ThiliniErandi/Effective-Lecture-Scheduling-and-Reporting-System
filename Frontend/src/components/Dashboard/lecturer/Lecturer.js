import React from 'react';
import {
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Lecturer = ({ lecturer_id, name, course_id, email, designation, user_id, handleDelete, _id }) => {
    return <>
       
        <tr>
          <td>{ lecturer_id }</td>
          <td>{ designation }</td>
          <td>{ name }</td>
          <td>{ email }</td>
          <td>{ course_id }</td>
          <td>{ user_id }</td>
          <td>
            <Link to = { `/addEditLecturer/${_id}` }> 
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


export default Lecturer;