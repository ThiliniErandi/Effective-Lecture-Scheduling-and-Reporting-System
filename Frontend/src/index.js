import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './custom.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ContextWrapper from './context/ContextWrapper';

import "./assets/css/index.css";
import { UsersProvider } from "./context/usersContext";
import { SocketProvider } from "./context/socketContext";

ReactDOM.render( 
    <React.StrictMode>
        <ContextWrapper>
            <SocketProvider>
                <UsersProvider>
                    <App/>
                </UsersProvider>
            </SocketProvider>
        </ContextWrapper>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

    // "@material-ui/core": "^4.12.3",
    // "@material-ui/icons": "^4.11.2",