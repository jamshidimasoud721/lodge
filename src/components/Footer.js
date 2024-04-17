import React from "react";

const Footer = () => {
    return (
        <>
            <section className="info_section ">
                <div className="container">
                    <div className="info_container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="info_logo">
                                    <a href="">
                                        <img src={process.env.PUBLIC_URL + 'images/logo.png'} alt=""/>
                                        <span>
                  Lodge
                </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="info_contact">
                                    <a href="">
                                        <img src={process.env.PUBLIC_URL + "images/location.png"} alt=""/>
                                        <span>
                  Address
                </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="info_contact">
                                    <a href="">
                                        <img src={process.env.PUBLIC_URL + "images/phone.png"} alt=""/>
                                        <span>
                  +44 7467575836
                </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="info_contact">
                                    <a href="">
                                        <img src={process.env.PUBLIC_URL + "images/mail.png"} alt=""/>
                                        <span>
                  demo@gmail.com
                </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="info_form">
                            <div className="d-flex justify-content-center">
                                <h5 className="info_heading">
                                    Newsletter
                                </h5>
                            </div>
                            <form action="">
                                <div className="email_box">
                                    <label form="email2">Enter Your Email</label>
                                    <input type="text" id="email2"/>
                                </div>
                                <div>
                                    <button>
                                        subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="info_social">
                            <div className="d-flex justify-content-center">
                                <h5 className="info_heading">
                                    Follow Us
                                </h5>
                            </div>
                            <div className="social_box">
                                <a href="">
                                    <img src={process.env.PUBLIC_URL + "images/fb.png"} alt="facebook"/>
                                </a>
                                <a href="">
                                    <img src={process.env.PUBLIC_URL + "images/twitter.png"} alt="twitter"/>
                                </a>
                                <a href="">
                                    <img src={process.env.PUBLIC_URL + "images/linkedin.png"} alt="linkedin"/>
                                </a>
                                <a href="">
                                    <img src={process.env.PUBLIC_URL + "images/insta.png"} alt="instagram"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid footer_section">
                <p>
                    &copy; <span id="displayYear"></span> All Rights Reserved By&nbsp;
                    <a href="#">Ayda Bahmanzadeh Shafiee</a>
                </p>
            </section>
        </>
    )
}

export default Footer