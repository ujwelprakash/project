import React from "react";
import './venue.css'
import star from '../images/star.png'
import image from '../images/topimg3.jpg'
import card2 from '../images/card2.jpg'
import card1 from '../images/card1.jpg'
import card3 from '../images/card3.jpg'
import card4 from '../images/card4.jpg'
import card5 from '../images/card5.jpg'
import card6 from '../images/card6.jpg'
import card7 from '../images/card7.jpg'
import card8 from '../images/card8.jpg'

function Venue() {
    return ( <div style = {{ backgroundColor: "black" }} >

<div
            className="position-relative text-center"
            style={{ width: '100%', overflow: 'hidden' }}
        >
            {/* Background Image */}
            <img style = {{ width: "100%", height: "500px" }} src = {image} alt = "img" />


            {/* Overlay Text */}
            <div
                className="position-absolute top-50 start-50 translate-middle text-white"
                style={{ padding: '20px', textAlign: 'center' }}
            >
                <p style={{ fontFamily:'montez',fontSize: 'clamp(4rem, 10vw, 6rem)', marginBottom: '10px' }}>
                    Dream Destination
                </p>
                <p style={{ fontFamily:'montez', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                    Plan your wedding at your dream location
                </p>
            </div>
        </div>

    <br/>
           
         <div className = " container-fluid venues " >
          
        <div style = {{ marginLeft: "30px" }} className = "row gy-4  text-center" >

        <p className = "col-lg-11" style = {{ color: "orange", fontSize: "35px" }} > venues </p> 

        <div className = " col-md-4 col-sm-12  there" >
        
        <div className = "venueone" >

        <img className = "cardoneimage"
        src = {card2}
        alt = "img" />

        <p style = {{ fontSize: "22px", paddingRight: "100px" }} > kingdom convention center </p>   
        <p style = {{ fontSize: "16px", paddingRight: "300px", marginTop: "-10px" }} > Thrissur </p>    
        
        <p style = {{ fontSize: "12px", float: "left", paddingLeft: "20px", marginTop: "-10px" }} > Lawns  Farmhouse </p>

        <div className = "ratebox" >
        <img style = {{ width: "12px", height: "12px", marginLeft: "-30px" }}
        src = {star}
        alt = "img" />

        <p style = {{ color: "orange", marginTop: "-20px", marginLeft: "10px" }} > 4.1 </p> 
        </div>
        
        <div className = "line" > </div>  
       
        <p style = {{ marginLeft: "-240px", marginTop: "10px", fontSize: "25px", color: "orange" }} >$ 1, 50, 000 </p> 
        <p style = { { marginTop: "-45px", paddingLeft: "200px" }} > Min.charges per day </p>

    </div>
    
    </div >
    <div className = " col-md-4 col-sm-6" >
        <div className = "venueone" > 
            <img className = "cardoneimage"
            src = {card1}
             alt = "img" />

        <p style = {{ fontSize: "22px", paddingRight: "130px" }} > Lulu Convention Center </p>  
        <p style = {{ fontSize: "16px", paddingRight: "300px", marginTop: "-10px" }} > Thrissur </p> 
         <p style = { { fontSize: "12px", float: "left", paddingLeft: "20px", marginTop: "-10px" }} > Wedding venue </p>

<div className = "ratebox" >
    
    <img style = {{ width: "12px", height: "12px", marginLeft: "-30px" }}
    src = {star}
     alt = "img" />
    
    <p style = {{ color: "orange", marginTop: "-20px", marginLeft: "10px" }} > 3.9 </p> 
    </div >

    <div className = "line" > </div> 

    <p style = {{ marginLeft: "-250px", marginTop: "10px", fontSize: "25px", color: "orange" }} >$ 70, 000 </p>

     <p style = { { marginTop: "-45px", paddingLeft: "200px" }} > Min.charges per day </p></div> </div>

<div className = " col-md-4 col-sm-6" >
    <div className = "venueone" >

    <img className = "cardoneimage"
         src = {card3}
         alt = "img" />

    <p style = {{ fontSize: "22px", paddingRight: "100px" }} > Thirssur Convention Center </p>
     <p style = { { fontSize: "16px", paddingRight: "300px", marginTop: "-10px" }} > Thrissur </p>  
     <p style = { { fontSize: "12px", float: "left", paddingLeft: "20px", marginTop: "-10px" }} > Wedding venue </p>
     
     <div className = "ratebox" >
    <img style = {{ width: "12px", height: "12px", marginLeft: "-30px" }}
                 src = {star}
                 alt = "img" />
    
    <p style = {{ color: "orange", marginTop: "-20px", marginLeft: "10px" }} > 4.5 </p> 
    
    </div >
    
    <div className = "line" > </div> <p style = { { marginLeft: "-250px", marginTop: "10px", fontSize: "25px", color: "orange" }} >
     $ 70, 000 </p>  

    <p style = {
    { marginTop: "-45px", paddingLeft: "200px" }} > Min.charges per day </p>
    </div> </div >
     <div className = " col-lg-4 col-sm-6" >

    <div className = "venueone" >

    <img className = "cardoneimage"
    src = {card4}
     alt = "img" />

    <p style = {{ fontSize: "22px", paddingRight: "120px" }} > Gold Convention Center </p> 
    <p style = { { fontSize: "16px", paddingRight: "300px", marginTop: "-10px" }} > Thrissur </p> 
     <p style = { { fontSize: "12px", float: "left", paddingLeft: "20px", marginTop: "-10px" }} > Wedding venue </p>

<div className = "ratebox" >
    <img style = {
        { width: "12px", height: "12px", marginLeft: "-30px" }
    }
src = {star}
alt = "img" />
    <p style = {
        { color: "orange", marginTop: "-20px", marginLeft: "10px" }
    } > 3.5 </p> </div >
    <div className = "line" > </div>  
    <p style = {
        { marginLeft: "-250px", marginTop: "10px", fontSize: "25px", color: "orange" }
    } >
    $ 40, 000 </p> <p style = { { marginTop: "-45px", paddingLeft: "200px" }
} > Min.charges per day </p>

</div></div >

<div className = " col-lg-4 col-sm-6" >
    <div
className = "venueone" >

    <img className = "cardoneimage"
src = {card5}
alt = "img" />

    <p style = {
        { fontSize: "22px", paddingRight: "180px" }
    } > Open Beach Resort </p> <p style = { { fontSize: "16px", paddingRight: "300px", marginTop: "-10px" }
} > Thrissur </p>  <p style = { { fontSize: "12px", float: "left", paddingLeft: "20px", marginTop: "-10px" }
} > Destination wedding </p>

<div className = "ratebox" >
    <img style = {
        { width: "12px", height: "12px", marginLeft: "-30px" }
    }
src = {star}
alt = "img" />
    <p style = {
        { color: "orange", marginTop: "-20px", marginLeft: "10px" }
    } > 4.7 </p> </div >
    <div className = "line" > </div>  
    <p style = {
        { marginLeft: "-250px", marginTop: "10px", fontSize: "25px", color: "orange" }
    } >
    $ 30, 000 </p>  
    <p style = {
    { marginTop: "-45px", paddingLeft: "200px" }
} > Min.charges per day </p>

</div></div >

<div className = " col-lg-4 col-sm-6" >
    <div
className = "venueone" >

    <img className = "cardoneimage"
src = {card6}
alt = "img" />

    <p style = {
        { fontSize: "22px", paddingRight: "200px" }
    } > Hill Spot Resort </p> <p style = { { fontSize: "16px", paddingRight: "300px", marginTop: "-10px" }
} > Thrissur </p>   
<p style = {
    { fontSize: "12px", float: "left", paddingLeft: "20px", marginTop: "-10px" }
} > Hill spot resort </p>

<div className = "ratebox" >
    <img style = {
        { width: "12px", height: "12px", marginLeft: "-30px" }
    }
src = {star}
alt = "img" />
    <p style = {
        { color: "orange", marginTop: "-20px", marginLeft: "10px" }
    } > 4.8 </p> </div >
    <div className = "line" > </div>  
    <p style = {
        { marginLeft: "-250px", marginTop: "10px", fontSize: "25px", color: "orange" }
    } >
    $ 50, 000 </p>  
    <p style = {
    { marginTop: "-45px", paddingLeft: "200px" }
} > Min.charges per day </p>

</div></div >

<div className = " col-lg-4 col-sm-6" >
    <div className = "venueone" >

    <img className = "cardoneimage"
src = {card7}
alt = "img" />

    <p style = {
        { fontSize: "22px", paddingRight: "180px" }
    } > Royal Wedding hall </p> <p style = { { fontSize: "16px", paddingRight: "300px", marginTop: "-10px" }
} > Thrissur </p>  <p style = { { fontSize: "12px", float: "left", paddingLeft: "20px", marginTop: "-10px" }
} > wedding </p>

<div className = "ratebox" >
    <img style = {
        { width: "12px", height: "12px", marginLeft: "-30px" }
    }
src = {star}
alt = "img" />
    <p style = {
        { color: "orange", marginTop: "-20px", marginLeft: "10px" }
    } > 4.1 </p> </div >
    <div className = "line" > </div>  
    <p style = {
        { marginLeft: "-250px", marginTop: "10px", fontSize: "25px", color: "orange" }
    } >
    $ 1, 50, 000 </p>  
    <p style = {
    { marginTop: "-45px", paddingLeft: "200px" }
} > Min.charges per day </p>

</div></div >

<div className = " col-lg-4 col-sm-6" >
    <div
className = "venueone" >

    <img className = "cardoneimage"
src = {card8}
alt = "img" />

    <p style = {
        { fontSize: "22px", paddingRight: "180px" }
    } > Royal Wedding hall </p> <p style = { { fontSize: "16px", paddingRight: "300px", marginTop: "-10px" }
} > Thrissur </p>   
<p style = {
    { fontSize: "12px", float: "left", paddingLeft: "20px", marginTop: "-10px" }
} > wedding </p>

<div className = "ratebox" >
    <img style = {
        { width: "12px", height: "12px", marginLeft: "-30px" }
    }
src = {star}
alt = "img" />
    <p style = {
        { color: "orange", marginTop: "-20px", marginLeft: "10px" }
    } > 4.1 </p> </div >
    <div className = "line" > </div>  
    <p style = {
        { marginLeft: "-250px", marginTop: "10px", fontSize: "25px", color: "orange" }
    } >
    $ 99, 999 </p>  
    <p style = {
    { marginTop: "-45px", paddingLeft: "200px" }
} > Min.charges per day </p>

</div></div >
<div className = "col-lg-4 col-sm-6" >
    <div className = "adding" >
    <p style = {
        { float: "left", marginTop: "150px", fontSize: "25px", marginLeft: "60px", color: "white" }
    } > ADDING MORE SOON </p> </div >
    </div>

</div> </div >

    </div>
)
}

export default Venue;