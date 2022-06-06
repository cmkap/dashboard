import React from 'react';
import ReactDOM from 'react-dom';

// hook up react application to to root
import './index.css'
import App from './App';
import { ContextProvider } from "./contexts/ContextProvider"

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>
    , document.getElementById('root')
    );