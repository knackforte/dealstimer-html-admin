import React from 'react';
import { withRouter } from 'react-router-dom';
import { isAuthenticated } from '../Auth/Auth';
const FooterContent = () => {
    return (
        <div className="Footer">

            <footer className="footer footer-static footer-light navbar-border ">
                <p className="clearfix text-muted text-sm-center mb-0 px-2">

                    <span className="float-md-left d-xs-block d-md-inline-block">Copyright  © 2020 <a href='/#' target="_blank" className="text-bold-800 grey darken-2">DEALSTIMER </a>, All rights reserved. </span>
                    <span className="float-md-right d-xs-block d-md-inline-block"></span>
                </p>
            </footer>


        </div>
    );
};

const EmptyContent = () => {
    return (
        <div></div>
    );
}

const Footer = (props) => {

    let FooterC;
    if (isAuthenticated() === "true") {
        FooterC = FooterContent;
    } else {
        FooterC = EmptyContent;
    }

    return (
        <FooterC {...props} />
    )
}
export default withRouter(Footer);