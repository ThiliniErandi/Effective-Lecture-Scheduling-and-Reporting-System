import React from 'react';
import {
   
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const batch = ({ year, department, course_id, hod_id, rep_id, handleDelete, id }) => {
    return <>
       
        <tr>
          <td>{ year }</td>
          <td>{ department }</td>
          {/* <td>{ course_id }</td> */}
          <td>{ hod_id }</td>
          <td>{ rep_id }</td>
          <td>
            <Link to = { `/addEditBatch` }> 
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


export default batch;