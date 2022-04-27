import React from 'react';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="footer">
                <ul>
                    <div></div>
                    <div></div>
                    <li className="footer-label footer-item">Links</li>
                    <li className="footer-item"><a href="https://github.com/derek-2">Github</a></li>
                    <li className="footer-item"><a href="#">Linkedin</a></li>
                    <li className="footer-item"><a href="#">AngelList</a></li>
                </ul>
            </div>
            <div className="real-footer">
                <p>© 2022 Bedfast, Inc.</p>
            </div>
        </div>
    )
}

export default Footer;