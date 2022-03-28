import React from 'react';

const report = ({ name, description }) => {
    return <>
       
        <tr>
          <td>{ name }</td>
          <td>{ description }</td>
        </tr>
    
        </>
  ;
};


export default report;