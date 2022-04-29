import React from 'react';
import {
    MDBCol,
    MDBCard,
    MDBCardTitle,
    MDBCardImage,
    MDBCardBody,
    MDBCardText,
    MDBBtn,
    MDBIcon,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
// import Badge from './Badge'

const Notices = ({ title, description, imageUrl, _id, handleDelete, excerpt }) => {
    return( 
        <MDBCol size = '4'
                style = {{ paddingBottom:'10px'}}>
            <MDBCard className = 'h-100 mt-0 w-100'>

                <MDBCardImage
                    src = { imageUrl }
                    alt = { title }
                    position = 'top'
                    style = {{ maxWidth: '100%', height: '150px' }}/> 

                <MDBCardBody>
                    <MDBCardTitle> { title } </MDBCardTitle>  
                    <MDBCardText > {excerpt( description) } 
                    <Link to = { `/viewNotice/${_id}` } > Read More </Link>  
                    </MDBCardText > 
                    {/* <Badge > { category } </Badge>   */}
                    <span>
                        <MDBBtn
                            className = 'mt-1'
                            tag = 'a'
                            color = 'none'
                            onClick = {() => handleDelete(_id) } >
                            
                            <MDBIcon
                                fas
                                icon = 'trash'
                                style = {{ color: '#dd4e39' }}
                                size = 'lg'/>
                                
                        </MDBBtn>  
                            
                        <Link to = { `/addEditNotice/${_id}` } >
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