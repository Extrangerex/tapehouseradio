import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


function Footer() {
    return (
        <footer>
            <div className="social-icons">
                <a href="#" className="facebook"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                <a href="#" className="instagram"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                <a href="#" className="spotify"><FontAwesomeIcon icon={['fab', 'spotify']} /></a>
                <a href="#" className="youtube"><FontAwesomeIcon icon={['fab', 'mixcloud']} /> </a>
            </div>
        </footer>
    );
}

export default Footer;