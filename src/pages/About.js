import React from "react";

const About = () => {

    return (
        <>
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

                                    Welcome to LODGE, a haven of contemporary sophistication nestled in the heart of the
                                    city. As you step into our meticulously designed space, you'll be enveloped in an
                                    atmosphere that seamlessly blends modern aesthetics with a touch of rustic charm.
                                    The curated selection of products reflects our commitment to quality and style,
                                    offering a range of thoughtfully chosen items, from sleek home decor to
                                    fashion-forward apparel. At LODGE, we strive to create an immersive shopping
                                    experience, where each corner tells a story of craftsmanship and curated elegance.
                                    Whether you're seeking distinctive home accents or fashion pieces that make a
                                    statement, LODGE invites you to discover a world where design meets comfort in every
                                    meticulously curated detail.
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
            {/*end about section*/}
        </>
    )
}

export default About