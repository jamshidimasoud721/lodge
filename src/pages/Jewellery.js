import React from "react";

const Jewellery = () => {

    return (
        <>
            {/*item section*/}
            <div className="item_section layout_padding2">
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
                                    Best PRICE
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
                                    Best PRICE
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
            {/*end item section*/}


            {/*price section */}
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
                                    Diamond Ring
                                </h6>
                            </div>
                            <div className="img-box">
                                <img src={process.env.PUBLIC_URL + "images/p-1.png"} alt=""/>
                            </div>
                            <div className="detail-box">
                                <h5>
                                    $<span>1000.00</span>
                                </h5>
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="name">
                                <h6>
                                    Ring
                                </h6>
                            </div>
                            <div className="img-box">
                                <img src={process.env.PUBLIC_URL + "images/i-2.png"} alt=""/>
                            </div>
                            <div className="detail-box">
                                <h5>
                                    $<span>1000.00</span>
                                </h5>
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="name">
                                <h6>
                                    Engagement Ring
                                </h6>
                            </div>
                            <div className="img-box">
                                <img src={process.env.PUBLIC_URL + "images/i-6.png"} alt=""/>
                            </div>
                            <div className="detail-box">
                                <h5>
                                    $<span>1000.00</span>
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
                                <img src={process.env.PUBLIC_URL + "images/i-5.png"} alt=""/>
                            </div>
                            <div className="detail-box">
                                <h5>
                                    $<span>1000.00</span>
                                </h5>
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="name">
                                <h6>
                                    Wedding Ring
                                </h6>
                            </div>
                            <div className="img-box">
                                <img src={process.env.PUBLIC_URL + "images/i-4.png"} alt=""/>
                            </div>
                            <div className="detail-box">
                                <h5>
                                    $<span>1000.00</span>
                                </h5>
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="name">
                                <h6>
                                    Earring
                                </h6>
                            </div>
                            <div className="img-box">
                                <img src={process.env.PUBLIC_URL + "images/i-3.png"} alt=""/>
                            </div>
                            <div className="detail-box">
                                <h5>
                                    $<span>1000.00</span>
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
            {/*end price section*/}
        </>
    )
}

export default Jewellery