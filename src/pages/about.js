import React from "react";
import './about.css'
import "bootstrap/dist/css/bootstrap.min.css";
import image from '../images/about png.png'
import image1 from '../images/aboutperson.jpg'
import image2 from '../images/aboutone.jpg'
import image3 from '../images/abouttwo.jpg'
import image4 from '../images/abouteight.jpg'
import image5 from '../images/aboutfour.jpg'
import image6 from '../images/aboutfive.jpg'
import image7 from '../images/aboutsix.jpg'

function About() {
    return (
    );
}

export default About;<div>
        <img
            style={{ width: "100%", height: "500px" }}
            src={image}
            alt="img"
        />
    
        <div className="container-fluid length">
            <div className="row gy-4 text-center">
                <p className="ourteam">Our Team</p>
                <p className="ourteamp">
                    At Oram Event Management, our team is the heartbeat of our success, embodying passion, professionalism, and creativity in every endeavor. Comprising seasoned event planners, designers, coordinators, and logistical wizards, each member brings a unique blend of expertise and flair to the table. Collaborative by nature, we thrive on synergy, pooling our diverse skills and experiences to craft bespoke events that surpass expectations.
                </p>
    
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5">
                            <p className="founder">YADAV SURESH</p>
                            <img
                                style={{ width: "350px", height: "450px" }}
                                src={image1}
                                alt="img"
                            />
                        </div>
    
                        <div style={{ marginTop: "200px" }} className="col-md-6 whitebg">
                            <p className="founderp">
                                As the founder of Oram Event Management, I am privileged to lead a team of exceptionally talented individuals who consistently demonstrate remarkable teamwork and dedication. Our success is not just a result of my leadership, but rather the collective effort and synergy of every team member. Each member of our team brings invaluable skills, creativity, and passion to the table, and it is their hard work and commitment that propels us forward. While I am honored to lead such a dynamic group, I firmly believe that true leadership is about empowering others, fostering collaboration, and nurturing talent. Together, we celebrate our achievements, overcome challenges, and continuously strive for excellence, making Oram Event Management a beacon of innovation and professionalism in the industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="container-fluid teammate">
                <div className="row gy-4 text-center">
                    <p className="ourteam">Our Team Members</p>
    
                    <div className="col-lg-4 col-sm-12">
                        <img
                            style={{ width: "300px", height: "400px" }}
                            src={image2}
                            alt="img"
                        />
                        <p className="pt-3" style={{ color: 'white', fontSize: '25px' }}>Anurag</p>
                    </div>
    
                    <div className="col-lg-4 col-sm-6">
                        <img
                            style={{ width: "300px", height: "400px" }}
                            src={image3}
                            alt="img"
                        />
                        <p className="pt-3" style={{ color: 'white', fontSize: '25px' }}>Anurag</p>
                    </div>
    
                    <div className="col-lg-4 col-sm-6">
                        <img
                            style={{ width: "300px", height: "400px" }}
                            src={image4}
                            alt="img"
                        />
                        <p className="pt-3" style={{ color: 'white', fontSize: '25px' }}>Devaki</p>
                    </div>
    
                    <div className="col-lg-4 col-sm-12">
                        <img
                            style={{ width: "300px", height: "400px" }}
                            src={image5}
                            alt="img"
                        />
                        <p className="pt-3" style={{ color: 'white', fontSize: '25px' }}>Arunima</p>
                    </div>
    
                    <div className="col-lg-4 col-sm-6">
                        <img
                            style={{ width: "300px", height: "400px" }}
                            src={image6}
                            alt="img"
                        />
                        <p className="pt-3" style={{ color: 'white', fontSize: '25px' }}>James</p>
                    </div>
    
                    <div className="col-lg-4 col-sm-6">
                        <img
                            style={{ width: "300px", height: "400px" }}
                            src={image7}
                            alt="img"
                        />
                        <p className="pt-3" style={{ color: 'white', fontSize: '25px' }}>Arun</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
