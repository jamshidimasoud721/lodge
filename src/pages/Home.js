import React from "react";
import {Carousel} from "react-bootstrap";

const Home = () => {

    return (
        <>
            {/*item section*/}
            <div  className="item_section layout_padding2">
                <div className="container">
                    <div className="item_container">
                        <div className="box">
                            <div className="price">
                                <h6>
                                    Best PRICE
                                </h6>
                            </div>
                            <div className="img-box">
                                <img src={process.env.PUBLIC_URL + "images/i-1.png"} alt=""/>
                            </div>
                            <div className="name">
                                <h5>
                                    Bracelet
                                </h5>
                            </div>
                        </div>
                        <div className="box">
                            <div className="price">
                                <h6>
                                    Best QUALITY
                                </h6>
                            </div>
                            <div className="img-box">
                                <img src={process.env.PUBLIC_URL + "images/i-2.png"} alt=""/>
                            </div>
                            <div className="name">
                                <h5>
                                    Ring
                                </h5>
                            </div>
                        </div>
                        <div className="box">
                            <div className="price">
                                <h6>
                                    Best MODELS
                                </h6>
                            </div>
                            <div className="img-box">
                                <img src={process.env.PUBLIC_URL + "images/i-3.png"} alt=""/>
                            </div>
                            <div className="name">
                                <h5>
                                    Earings
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*end item section */}

            {/*about section */}
            <section className="about_section layout_padding2-top layout_padding-bottom">
                <div className="design-box">
                    <img src={process.env.PUBLIC_URL + "images/design-2.png"} alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        About Jewellery Shop
                                    </h2>
                                </div>
                                <p>
                                    Welcome to LODGE, where timeless elegance meets artistry. Our showroom, adorned with
                                    sparkling
                                    chandeliers, showcases a curated collection that marries traditional craftsmanship
                                    with
                                    contemporary design. Whether you're drawn to diamonds, precious gemstones, or
                                    vintage-inspired
                                    creations, our selection caters to diverse tastes. At Radiant Gems & Jewels, each
                                    visit is a
                                    journey into the world of timeless beauty and enduring craftsmanship, where dreams
                                    become
                                    enduring treasures.
                                </p>
                                <div>
                                    <a href="">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src={process.env.PUBLIC_URL + "images/about-img.png"} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end about section */}

            {/*price section*/}
            <section className="price_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Our Jewellery Price
                        </h2>
                    </div>
                    <div className="price_container">
                        <div className="box">
                            <div className="name">
                                <h6>
                                    Engagement Ring
                                </h6>
                            </div>
                            <div className="img-box">
                                <img src={process.env.PUBLIC_URL + "images/p-1.png"} alt=""/>
                            </div>
                            <div className="detail-box">
                                <h5>
                                    £<span>1500.00</span>
                                </h5>
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="name">
                                <h6>
                                    Diamond Ring
                                </h6>
                            </div>
                            <div className="img-box">
                                <img src={process.env.PUBLIC_URL + "images/i-2.png"} alt=""/>
                            </div>
                            <div className="detail-box">
                                <h5>
                                    £<span>1100.00</span>
                                </h5>
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="name">
                                <h6>
                                    Diamond Earring
                                </h6>
                            </div>
                            <div className="img-box">
                                <img src={process.env.PUBLIC_URL + "images/i-3.png"} alt=""/>
                            </div>
                            <div className="detail-box">
                                <h5>
                                    £<span>1000.00</span>
                                </h5>
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="" className="price_btn">
                            See More
                        </a>
                    </div>
                </div>
            </section>
            {/*end price section */}

            {/*ring section*/}
            <section className="ring_section layout_padding">
                <div className="design-box">
                    <img src={process.env.PUBLIC_URL + "images/design-1.png"} alt=""/>
                </div>
                <div className="container">
                    <div className="ring_container layout_padding2">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="detail-box">
                                    <h4>
                                        special
                                    </h4>
                                    <h2>
                                        Wedding Ring
                                    </h2>
                                    <a href="">
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="img-box">
                                    <img src={process.env.PUBLIC_URL + "images/ring-img.jpg"} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end ring section*/}

            {/*client section */}
            <section className="client_section">
                <div className="container">
                    <div className="heading_container">
                        <h2>Testimonial</h2>
                    </div>
                    <h4 className="secondary_heading">What our customers say</h4>
                    <Carousel>
                        <Carousel.Item>
                            <div className="client_container">
                                <div className="client-id">
                                    <div className="img-box">
                                        <img src={process.env.PUBLIC_URL + "images/client1.png"} alt=""/>
                                    </div>
                                    <div className="name">
                                        <h5>
                                            Aliqua
                                        </h5>
                                        <h6>
                                            Birmingham, The UK
                                        </h6>
                                    </div>
                                </div>
                                <div className="detail-box">
                                    <p>
                                        Absolutely delighted with my recent purchase! The exquisite craftsmanship and
                                        attention to detail exceeded my expectations. The jewelry is even more stunning
                                        in person, and the customer service was exceptional. Will definitely be
                                        recommending this shop to friends and returning for future purchases. Thank you
                                        for making my experience truly memorable!
                                    </p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="client_container">
                                <div className="client-id">
                                    <div className="img-box">
                                        <img src={process.env.PUBLIC_URL + "images/client2.png"} alt=""/>
                                    </div>
                                    <div className="name">
                                        <h5>
                                            Alex
                                        </h5>
                                        <h6>
                                            London, The UK
                                        </h6>
                                    </div>
                                </div>
                                <div className="detail-box">
                                    <p>
                                        Incredible find! The jewelry from this shop is not only stunning but also feels
                                        unique. The quality is exceptional, and the customer service was top-notch. I
                                        appreciate the fast shipping too. My new go-to for elegant and timeless pieces.
                                        Highly recommended!
                                    </p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="client_container">
                                <div className="client-id">
                                    <div className="img-box">
                                        <img src={process.env.PUBLIC_URL + "images/client3.png"} alt=""/>
                                    </div>
                                    <div className="name">
                                        <h5>
                                            Binita
                                        </h5>
                                        <h6>
                                            Westmidlands, Birmingham
                                        </h6>
                                    </div>
                                </div>
                                <div className="detail-box">
                                    <p>
                                        Absolutely thrilled with my purchase! The jewelry is not only beautifully
                                        designed but also of exceptional quality. The ordering process was seamless, and
                                        my item arrived promptly in an elegant package. I'll definitely be back for
                                        more. Thank you for adding a touch of sparkle to my collection!
                                    </p>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
            {/*end client section*/}

            {/*contact section */}
            <section className="contact_section layout_padding">
                <div className="design-box">
                    <img src={process.env.PUBLIC_URL + "images/design-2.png"} alt=""/>
                </div>
                <div className="container ">
                    <div className="">
                        <h2 className="">
                            Contact Us
                        </h2>
                    </div>

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form action="">
                                <div>
                                    <input type="text" placeholder="Name" required/>
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" required/>
                                </div>
                                <div>
                                    <input type="tel" placeholder="Phone" required/>
                                </div>
                                <div>
                                    <input type="text" className="message-box" placeholder="Message" required/>
                                </div>
                                <div className="d-flex ">
                                    <button type="submit">
                                        SEND
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div className="map_container">
                                <div className="map-responsive">
                                    <iframe
                                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                                        width="600" height="300" frameborder="0"
                                        style={{border: '0', width: '100%', height: '100%'}}
                                        allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end contact section */}
        </>
    )
}

export default Home