import React, { useState } from "react";
import { useNavigate } from "react-router"
import { Link } from "react-router-dom";
import axios from "axios";
import './register.css'
import '../images/log.jpg'



function Register() {


    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
        // const [errors,setErrors] =useState()

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('name is required');
            return;
        } else if (name.length < 3) {
            alert('name must be 3 letters long');
            return;
        }
        if (!password) {
            alert('password is required');
            return;
        } else if (password.length < 6) {
            alert('password must be at least 6 characters long');
            return;
        }



        axios.post('http://localhost:3002/register', { name, email, password })
            .then(result => console.log(result))
        navigate('/Customer')
            .catch(err => console.log(err))
    }


    return (


        <
        div className = "container-fluid" >

        <
        div className = "row" >

        <
        div className = "rect" >

        <
        div className = "row" >

        <
        div className = "mx-auto recttwo" >

        <
        div className = "row" >

        <
        div className = "image" > < /div>

        <
        div className = "data" >
        <
        form onSubmit = { handleSubmit } >

        <
        label style = {
            { paddingTop: "130px", paddingRight: "300px" } }
        htmlFor = "name" > name: < /label> <br/ >

        <
        input style = {
            { width: "300px", marginLeft: "60px" } }
        type = "text"
        placeholder = "Enter Name"
        autoComplete = "off"
        name = "name"
        className = "form-control rounded-0"
        onChange = {
            (e) => setName(e.target.value) }
        /> < br / > < br / >


        <
        label style = {
            { paddingRight: "300px" } }
        htmlFor = "email" > email < /label> <br/ >

        <
        input style = {
            { width: "300px", marginLeft: "60px" } }
        type = "email"
        placeholder = "Enter Email"
        autoComplete = "off"
        name = "email"
        className = "form-control rounded-0"
        onChange = {
            (e) => setEmail(e.target.value) }
        />< br / > < br / >

        <
        label style = {
            { paddingRight: "270px" } }
        htmlFor = "password" > password < /label>

        <
        input style = {
            { width: "300px", marginLeft: "60px" } }

        type = "password"
        placeholder = "Enter Password"
        autoComplete = "off"
        name = "password"
        className = "form-control rounded-0"
        onChange = {
            (e) => setPassword(e.target.value) }
        />   <br / > < br / >

        <
        button style = {
            { backgroundColor: "orange", borderRadius: "15px 15px 15px 15px" } }
        type = "submit"
        className = "btn  w-50 " > Register < /button>

        <
        /form> <
        p > Already have account ? < /p> <
        Link to = "/Customer"
        style = {
            { backgroundColor: "lightgrey" } }
        className = "btn btn-default border w-20 rounded-10 " > Login < /Link> 

        <
        /div>  <
        /div> 

        <
        /div>

        <
        /div>

        <
        /div>

        <
        /div>

        <
        /div>



    )
}

export default Register;