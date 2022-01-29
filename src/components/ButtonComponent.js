import Button from 'react-bootstrap/Button';

export default function ButtonComponent(props) {
  return <div >
             <Button 
                variant={props.variant} 
                style=
                    {{
                      width: '300px',
                      height: '35px',
                      letterSpacing: '2px',
                      fontSize: '15px',
                      paddingBottom: '5px',
                      borderRadius: '0px'
                    }}
            >{props.name}</Button>
        </div>;
}
