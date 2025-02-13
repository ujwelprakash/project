import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router"
import axios from "axios";
import './userlogin.css';
import '../images/reglogin.jpg'

function Customer() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3002/Customer', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === 'success') {
                    navigate('/home')
                } else alert('password is not correct');
                return;

            })

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
        div className = "relogin" > < /div>

        <
        div className = "data" >

        <
        form onSubmit = { handleSubmit } >

        <
        label htmlFor = "email"
        style = {
            { paddingTop: "170px", paddingRight: "300px" } } > Email: < /label> <br/ >

        <
        input style = {
            { marginLeft: "60px", width: "300px" } }
        type = "email"
        placeholder = "Enter Email"
        autoComplete = "off"
        name = "email"
        className = "form-control rounded-0"
        onChange = {
            (e) => setEmail(e.target.value)
        }
        />

        <
        br / >

        <
        label htmlFor = "password"
        style = {
            { paddingTop: "50px", paddingRight: "280px" }
        } > Password: < /label> <br/ >

        <
        input style = {
            { marginLeft: "60px", width: "300px" }
        }
        type = "password"
        placeholder = "Enter Password"
        autoComplete = "off"
        name = "password"
        className = "form-control rounded-0"
        onChange = {
            (e) => setPassword(e.target.value)
        }
        />

        <
        br / > < br / >

        <
        button style = {
            { width: "100px", backgroundColor: "orange", borderRadius: "15px 15px 15px 15px" }
        }
        type = "submit"
        className = "btn w-50 " > Login < /button> <br/ > < br / >

        <
        /form> <p > Don "t have account?</p >
        <
        Link to = "/Register"
        style = {
            { backgroundColor: "lightgrey" } }
        className = "btn btn-default border w-20 rounded-10 " > Register < /Link> <
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

        <
        /div>

    )
}
export default Customer;