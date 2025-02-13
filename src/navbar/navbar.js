// 



import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './navbar.css'
import { Link, Navigate } from "react-router-dom";



const Navbarone = ({ isAuthenticated, handleLogin, handleLogout }) => {
    // State to toggle Admin button visibility
    const [showAdmin, setShowAdmin] = useState(false);

    // Function to handle clicking on the brand
    const handleBrandClick = () => {
        setShowAdmin((prevShowAdmin) => !prevShowAdmin);
    };

    return ( <
        Navbar style = {
            { backgroundColor: 'black', width: '100%' } }
        expand = "lg"
        variant = "dark"
        className = "n" >
        { /* Brand Section with onClick handler */ } <
        Navbar.Brand onClick = { handleBrandClick }
        style = {
            { cursor: 'pointer' } } >
        <
        div style = {
            { display: 'flex', flexDirection: 'column' } } >
        <
        p style = {
            {
                color: 'orange',
                fontSize: '30px',
                marginBottom: '0',
                marginLeft: '30px',
            }
        } >
        ORAM <
        /p> <
        p style = {
            {
                color: 'orange',
                fontSize: '15px',
                marginTop: '-10px',
                marginLeft: '30px',
            }
        } >
        Event Planners & Services <
        /p> <
        /div> <
        /Navbar.Brand>

        { /* Navbar Toggle for Mobile View */ } <
        Navbar.Toggle ariacontrols = "basic-navbar-nav"
        className = "c" / >

        { /* Collapsible Navbar Section */ } <
        Navbar.Collapse id = "basic-navbar-nav" > { /* Left Navigation Links */ } <
        Nav className = "ms-auto"
        style = {
            { paddingLeft: '500px' } } >
        <
        Nav.Link href = "/"
        style = {
            { color: 'orange', marginLeft: '35px', fontSize: '20px' } } >
        Home <
        /Nav.Link> <
        Nav.Link href = "/About"
        style = {
            { color: 'orange', marginLeft: '35px', fontSize: '20px' } } >
        About Us <
        /Nav.Link> <
        Nav.Link href = "/Venue"
        style = {
            { color: 'orange', marginLeft: '35px', fontSize: '20px' } } >
        Venues <
        /Nav.Link> <
        Nav.Link href = "/Events"
        style = {
            { color: 'orange', marginLeft: '35px', fontSize: '20px' } } >
        Events <
        /Nav.Link> <
        Nav.Link href = "/Menu"
        style = {
            { color: 'orange', marginLeft: '35px', fontSize: '20px' } } >
        Menu <
        /Nav.Link> <
        Nav.Link href = "/Customer"
        style = {
            { color: 'orange', marginLeft: '35px', fontSize: '20px' } } >
        Login <
        /Nav.Link> <
        /Nav>

        { /* Authentication Links */ } <
        Nav className = "ms-auto"
        style = {
            { paddingLeft: '20px' } } > { /* Conditionally show the Admin button based on the brand click */ } {
            showAdmin && (
                isAuthenticated ? ( <
                    button onClick = { handleLogout }
                    style = {
                        {
                            backgroundColor: 'orange',
                            border: 'none',
                            color: 'white',
                            fontSize: '20px',
                            marginLeft: '35px',
                            padding: '5px 15px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }
                    } >
                    Logout <
                    /button>
                ) : ( <
                    Link to = "/Adminlogin"
                    style = {
                        {
                            backgroundColor: 'orange',
                            border: 'none',
                            color: 'white',
                            fontSize: '20px',
                            marginLeft: '35px',
                            padding: '5px 15px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            textDecoration: 'none'
                        }
                    } >
                    Admin <
                    /Link>
                )
            )
        } <
        /Nav> <
        /Navbar.Collapse> <
        /Navbar>
    );
};

export default Navbarone;