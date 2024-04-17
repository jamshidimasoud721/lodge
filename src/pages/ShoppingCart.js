import React from "react";

const ShoppingCart = () => {

    return (
        <section className='layout_padding'>
            <div className='container'>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col" className="border-0 bg-light">
                                <div className="p-2 px-3 text-uppercase">Product</div>
                            </th>
                            <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">Price</div>
                            </th>
                            <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">Quantity</div>
                            </th>
                            <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">Remove</div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row" className="border-0">
                                <div className="p-2">
                                    <img src={process.env.PUBLIC_URL + "images/i-2.png"} alt=""
                                         width="70"
                                         className="img-fluid rounded shadow-sm"/>
                                    <div className="ml-3 d-inline-block align-middle">
                                        <h5 className="mb-0"><a href="#"
                                                                className="text-dark d-inline-block align-middle">Timex
                                            Unisex Originals</a></h5><span
                                        className="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
                                    </div>
                                </div>
                            </th>
                            <td className="border-0 align-middle"><strong>$79.00</strong></td>
                            <td className="border-0 align-middle"><strong>3</strong></td>
                            <td className="border-0 align-middle"><a href="#" className="text-dark"><i
                                className="fa fa-trash"></i></a></td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <div className="p-2">
                                    <img src={process.env.PUBLIC_URL + "images/i-4.png"} alt=""
                                         width="70"
                                         className="img-fluid rounded shadow-sm"/>
                                    <div className="ml-3 d-inline-block align-middle">
                                        <h5 className="mb-0"><a href="#" className="text-dark d-inline-block">Lumix
                                            camera
                                            lense</a></h5><span className="text-muted font-weight-normal font-italic">Category: Electronics</span>
                                    </div>
                                </div>
                            </th>
                            <td className="align-middle"><strong>$79.00</strong></td>
                            <td className="align-middle"><strong>3</strong></td>
                            <td className="align-middle"><a href="#" className="text-dark"><i
                                className="fa fa-trash"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <div className="p-2">
                                    <img src={process.env.PUBLIC_URL + "images/i-3.png"} alt=""
                                         width="70"
                                         className="img-fluid rounded shadow-sm"/>
                                    <div className="ml-3 d-inline-block align-middle">
                                        <h5 className="mb-0"><a href="#" className="text-dark d-inline-block">Gray Nike
                                            running shoe</a></h5><span
                                        className="text-muted font-weight-normal font-italic">Category: Fashion</span>
                                    </div>
                                </div>
                            </th>
                            <td className="align-middle"><strong>$79.00</strong></td>
                            <td className="align-middle"><strong>3</strong></td>
                            <td className="align-middle"><a href="#" className="text-dark"><i
                                className="fa fa-trash"></i></a></td>

                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="d-flex ">
                    <button className='payment' type="submit">
                        PAY
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ShoppingCart