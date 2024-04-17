import React from "react";

const Login = () => {

    return (
        <>
            {/*login section*/}
            <section className="contact_section layout_padding">
                <div className="design-box">
                    <img src={process.env.PUBLIC_URL + "images/design-2.png"} alt=""/>
                </div>
                <div className="container">
                    <h2 className="text-center">
                        Login
                    </h2>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <form action="">
                                <div>
                                    <input type="email" placeholder="Email" required/>
                                </div>
                                <div>
                                    <input type="password" placeholder="Password" required/>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="submit">
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/*end login section */}
        </>
    )
}

export default Login