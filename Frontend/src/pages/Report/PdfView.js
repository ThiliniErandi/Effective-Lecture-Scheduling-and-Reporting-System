import React from 'react';
import { render } from 'react-dom';
import ReactToPrint from 'react-to-print';
import { MDBBtn } from 'mdb-react-ui-kit';

const ref = React.createRef();

class ComponentToPrint extends React.Component {        
    
    render(){
    return (
        <div className='Report' ref={ref} style={{textAlign:"center", marginTop:'10px'}}>
            <h1>{ this.props.name }</h1>
            <p> { this.props.description}</p>
        </div>
    );
}}

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
                <ComponentToPrint ref={el => (this.componentRef = el)}
                   name={this.props.name}
                   description={this.props.description}/>
            </div>
        );
    }
}

render(<PDF/>, document.querySelector("#root"));

export default PDF;