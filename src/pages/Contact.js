import React from "react";

const Contact = () => {

    return (
        <>
            {/*contact section*/}
            <section className="contact_section layout_padding">
                <div className="design-box">
                    <img src={process.env.PUBLIC_URL+"images/design-2.png"} alt=""/>
                </div>
                <div className="container ">
                    <h2>
                        Contact Us
                    </h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form action="">
                                <div>
                                    <input type="text" placeholder="Name" required />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" required />
                                </div>
                                <div>
                                    <input type="tel" placeholder="Phone" required />
                                </div>
                                <div>
                                    <input type="text" className="message-box" placeholder="Message" required />
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
                                        width="600" height="300" frameborder="0" style={{border:'0', width: '100%', height:'100%'}}
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

export default Contact