
import React,{useEffect,useRef,useState} from "react";
import {useNavigate} from "react-router"
import axios from "axios";
import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./home.css";
import image from '../images/first img.jpg'
import image1 from '../images/first card.jpg'
import image2 from '../images/second img.jpg'
import image3 from '../images/third img.jpg'
import image4 from '../images/4th img.jpg'
import image5 from '../images/5th img.jpg'
import image6 from '../images/6th img.jpg'
import './menu'


function Home(){

    const [name,setName] =useState()
const [email,setEmail] =useState()
const [phone,setPhone] =useState()
const [text,setText] =useState()
// const [errors,setErrors] =useState()

const navigate =useNavigate()
const handleSubmit  =(e)=>{
    e.preventDefault();
    
   
    if (!name){
        alert('name is required');
        return;
    }else if (name.length<3){
        alert('name must be 3 letters long');
        return;
    }
    if (!phone){
        alert('password is required');
        return;
    }else if (phone.length<11){
        alert('password must be at least 11 characters long');
        return;
    }window.location.reload();

   

    axios.post('http://localhost:3002/home',{name,email,phone,text})
    .then(result=>console.log(result))
    // navigate('/Customer')
    .catch(err=>console.log(err))
}

    const sectionRef = useRef(null);
    const { hash } = useLocation();

    useEffect(() => {
        if (hash === "#booking-form" && sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [hash]);
    return ( <div>
        
        <img  className="imggg"  src = {image} alt = "img" />

        <p  className = "mainpara" > Book Your Events </p> 

        <p className = "mainparatwo" > anywhere from kerala </p>

        <div className = " container-fluid  maintwo" >
        <div className = "row gy-4 text-center" >
        <p  className = "maintwopara" > our services </p>

 <div className = "col-lg-4 col-sm-12" >

        <img style = {{ width: "300px", height: "350px", borderRadius: "10px 10px 10px 10px" } }
        
        src = {image1}

        alt = "img" />

        <p style = {{ color: "white", fontSize: "23px", paddingTop: "10px" } } > Design & Decor </p> 
            {/* <Link to = "/book-now/1"
        className = "btn btn-primary"
        style = {
            { backgroundColor: "orange", borderRadius: "15px 15px 15px 15px" } } > Booknow </Link>   */}

        </div>

        <div className = " col-lg-4 col-sm-6" >

        <img style = {
            { width: "300px", height: "350px", borderRadius: "10px 10px 10px 10px" } }
        src = {image2}
        alt = "img" />
        <p style = {
            { color: "white", fontSize: "23px", paddingTop: "10px" } } > Wedding Venues </p> 
            {/* <Link to = "/book-now/2"
        className = "btn btn-primary"
        style = {
            { backgroundColor: "orange", borderRadius: "15px 15px 15px 15px" } } > Booknow </Link>   */}

        </div>

        <div className = "col-lg-4 col-sm-6" >

        <img style = {{ width: "300px", height: "350px", borderRadius: "10px 10px 10px 10px" } }
        src = {image3}
        alt = "img" />
        <p style = {
            { color: "white", fontSize: "23px", paddingTop: "10px" } } > Food & Deserts </p> 
            {/* <Link to = "/book-now/3"
        className = "btn btn-primary"
        style = {
            { backgroundColor: "orange", borderRadius: "15px 15px 15px 15px" } } > Booknow </Link>   */}

        </div>


        <div className = "col-lg-4 col-sm-6" >

        <img style = {
            { width: "300px", height: "350px", borderRadius: "10px 10px 10px 10px" } }
        src ={image4}
        alt = "img" />
        <p style = {
            { color: "white", fontSize: "23px", paddingTop: "10px" } } > video & photography </p> 
            {/* <Link to = "/book-now/4"
        className = "btn btn-primary"
        style = {
            { backgroundColor: "orange", borderRadius: "15px 15px 15px 15px" } } > Booknow </Link>   */}

        </div>


        <div className = "col-lg-4 col-sm-6" >

        <img style = {
            { width: "300px", height: "350px", borderRadius: "10px 10px 10px 10px" } }
        src = {image5}
        alt = "img" />
        <p style = {
            { color: "white", fontSize: "23px", paddingTop: "10px" } } > Music & Entertainment </p> 
            {/* <Link to = "/book-now/5"
        className = "btn btn-primary"
        style = {
            { backgroundColor: "orange", borderRadius: "15px 15px 15px 15px" } } > Booknow </Link>   */}

        </div>


        <div className = "col-lg-4 col-sm-6" >

        <img style = {
            { width: "300px", height: "350px", borderRadius: "10px 10px 10px 10px" } }
        src = {image6}
        alt = "img" />
        <p style = {
            { color: "white", fontSize: "23px", paddingTop: "10px" } } > Wedding Cakes </p> 
            {/* <Link to = "/book-now/6"
        className = "btn btn-primary"
        style = {
            { backgroundColor: "orange", borderRadius: "15px 15px 15px 15px" } } > Booknow </Link>   */}

        </div> 
        </div> 

    
       

            <section id="/" className="section1" style={{ padding: '50px 0' }}>
            <div className="container-fluid yourevent">
                <div className="row align-items-center">
                    {/* Left Side Text */}
                    <div className="col-lg-6 col-md-12 text-center text-md-start mb-5 mb-lg-0">
                        <p style={{ marginTop: '20px', fontSize: '40px', color: 'orange' }}>
                        Get A Free Extimate Now
                        </p>
                        <p style={{ fontSize: '55px'}}>Book Your Event Now</p>
                    </div>

                    {/* Right Side Form */}
                    <div className="col-lg-6 col-md-12">
                        <form onSubmit={handleSubmit} ref={sectionRef}>
                            <input
                                style={{ marginTop: '50px', color: 'gray' }}
                                type="text"
                                placeholder="Enter Name"
                                autoComplete="off"
                                name="name"
                                className="form-control rounded-0 mb-3"
                                onChange={(e) => setName(e.target.value)}
                            />

                            <input
                                style={{ marginTop: '20px' }}
                                type="email"
                                placeholder="Enter Email"
                                autoComplete="off"
                                name="email"
                                className="form-control rounded-0 mb-3"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <input
                                style={{ marginTop: '20px' }}
                                type="password"
                                placeholder="Enter Password"
                                autoComplete="off"
                                name="password"
                                className="form-control rounded-0 mb-3"
                                onChange={(e) => setPhone(e.target.value)}
                            />

                            <input
                                style={{ marginTop: '20px' }}
                                type="tel"
                                placeholder="Enter Phone"
                                autoComplete="off"
                                name="phone"
                                className="form-control rounded-0 mb-3"
                                onChange={(e) => setText(e.target.value)}
                            />

                            <button
                                type="submit"
                                className="btn btn-warning"
                                style={{
                                    width: '20%',
                                    backgroundColor: 'orange',
                                    borderRadius: '15px',
                                    color: 'white',
                                    marginTop: '40px',
                                }}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>


         </div>


         </div>

    )
}
export default Home;
