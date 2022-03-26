import React from 'react'
import { MDBBadge } from 'mdb-react-ui-kit'

const Badge = ({ children, styleInfo }) => {
    const colorKey = {
        CIS: "warning",
        FST: "secondary",
        PST: "primary",
        NR: "success",
        SPORTS: "danger"
    }
    return ( 
        <h5 style = { styleInfo } >
        <MDBBadge color = { colorKey[children] } > { children } </MDBBadge> 
        </h5>
    )
}

export default Badge;