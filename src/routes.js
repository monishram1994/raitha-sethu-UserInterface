import React from 'react';
import { Redirect } from "react-router-dom";
import Header from './components/Header';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register'

export default[
    {
        path: "/",
        exact: true,
        component: HomePage
        //component: ()=> <Redirect to="HomePage" />
    },
    {
        path: "/HomePage",
        component: HomePage
    },
    {
        path: "/Header",
        component : Header
    },
    {
        path: "/Login",
        component : Login
    },
    {
        path: "/Register",
        component : Register
    }
]