import React from "react"
import './styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import CssBaseline from "@mui/material/CssBaseline";
import Router from "./app/router/Router";
import {createStore} from "redux";
import {Provider} from "react-redux"
import configureStore from "./app/redux/store";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import {ThemeProvider} from "@mui/material";

function App() {

    return (
        <React.Fragment>
            <CssBaseline/>
            <Provider store={configureStore()}>
                <ErrorBoundary>
                    <Router/>
                </ErrorBoundary>
            </Provider>
            <ToastContainer/>
        </React.Fragment>
    );
}

export default App;
