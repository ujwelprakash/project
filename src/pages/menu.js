import React from "react";
import './home'
import './menu.css'
import { Link, useNavigate } from "react-router-dom";
import chat from '../images/chattisgarh-wedding-food.jpg'
import photo2 from '../images/photo2.jpg'
import photo3 from '../images/photo3.jpg'
import photo4 from '../images/photo4.jpg'
import item1 from '../images/item1.jpg'
import item2 from '../images/item2.jpg'
import item3 from '../images/item3.jpg'
import item4 from '../images/item4.jpg'
import item6 from '../images/item6.jpg'
import item7 from '../images/item7.jpg'
import item8 from '../images/item8.jpg'
import item9 from '../images/item9.jpg'
import item10 from '../images/item10.jpg'
import item11 from '../images/item5.jpg'




function Menu() {
    const navigate = useNavigate();

    const handleBookNowClick = () => {
        navigate('/#booking-form');
    };

    return ( < div className = "container-fluid" >

        <
        div className = "row gy-4 text-center" >

        <
        div className = "foodimage" >

        <
        div className = "position-absolute top-50 start-50 translate-middle text-white"
        style = {
            { padding: '20px', textAlign: 'center' } } >
        <
        p style = {
            { fontFamily: 'montez', fontSize: 'clamp(4rem, 10vw, 6rem)', marginBottom: '10px' } } >
        Delicious cousine <
        /p> <
        p style = {
            { fontFamily: 'montez', fontSize: 'clamp(2rem, 5vw, 3rem)' } } >
        Discover The Menu <
        /p> <
        /div>

        <
        /div>  

        <
        /div>

        <
        div className = "row" >

        <
        div className = "maincategory" >

        <
        p style = {
            { color: "orange", fontSize: "30px", textAlign: "center", marginTop: "30px" } } > Main Category < /p>

        <
        div className = "container-fluid" >

        <
        div className = "row" >

        <
        div className = "col-sm-2 col-md-1" > < /div>

        <
        div className = "col-sm-6 col-md-11" >

        <
        div style = {
            { alignContent: "center", marginTop: "100px" } }
        className = " whitebox" >

        <
        img className = "col-md-4"
        style = {
            { borderRadius: "10px 10px 20px 20px", height: "250px", float: "left" } }
        src = { chat }
        alt = "img" / >

        <
        p className = "col-md-7 standardmenu" > Standard Menu < /p>      

        <
        p style = {
            { textAlign: "justify" } }
        className = "col-md-6 traditional" > Traditional formal menu, suits
        for regular occasions with two course dish choices. < /p> <
        button onClick = { handleBookNowClick }
        className = "btn btn-primary"
        style = {
            { width: "100px", marginTop: "100px", color: "white", backgroundColor: "orange" } } > Booknow < /button> <
        /div>     <
        /div>     <
        /div>     <
        /div> 

        <
        div className = "container-fluid" >
        <
        div className = "row" >
        <
        div className = "col-md-1" > < /div>

        <
        div className = "col-md-11" >
        <
        div style = {
            { alignContent: "center", marginTop: "20px" } }
        className = " whitebox" >

        <
        img className = "col-md-4"
        style = {
            { borderRadius: "10px 10px 20px 20px", height: "250px", float: "left" } }
        src = { photo2 }
        alt = "img" / >
        <
        p className = "col-md-7 standardmenu" > Classy Menu < /p>  

        <
        p style = {
            { textAlign: "justify" } }

        className = "col-md-6 traditional" > Modern format menu, suits
        for stylish occasions with more dish choices. < /p>

        <
        button onClick = { handleBookNowClick }
        className = "btn btn-primary"
        style = {
            { width: "100px", marginTop: "100px", color: "white", backgroundColor: "orange" } } > Booknow < /button> <
        /div>     <
        /div>     <
        /div>     <
        /div> 

        <
        div className = "container-fluid" >
        <
        div className = "row" >
        <
        div className = "col-md-1" > < /div>

        <
        div className = "col-md-11" >
        <
        div style = {
            { alignContent: "center", marginTop: "20px" } }
        className = " whitebox" >

        <
        img className = "col-md-4"
        style = {
            { borderRadius: "10px 10px 20px 20px", height: "250px", float: "left" } }
        src = { photo3 }
        alt = "img" / >
        <
        p className = "col-md-7 standardmenu" > Elegent Menu < /p>       <
        p style = {
            { textAlign: "justify" }
        }
        className = "col-md-6 traditional" >
        Menu to suit every palate with variety of choices and professionally desighed layouts. < /p>

        <
        button onClick = { handleBookNowClick }
        className = "btn btn-primary"
        style = {
            { width: "100px", marginTop: "100px", color: "white", backgroundColor: "orange" } } > Booknow < /button>

        <
        /div>     <
        /div>     <
        /div>     <
        /div> 

        <
        div className = "container-fluid" >
        <
        div className = "row" >
        <
        div className = "col-md-1" > < /div>

        <
        div className = "col-md-11" >
        <
        div style = {
            { alignContent: "center", marginTop: "20px" } }
        className = " whitebox" >

        <
        img className = "col-md-4"
        style = {
            { borderRadius: "10px 10px 20px 20px", height: "250px", float: "left" } }
        src = { photo4 }
        alt = "img" / >
        <
        p className = "col-md-7 standardmenu" > Executive Menu < /p>       <
        p style = {
            { textAlign: "justify" } }
        className = "col-md-6 traditional" >
        Menu to suit
        for corporate parties that satisfie the hearty appetite as well as the format palette < /p>

        <
        button onClick = { handleBookNowClick }
        className = "btn btn-primary"
        style = {
            { width: "100px", marginTop: "100px", color: "white", backgroundColor: "orange" } } > Booknow < /button>


        <
        /div>     <
        /div>     <
        /div>     <
        /div>  <
        /div> <
        /div> 



        <
        div className = "row" >
        <
        div className = " specialoffer" >

        <
        p style = {
            { color: "orange", fontSize: "25px", textAlign: "center" } } > special offers < /p> 

        <
        p style = {
            { color: "orange", fontSize: "35px" } } > Lunch & Dinner Menu < /p>

        <
        div className = "row" >

        <
        div className = "col-md-1" > < /div>

        <
        div className = "col-sm-12 col-md-4" >

        <
        div className = "lunchmenu" >

        <
        p className = "col-md-4 lunch" > Lunch Menu < /p>

        <
        div className = "row" >

        <
        div className = "col-md-3" >

        <
        img className = "itemone"
        src = { item1 }
        alt = "img" / >

        <
        /div>

        <
        div className = "col-md-5" >

        <
        p id = "well"
        className = "welcomedrink" > WELCOME DRINKS < /p> 

        <
        /div>

        <
        div className = "col-md-10" >

        <
        p className = "mango" > Mango Smoothie, Passion Fruit Delight, Tender Coconut Punch, Graph Punch, Green Mango Delight, Guava Punch Mixed Fruit Punch, Pineapple Punch, Mint lime,
        Ginger Lime, Salty Lemon < /p>

        <
        /div>

        <
        /div>

        <
        div className = "row" >

        <
        div className = "col-md-3" >

        <
        img className = "itemone"
        src = { item2 }
        alt = "img" / >

        <
        /div>

        <
        div className = "col-md-2" >

        <
        p className = "welcomedrink" > STARTERS < /p> 

        <
        /div>

        <
        div className = "col-md-10" >

        <
        p className = "mango" > Chicken Lollipop, Chicken 65, Tikka, Chicken Nuggets, Chicken Spring Roll, Fish Finger Fry,
        Kozhuva Fry, Squid Batter Fry, Prawns Tempura, Butter Grilled Prawns Prwans Golden Fry, Cocktail Samoosa, Chicken Momos, Chicken Cuttle, Beef Cutlet, Chicken Croquettes < /p>

        <
        /div>

        <
        /div>

        <
        div className = "row" >

        <
        div className = "col-md-3" >

        <
        img className = "itemone"
        src = { item3 }
        alt = "img" / >

        <
        /div>

        <
        div className = "col-md-2" >

        <
        p className = "welcomedrink" > SOUPS < /p> 

        <
        /div>

        <
        div className = "col-md-10" >

        <
        p className = "mango" > Sweet Corn Chicken, Cream Of Chicken, Hot, & Sour Chicken, Chicken Manchow soup,
        Chicken Noodle Soup, Clear Chicken Soup, Chicken Chilly Soup, Mandrain Chicken Soup, Lamb soup < /p>

        <
        /div>

        <
        /div>


        <
        div className = "row" >

        <
        div className = "col-md-3" >

        <
        img className = "itemone"
        src = { item4 }
        alt = "img" / >

        <
        /div>

        <
        div className = "col-md-2" >

        <
        p className = "welcomedrink" > FISH < /p> 

        <
        /div>

        <
        div className = "col-md-10" >

        <
        p className = "mango" > Grilled Fish, Fish Casserole, Honey Glazed Fish FIllet, Finger Fish, Fish Mali, kawloon Fish, Fish Szechwan Fish Fry, Fish Polichathu, Malabar Fish Curry Chilly, Tawa Fried Fish, Meen Vattichattu < /p>

        <
        /div>

        <
        /div>

        <
        div className = "row" >

        <
        div className = "col-md-3" >

        <
        img className = "itemone"
        src = { item6 }
        alt = "img" / >

        <
        /div>

        <
        div className = "col-md-2" >

        <
        p className = "welcomedrink" > MUTTON < /p> 

        <
        /div>

        <
        div className = "col-md-10" >

        <
        p className = "mango" > Mutton Roast, Mutton Stew, Mutton Kharma, Mutton Goulash, Mutton Malabari, Mutton Varuthara, Mutton Mappas, Mutton Badami, Mutton Roganjosh,
        Mutton Pepper Masala, Mutton Yakhni Masala, Mutton Nilgri Kharma < /p>

        <
        /div>

        <
        /div>



        <
        /div>  <
        /div>

        <
        div className = "col-md-1" > < /div>    <
        div className = "col-md-4" >
        <
        div className = "dinnermenu" >

        <
        p className = "col-md-4 lunch" > Dinner Menu < /p>


        <
        div className = "row" >

        <
        div className = "col-md-3" >

        <
        img className = "itemone"
        src = { item7 }
        alt = "img" / >

        <
        /div>

        <
        div className = "col-md-2" >

        <
        p className = "welcomedrink" > BREADS < /p> 

        <
        /div>

        <
        div className = "col-md-10" >

        <
        p className = "mango" > Palappam / Vellappam, Kallappam, Idiyappam,
        Vatteppam, Pathiri, Kerala Paratha, Wheat Paratha, Coin Paratha, Kuicha, Wheat Phulka, Battara < /p>

        <
        /div>

        <
        /div>  

        <
        div className = "row" >

        <
        div className = "col-md-3" >

        <
        img className = "itemone"
        src = { item8 }
        alt = "img" / >

        <
        /div>

        <
        div className = "col-md-4" >

        <
        p id = "rc"
        className = "welcomedrink" > RICE & NOODLES < /p> 

        <
        /div>

        <
        div className = "col-md-10" >

        <
        p className = "mango" > Chicken Lollipop, Chicken 65, Tikka, Chicken Nuggets, Chicken Spring Roll, Fish Finger Fry, Kozhuva Fry, Squid Batter Fry, Prawns Tempura, Butter Grilled Prawns Prwans Golden Fry, Cocktail Samoosa, Chicken Momos, Chicken Cuttle, Beef Cutlet, Chicken Croquettes < /p>

        <
        /div>

        <
        /div>  


        <
        div className = "row" >

        <
        div className = "col-md-3" >

        <
        img className = "itemone"
        src = { item9 }
        alt = "img" / >

        <
        /div>

        <
        div className = "col-md-2" >

        <
        p className = "welcomedrink" > CHICKEN < /p> 

        <
        /div>

        <
        div className = "col-md-10" >

        <
        p className = "mango" > Nadan Chicken Curry, Chicken Roast, Chicken Stew,
        Chicken Kharma, Butter Chicken, Chicken Varutharachath,
        Chicken Kollamulaku, Chicken Badami, Chicken Mughlai Chicken Tikka Masala, Chiken Pepper Masala, Chicken Malabari < /p>

        <
        /div>

        <
        /div>  

        <
        div className = "row" >

        <
        div className = "col-md-3" >

        <
        img className = "itemone"
        src = { item10 }
        alt = "img" / >

        <
        /div>

        <
        div className = "col-md-2" >

        <
        p className = "welcomedrink" > DUCk < /p> 

        <
        /div>

        <
        div className = "col-md-10" >

        <
        p className = "mango" > Duck Kuttanadan, Duck Peppar Roast, Duck Nadan Curry Duck Roast Masala, Duck Mappas, Duck Varutharacha Curry, Duck Peralani < /p>

        <
        /div>

        <
        /div>  

        <
        div className = "row" >

        <
        div className = "col-md-3" >

        <
        img className = "itemone"
        src = { item11 }
        alt = "img" / >

        <
        /div>

        <
        div className = "col-md-2" >

        <
        p className = "welcomedrink" > PORK < /p> 

        <
        /div>

        <
        div className = "col-md-10" >

        <
        p className = "mango" > Pork Peppar Fry, Pork Roast, Pork Kalyana Varattu, Pork Pepperoni, Orange - Honey Galzed Pork, Pork - Coconut Fry Pork - kaya Curry, Pork Varattiyathu, Chilli Pork, Pork Vindalo, Pork Slice In Mustard Sauce < /p>

        <
        /div>

        <
        /div>  


        <
        /div>      <
        /div>   <
        /div>     <
        /div>      <
        /div>

        <
        /div>
    )
}
export default Menu;