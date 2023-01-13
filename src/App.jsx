import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CustomContextProvider } from './components/CustomContext';
import Header from './components/Header';
import Router from './components/Router';

function App() {
    return (
        <CustomContextProvider>
            <BrowserRouter>
                <Header />
                <Router />
            </BrowserRouter>
        </CustomContextProvider>
    );
}

export default App;
