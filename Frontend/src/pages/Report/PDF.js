import React from 'react';
import { render } from 'react-dom';
import ReactToPrint from 'react-to-print';
import { MDBBtn } from 'mdb-react-ui-kit';

const ref = React.createRef();

// import { ComponentToPrint } from './ComponentToPrint';

class ComponentToPrint extends React.Component {        
    render(){
    return (
        <div className='Report' ref={ref} style={{textAlign:"center", marginTop:'10px'}}>
            {/* <h1>{ props.name }</h1>
            <p>{ props.description }</p>
            <h1>{ props.name }</h1>
            <p>{ props.description }</p>
            <h1>{ props.name }</h1>
            <p>{ props.description }</p>
            <h1>{ props.name }</h1>
            <p>{ props.description }</p> */}
            Hello World!
        </div>
    );
}
}

class PDF extends React.Component {
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => {
                          return <MDBBtn style={{marginTop:'50px'}}>Print this out!</MDBBtn>;
                    }}
                    content={()=> this.componentRef}
                />
                <ComponentToPrint ref={el => (this.componentRef = el)} />
            </div>
        );
    }
}

// const PDF = () => {
//     return <div>Hii</div>;
// };

render(<PDF/>, document.querySelector("#root"));

export default PDF;