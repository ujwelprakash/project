import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './footer.css';


function Footer() {
    return (

        <div className = "container-fluid footer" >
        <div className = "row" >
        <p className = "col-md-6 copyrights" > copyright 2024 - oram events | Wedding planners </p>

        <p className = "col-md-6"
        style = {
            { fontSize: "22px", paddingLeft: "200px", paddingTop: "30px" } } > privacy policy </p> </div>

        </div>
    )
}

export default Footer;