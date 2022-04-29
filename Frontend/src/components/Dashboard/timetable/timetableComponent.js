import React from 'react';
import {
    MDBCol,
    MDBCard,
    MDBCardTitle,
    // MDBCardBody,
    MDBCardImage,
    MDBCardOverlay,
    // MDBContainer,
    MDBCardText,
    MDBBtn,
    MDBIcon,
    // MDBRow
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
// import Badge from './Badge'

const timetableComponent = ({ timetable_id, name, batch_id, lecturer_id, rep_id, handleDelete, _id }) => {
        return ( 
        < MDBCol size = '4'
            style = {{ paddingBottom: '20px' } } >

            <MDBCard background='dark' 
                    className='text-white w-100' 
                    style={{marginRight:'0px', paddingRight:'0px'}}>

                <MDBCardImage 
                    overlay dark
                    src='../assets/images/timetable/timetablecard2.jpg'
                    alt = 'title'
                    position = 'top'
                    style = {{ maxWidth: '100%', height: '200px', backgroundColor:'black', opacity:'0.5' }}/>
                
                <MDBCardOverlay>
                    <MDBCardTitle style={{marginTop:'100px', textAlign:'left', color:'white'}}> {timetable_id}</MDBCardTitle>   
                    <MDBCardText style={{marginTop:'5px', textAlign:'left'}}> {name}
                        
                        {/* <Link to = { `/viewNotice/${id}` } > Read More </Link>    */}
                        <span style={{marginLeft:'180px'}}>
                            <MDBBtn className = 'mt-1'
                                    tag = 'a'
                                    color = 'none'
                                    onClick = {() => handleDelete(_id)} 
                                >
                                <MDBIcon fas icon = 'trash'
                                        style = {{ color: '#dd4e39' }}
                                        size = 'lg'/>
                            </MDBBtn>  

                            <Link to = { `/addEditNotice/${_id}` } >
                                <MDBIcon fas icon = 'edit'
                                    style = {{ color: '#75acee', marginLeft:'10px' }}
                                    size = 'lg'/>
                            </Link>  

                        </span >
                    </MDBCardText> 
                    {/* <Badge > { category } </Badge>   */}
                </MDBCardOverlay> 
            </MDBCard > 
        </MDBCol> 
    )
};
        
export default timetableComponent;
