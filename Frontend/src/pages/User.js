import React from 'react';
import {
    MDBTable, 
    MDBTableBody, 
    MDBTableHead,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const user = ({ user_name, password, user_type, email, handleDelete, id }) => {
    return <div >
        <MDBTable hover bordered striped style={{ marginTop: '5px'}}>
        <caption>List of users</caption>
      <MDBTableHead style={{ backgroundColor:"#FDDA0D"  }} >
        <tr>
          {/* <th>#</th> */}
          <th >Name</th>
          <th >Password</th>
          <th >Type</th>
          <th >Email</th>
          <th>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>{ user_name }</td>
          <td>{ password }</td>
          <td>{ user_type }</td>
          <td>{ email }</td>
          <td>
            <Link to = { `/edit` }> 
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
      </MDBTableBody>
    </MDBTable>
    
    </div > ;
};


export default user;