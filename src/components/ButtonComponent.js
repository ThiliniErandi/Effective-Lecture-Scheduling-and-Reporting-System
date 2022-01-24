import React from 'react';
import Button from 'react-bootstrap/Button';

export default function ButtonComponent(props) {
  return <div >
             <Button 
                variant={props.variant} 
                style=
                    {{
                    fontFamily: 'Montserrat',
                    marginRight: '60px',
                    width: '150px',
                    height: '50px',
                    letterSpacing: '1px',
                    fontSize: '20px',
                    }}
            >{props.name}</Button>
        </div>;
}
