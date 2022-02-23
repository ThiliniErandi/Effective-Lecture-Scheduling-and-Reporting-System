import React from 'react'
import { MDBBadge } from 'mdb-react-ui-kit'

const Badge = ({ children, styleInfo }) => {
    const colorKey = {
        First: "warning",
        Second: "secondary",
        Third: "success",
        Fourth: "danger"
    }
    return ( 
        <h5 style = { styleInfo } >
        <MDBBadge color = { colorKey[children] } > { children } </MDBBadge> 
        </h5>
    )
}

export default Badge;