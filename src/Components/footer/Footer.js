import React from 'react';

export default function Footer() {
    return (
        <div className="footer">
            <h6 id="copyright">copyright &copy; PJ News LTD</h6>
            <br></br>
                <h6 id="copyright">
                    <a href="src/pages/privacy.html" target='_blank'>privacy policy | </a>
                    <a href="src/pages/terms.html" target='_blank'>terms of service</a>
                </h6>
           
            <section id="footer">
                <section id="banner">                 
                        <div className="row" id="banner-row">
                            <div className="col-md-4" id="footer-col2">
                                <h3>Contact Us</h3>
                                <p>Email Us - support@pjnews.com</p>
                            </div>
                            <div className="col-md-4" id="footer-col3">
                                <h3>Subscribe To Our News</h3>
                                <form>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Enter Your Email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                        />
                                        <div id="emailHelp"
                                            className="form-text">
                                            Don't worry! Your email id is safe with us.
                                        </div>
                                    </div>
                                    <button type="submit"
                                        className="btn btn-primary">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                </section>
            </section>
        </div>
    )
};
