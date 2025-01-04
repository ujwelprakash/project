import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.js'
import './booklists.css'
import imageone from '../images/first card.jpg';
import imagetwo from '../images/second img.jpg';
import imagethree from '../images/third img.jpg';
import imagefour from '../images/4th img.jpg';
import imagefive from '../images/5th img.jpg';
import imagesix from '../images/6th img.jpg';
import imageseven from '../images/event1.jpg';
import imageeight from '../images/event2.jpg';
import imagenine from '../images/event3.jpg';
import imageten from '../images/event4.jpg';
import imageseleven from '../images/chattisgarh-wedding-food.jpg';
import imagetwelve from '../images/photo2.jpg';
import imagethriteen from '../images/photo3.jpg';
import imagefouteen from '../images/photo4.jpg';
import { Button, Card } from "react-bootstrap";


const Booklists = () => {
    const { number } = useParams();
    const initialImageNumber = number || 1
    const [selectedImageNumber, setSelectedImageNumber] = useState(initialImageNumber);
    const [bookingConfirmed, setBookingConfirmed] = useState(false);
    const navi = useNavigate();


    const books = [
        { image: imageone, description: 'Book your best Desigh and Decor.' },
        { image: imagetwo, description: 'Book your wedding venues.' },
        { image: imagethree, description: 'Book your Food and Deserts.' },
        { image: imagefour, description: 'Book your videos and Photogrpahy' },
        { image: imagefive, description: 'Book your music and entertainment' },
        { image: imagesix, description: 'Book your wedding cakes' },
        { image: imageseven, description: 'Book your Wedding and Engagement package' },
        { image: imageeight, description: 'Book your Bridel show package' },
        { image: imagenine, description: 'Book your Birthday party package' },
        { image: imageten, description: 'Book your baby shower package' },
        { image: imageseleven, description: 'Book your standard manu' },
        { image: imagetwelve, description: 'Book your classy menu' },
        { image: imagethriteen, description: 'Book your elegent menu' },
        { image: imagefouteen, description: 'Book your executive menu' }
    ];


    const selectedBook = books[selectedImageNumber - 1] || books[0];
    const handleButtonClick = (newImageNumber) => {
        setSelectedImageNumber(newImageNumber);
    };

    const handleBookConfirm = () => {
        console.log(`Book ${selectedImageNumber} confirmed!`);
        setBookingConfirmed(true);
        navi(`/booking-confirm/${selectedImageNumber}`, {
            state: {
                selectedBook: selectedBook,
            },
        });
    };

    const navigateToBookingConfirmPage = () => {
        navi(`/booking-confirm/${selectedImageNumber}`);
    };

    return ( <div className = "Appp" >

        <h1 className = "mb-4" > Book Now Page </h1>  

        <div style = {
            { paddingBottom: "150px" }
        }
        className = "  " >

        <Card  style = {
            { width: "100%", height: "450px" }
        }
        className = "my-3" >

            <div className="container-fluid">
                <div className="row">
          <div className="col-md-6 pt-5">
        <Card.Img style = {
            { width: "350px", height: "350px" }
        }
        variant = "top"
        src = { selectedBook.image }
        alt = { `Booked image ${selectedImageNumber}` }
        /> 
        </div>
        <div className="col-md-6 pt-5">
        <Card.Body>

        <Card.Text style = {{ fontSize: "18px",textAlign:"justify" }} > { selectedBook.description } </Card.Text> 
        
        <Button variant = "primary"
        onClick = { bookingConfirmed ? navigateToBookingConfirmPage : handleBookConfirm } > { bookingConfirmed ? `view Booking confirmation` : `Book confirm` } 
        </Button>
        
         </Card.Body >

        </div>
        </div>

        </div>

        </Card>

        </div>

        </div>
    )
}
export default Booklists;