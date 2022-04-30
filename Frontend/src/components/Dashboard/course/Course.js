import React from 'react';
import {
   
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const course = ({ course_id, name, handleDelete, _id }) => {
    return <>
       
        <tr>
          <td>{ course_id }</td>
          <td>{ name }</td>
          <td>
            <Link to = { `/addEditCourse/${_id}` }> 
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


export default course;