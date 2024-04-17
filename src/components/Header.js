import React from "react";
import {Carousel} from "react-bootstrap";
import {useMatch} from 'react-router-dom';

const Header = () => {
    const isRoute = useMatch('/')
    const headerClass = isRoute ? 'hero_area' : 'hero_area sub_page';

    return (
        <div className={headerClass}>
            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <a className="navbar-brand" href="/">
                            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt=""/>
                            <span>
                            Lodge
                        </span>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                <ul className="navbar-nav  ">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/">Home <span
                                            className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/about"> About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/jewellery">Jewellery </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/contact">Contact us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/login">Login</a>
                                    </li>
                                </ul>

                            </div>
                            <div className="quote_btn-container ">
                                <a href="/cart">
                                    <img src={process.env.PUBLIC_URL + '/images/cart.png'} alt="cart"/>
                                    <div className="cart_number">0</div>
                                </a>
                                <form className="form-inline">
                                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {/*slider section*/}

            {isRoute &&
                <section className=" slider_section position-relative">
                    <div className="design-box">
                        <img src={process.env.PUBLIC_URL + "images/design-1.png"} alt="design"/>
                    </div>
                    <div className="container" style={{height: '65%', overflowY: 'hidden'}}>
                        <Carousel>
                            <Carousel.Item>
                                <div className="slides slide1">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="detail_box">
                                                <h2>
                                                    <span> New Collection</span>
                                                    <hr/>
                                                </h2>
                                                <h1>
                                                    Jewellery
                                                </h1>
                                                <p>

                                                    Discover LODGE's latest collection, a fusion of contemporary trends
                                                    and
                                                    timeless
                                                    elegance.
                                                    From avant-garde furniture to fashion-forward apparel, each piece
                                                    reflects our
                                                    commitment to
                                                    modern living. With a harmonious blend of form and function, our new
                                                    collection
                                                    invites you
                                                    to elevate your lifestyle with sophisticated design. Explore
                                                    unparalleled
                                                    craftsmanship and
                                                    refined aesthetics at LODGE, where every item tells a story of
                                                    individuality.
                                                    Embrace the
                                                    art of living with our captivating contemporary treasures.
                                                </p>
                                                <div>
                                                    <a href="">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src={process.env.PUBLIC_URL + "images/slider-img1.png"} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="slides slide2">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="detail_box">
                                                <h2>
                                                    <span> New Collection</span>
                                                    <hr/>
                                                </h2>
                                                <h1>
                                                    Jewellery
                                                </h1>
                                                <p>

                                                    Discover LODGE's latest collection, a fusion of contemporary trends
                                                    and
                                                    timeless
                                                    elegance.
                                                    From avant-garde furniture to fashion-forward apparel, each piece
                                                    reflects our
                                                    commitment to
                                                    modern living. With a harmonious blend of form and function, our new
                                                    collection
                                                    invites you
                                                    to elevate your lifestyle with sophisticated design. Explore
                                                    unparalleled
                                                    craftsmanship and
                                                    refined aesthetics at LODGE, where every item tells a story of
                                                    individuality.
                                                    Embrace the
                                                    art of living with our captivating contemporary treasures.
                                                </p>
                                                <div>
                                                    <a href="">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src={process.env.PUBLIC_URL + "images/slider-img2.png"} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="slides slide3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="detail_box">
                                                <h2>
                                                    <span> New Collection</span>
                                                    <hr/>
                                                </h2>
                                                <h1>
                                                    Jewellery
                                                </h1>
                                                <p>

                                                    Discover LODGE's latest collection, a fusion of contemporary trends
                                                    and
                                                    timeless
                                                    elegance.
                                                    From avant-garde furniture to fashion-forward apparel, each piece
                                                    reflects our
                                                    commitment to
                                                    modern living. With a harmonious blend of form and function, our new
                                                    collection
                                                    invites you
                                                    to elevate your lifestyle with sophisticated design. Explore
                                                    unparalleled
                                                    craftsmanship and
                                                    refined aesthetics at LODGE, where every item tells a story of
                                                    individuality.
                                                    Embrace the
                                                    art of living with our captivating contemporary treasures.
                                                </p>
                                                <div>
                                                    <a href="">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src={process.env.PUBLIC_URL + "images/slider-img.png"} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="slides slide4">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="detail_box">
                                                <h2>
                                                    <span> New Collection</span>
                                                    <hr/>
                                                </h2>
                                                <h1>
                                                    Jewellery
                                                </h1>
                                                <p>

                                                    Discover LODGE's latest collection, a fusion of contemporary trends
                                                    and
                                                    timeless
                                                    elegance.
                                                    From avant-garde furniture to fashion-forward apparel, each piece
                                                    reflects our
                                                    commitment to
                                                    modern living. With a harmonious blend of form and function, our new
                                                    collection
                                                    invites you
                                                    to elevate your lifestyle with sophisticated design. Explore
                                                    unparalleled
                                                    craftsmanship and
                                                    refined aesthetics at LODGE, where every item tells a story of
                                                    individuality.
                                                    Embrace the
                                                    art of living with our captivating contemporary treasures.
                                                </p>
                                                <div>
                                                    <a href="">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src={process.env.PUBLIC_URL + "images/slider-img3.png"} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                </section>
            }

            {/*end slider section >*/}
        </div>
    )
}

export default Header