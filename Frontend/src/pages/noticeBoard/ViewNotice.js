import React, { useState, useEffect } from 'react';
import {
    MDBIcon,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardText,
    MDBCardTitle,
    MDBCardBody,
    MDBCardImage,
    MDBTypography
} from 'mdb-react-ui-kit';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Badge from '../../components/noticeBoard/Badge';
import { toast } from 'react-toastify';
import './notice.css';

const ViewNotice = () => {
    const [notice, setNotice] = useState();
    const [relatedNotice, setRelatedNotice] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getSingleNotice();
        }
    }, [id])

    const getSingleNotice = async () => {

        const response = await axios
            .get(`http://localhost:8070/notices/get/${id}`);

        const relatedNoticeData = await axios
            .get(`http://localhost:8070/notices/get?category=${response.data.category}&_start=0&_end=3`);

        if (response.status === 200 || relatedNoticeData.status === 200) {
            setNotice(response.data);
            setRelatedNotice(relatedNoticeData.data);
        } else {
            toast.error("Something went wrong");
        }
    };

    const excerpt = (str) => {
        if (str.length > 60) {
            str = str.substring(0, 60) + " ... ";
        }
        return str;
    };

    const styleInfo = {
        display: 'inline',
        marginLeft: '5px',
        float: ' right',
        marginTop: '7px'
    }

    return (
        <MDBContainer style={{ border: '1px solid #d1ebe8' }} >

            <Link to="/noticeHome" >
                <strong className='mt-3' style={{ float: 'left', color: 'black' }} >
                    Go Back </strong>
            </Link>

            <MDBTypography className='text-muted mt-2'
                tag='h2'
                style={{ display: 'inline-block' }} >
                {notice && notice.title} </MDBTypography>

            <img src={notice && notice.imgUrl}
                alt={notice && notice.title}
                className='img-fluid-rounded'
                style={{ width: '100%', maxHeight: '600px' }}
            />

            <div style={{ marginTop: '200px' }} >
                <div style={{ height: '43px', background: '#f6f6f6' }} >
                    <MDBIcon style={{ float: 'left' }}
                        className='mt-3'
                        far icon='calender-alt'
                        size='lg' />
                    <strong style={{ float: 'left', marginTop: '12px', marginLeft: '2px' }}>
                        {notice && notice.date} </strong>
                    <Badge style={styleInfo} > {notice && notice.category} </Badge>
                </div>
                <MDBTypography className='lead md-0' > {notice && notice.description} </MDBTypography>
            </div> {relatedNotice && relatedNotice.length > 0 && (
                <>
                    {relatedNotice.length > 1 && (<
                        h1 className='related-notices' > Related Notices </h1>
                    )}
                    <MDBRow className='row-cols-1 row-cols-md-3 g-4' >
                        {relatedNotice
                            .filter((item) => item.id !== id)
                            .map((item, index) => {
                                <MDBCol >
                                    <MDBCard >
                                        <Link to={`/notice/${item.id}`} >
                                            <MDBCardImage
                                                src={item.imageUrl}
                                                alt={item.title}
                                                position='top' />
                                        </Link>
                                        <MDBCardBody >
                                            <MDBCardTitle > {item.title} </MDBCardTitle>
                                            <MDBCardText > {excerpt(item.description)} </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            })
                        }
                    </MDBRow>
                </>
            )
            }
        </MDBContainer>
    );
};

export default ViewNotice;