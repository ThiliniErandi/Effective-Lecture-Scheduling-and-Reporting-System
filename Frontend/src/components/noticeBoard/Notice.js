import React from 'react';
import {
    MDBCol,
    MDBCard,
    MDBCardTitle,
    MDBCardBody,
    // MDBCardImage,
    // MDBContainer,
    MDBCardText,
    MDBBtn,
    MDBIcon,
    // MDBRow
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Badge from './Badge'

const Notices = ({ title, category, description, id, imageUrl, handleDelete }) => {
    return( 
        <MDBCol size = '4'
                style = {{ paddingBottom:'10px'}}>
            <MDBCard className = 'h-100 mt-0 w-100'>

                    {
                    /* <MDBCardImage
                                        src = { imageUrl }
                                        alt = { title }
                                        position = 'top'
                                        style = {{ maxWidth: '100%', height: '150px' }}/>  */
                    }

                <MDBCardBody>
                    <MDBCardTitle> { title } </MDBCardTitle>  
                    <MDBCardText > { description } 
                    <Link to = { `/viewNotice/${id}` } > Read More </Link>  
                    </MDBCardText > 
                    <Badge > { category } </Badge>  
                    <span>
                        <MDBBtn
                            className = 'mt-1'
                            tag = 'a'
                            color = 'none'
                            onClick = {() => handleDelete(id) } >
                            
                            <MDBIcon
                                fas
                                icon = 'trash'
                                style = {{ color: '#dd4e39' }}
                                size = 'lg'/>
                                
                        </MDBBtn>  
                            
                        <Link to = { `/addEditNotice/${id}` } >
                            <MDBIcon
                                fas
                                icon = 'edit'
                                style = {{ color: '#75acee', marginLeft: '10px' }}
                                size = 'lg'/>
                        </Link>  
                    </span >  
                </MDBCardBody>  
            </MDBCard >  
        </MDBCol> 
    )
};


export default Notices;