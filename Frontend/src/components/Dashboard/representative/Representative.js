import React from 'react';
import {
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Representative = ({ rep_id, name, email, dep_id, batch_id, course_id, user_id, handleDelete, id }) => {
    return <>
       
        <tr>
          <td>{ rep_id }</td>
          <td>{ name }</td>
          <td>{ email }</td>
          <td>{ dep_id }</td>
          <td>{ batch_id }</td>
          <td>{ course_id }</td>
          <td>{ user_id }</td>
          <td>
            <Link to = { `/addEditRepresentatives` }> 
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
                onClick = {() => handleDelete(id)} >
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


export default Representative;