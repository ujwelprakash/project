import React from "react";
import './event.css'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import event1 from '../images/event1.jpg'
import event2 from '../images/event2.jpg'
import event3 from '../images/event3.jpg'
import event4 from '../images/event4.jpg'


function Events() {
    return ( <div className = "container-fluid" >

        <div className = "row gy-4 text-center" >

        <div className = "yellowboxone" >

        <p className = "fontcentury"
        style = {
            { fontSize: "145px",fontFamily:'montez' } } > Event Made Easy </p>   

        <p style = {
            { fontSize: "55px",fontFamily:'montez' } } > Choose Your Desired Events </p> 

        </div >

        </div>

        <div className = "row" >

        <div className = "blackboxone" >

        <div className = "row" >

        <div className = "col-md-4" >

        <img style = {{ marginTop: "-400px", width: "360px", height: "380px", borderRadius: "10px 10px 10px 10px" } }
        src = {event1}
        alt = "img" />

        </div>

         <p className = "wedding col-md-8" > Wedding & Engagment </p>   
         
        </div>

        <div className = "row" >

        <div  className = "weddingpara col-md-6" >

        <p style = {
            { fontSize: "30px", fontFamily: "Gothic A1", textAlign: "justify" } } >
        A wedding can be a simple civil ceremony at City Hall or an elaborate event that takes place over several days and involves religious rituals,
        food and drink, and hundreds of guests.As an adjective, wedding describes anything related to the ceremony, like wedding cakes and wedding dresses.. </p>

        </div>

        </div>
        
           <div className = "button col-md-11" >

        {/* <Link to = "/book-now/7"
        className = 'btn btn-primary'
        style = {
            { backgroundColor: "orange", borderRadius: "15px 15px 15px 15px", } } > Book Now </Link>   */}

        </div>

        </div> 

        </div >

        <div className = "row" >

        <div className = "whiteboxone" >

        <div className = "row" >

        <p className = "bridal col-md-8"> Bridal Show Management </p> 

        <div className = "brideimg col-md-4" >

        <img style = {
            { width: "360px", height: "380px", borderRadius: "10px 10px 10px 10px" } }
        src = {event2}
        alt = "img" />

        </div>

        </div> 

        <div className = "container" >

        <div className = "row" >

        <div className = "col-md-6" > </div> 

        <div className = "col-md-6  mt-5" >

        <p style = {
            { fontSize: "30px", fontFamily: "Gothic A1", textAlign: "justify" } } >
        A bridal show is a large gathering of a(also called a wedding show or wedding expo) variety of local wedding vendors in a single space— typically a hotel ballroom or convention center.Engaged couples attend the event to meet with vendors and view and sample their work in real life. </p>    

        </div>  

        </div> 

        </div>

        <div style = {
            { marginLeft: "50px" } }
        className = "col-md-12 mt-3" >

        {/* <Link to = "/book-now/8"
        className = 'btn btn-primary'
        style = {
            { backgroundColor: "black", color: "orange", borderRadius: "15px 15px 15px 15px" } } > Book Now </Link>  */}
            
            </div >

        </div>  
        </div> 

        <div className = "row" >

        <div className = "yellowboxtwo" >

        <div className = "row" >

        <div className = "birthimg col-md-4" >

        <img style = {
            { width: "360px", height: "380px", borderRadius: "10px 10px 10px 10px" }
        }
        src = {event3}
        alt = "img" />

        </div>

        <p className = "birthtag col-md-8" > Birthday Party Planning </p>

        </div> 

        <div className = "birthpara col-md-6  " >
            
        <p style = {
            { textAlign: "justify", fontSize: "30px", fontFamily: "sans-serif" } } >
        Birthday parties are an occasion that everyone likes to celebrate.It is a personal affair that everyone wants to share with their near and dear ones.People celebrate birthdays from childhood to adulthood.A birthday party is a party to celebrate the anniversary of someone 's birth. </p> 

        </div> 
        
         {/* <Link to = "/book-now/9"
        className = 'birthbutton btn btn-primary'
        style = {
            { backgroundColor: "white", color: "black", borderRadius: "15px 15px 15px 15px" } } >
        Book Now  </Link>     */}
        
        </div>  
        
        </div >


        <div className = "row" >

        <div className = " blackboxtwo" >

        <div className = "row" >

        <p className = "babytag col-md-8">Baby Shower Planning </p> 

        <div className = "babyimg col-md-4" >

        <img style = {
            {  width: "360px", height: "380px", borderRadius: "10px 10px 10px 10px" } }
        src = {event4}
        alt = "img" />

        </div>  

        </div>

        <div className = "row" >

        <div className = "col-md-6" > </div>  
        <p className =  "babypara col-md-6"
        style = {{ paddingTop:"80px", textAlign: "justify", fontSize: "30px", fontFamily: "sans-serif" }}>
        The mom - to - be and the baby - to - be are the focal point of these parties.The purpose of a baby shower is to show emotional support
        for the mom, as well as to bring together a lot of the items needed to take care of a baby as gifts to the new mom. </p>   

        </div>

        {/* <Link to = "/book-now/10"
        className = '  btn btn-primary'
        style = {{  backgroundColor: "orange", borderRadius: "15px 15px 15px 15px" } } > Book Now 1 </Link>   */}

        </div>  
        </div>
           </div>
    )
}

export default Events;