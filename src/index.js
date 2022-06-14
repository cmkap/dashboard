import React from 'react';
import ReactDOM from 'react-dom';

// hook up react application to to root
import './index.css'
import App from './App';
import { ContextProvider } from "./contexts/ContextProvider"

ReactDOM.render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>
    , document.getElementById('root')
    );