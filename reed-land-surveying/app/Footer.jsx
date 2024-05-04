import React from 'react'
import '../styles/scss/Footer.scss'

function Footer({ bottomOfPageRef }) {
    return (
        <footer ref={bottomOfPageRef}>
            <section>
                <div className="container px-3 px-md-4 px-lg-5">
                    <div className="row">
                        <div className="col-md-6 order-md-2">
                            <h3 className="d-md-none mb-4">What can we help with?</h3>
                            <form>
                                <div className="form-group">
                                    <label className="mb-1" htmlFor="nameInput">NAME</label>
                                    <input type="text" className="form-control" id="nameInput" placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label className="mb-1" htmlFor="emailInput">EMAIL</label>
                                    <input type="email" className="form-control" id="emailInput" placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label className="me-2 mb-1" htmlFor="exampleFormControlInput1">PHONE</label>
                                    <span className="mb-1 footer-heading-secondary" htmlFor="">OPTIONAL</span>
                                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label className="me-2 mb-1" htmlFor="exampleFormControlTextarea1">HOW CAN WE HELP?</label>
                                    <span className="mb-1 footer-heading-secondary" htmlFor="">INQUIRY</span>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <button type="submit" className="mt-3 button blue footer-button hover-dim hover-expand mb-2"><span>SUBMIT</span></button>
                            </form>
                        </div>
                        <div className="col-md-6 order-md-1 mt-5 mt-md-0">
                            <h3 className='mb-4'>What can we help with?</h3>
                            <div className="footer-section">
                                <span className="footer-heading-secondary">
                                    EMAIL
                                </span>
                                <p>
                                    cassioanddominickattorneyatlaw@gmail.com
                                </p>
                            </div>
                            <div className="footer-section">
                                <span className="footer-heading-secondary">
                                    PHONE
                                </span>
                                <p>
                                    (508) 923-1181
                                </p>
                            </div>
                            <div className="footer-section">
                                <span className="footer-heading-secondary">
                                    OFFICE
                                </span>
                                <p>
                                    109 Rhode Island Rd # 4A
                                    <br />
                                    Lakeville, MA 02347
                                </p>
                            </div>
                            <div className="footer-section">
                                <span className="footer-heading-secondary">
                                    LEGAL
                                </span>
                                <p>
                                    ©2022. All rights reserved.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer