import React from 'react';
import {
    MDBCol,
    MDBCard,
    MDBCardTitle,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBBtn,
    MDBIcon,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Badge from '../../components/noticeBoard/Badge'

const Notices = ({ title, category, description, id, imageUrl, handleDelete }) => {
    return <div >
        <
        MDBCol size = '4' >
        <
        MDBCard className = 'h-100 mt-2'
    style = {
            { maxWidth: '22rem' }
        } >
        <
        MDBCardImage
    src = { imageUrl }
    alt = { title }
    position = 'top'
    style = {
        { maxWidth: '100%', height: '180px' }
    }
    /> <
    MDBCardBody >
        <
        MDBCardTitle > { title } < /MDBCardTitle> <
    MDBCardText > { description } <
        Link to = { `/notice/${id}` } > Read More < /Link> < /
        MDBCardText >
        <
        Badge > { category } < /Badge> <
    span >
        <
        MDBBtn
    className = 'mt-1'
    tag = 'a'
    color = 'none'
    onClick = {
            () => handleDelete(id)
        } >
        <
        MDBIcon
    fas
    icon = 'trash'
    style = {
        { color: '#dd4e39' }
    }
    size = 'lg' /
        >
        <
        /MDBBtn> <
    Link to = { `/editNotice/${id}` } >
        <
        MDBIcon
    fas
    icon = 'edit'
    style = {
        { color: '#75acee', marginLeft: '10px' }
    }
    size = 'lg' /
        >
        <
        /Link> < /
        span > <
        /MDBCardBody> < /
        MDBCard > <
        /MDBCol> < /
        div > ;
};


export default Notices;