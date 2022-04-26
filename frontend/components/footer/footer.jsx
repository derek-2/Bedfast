import React from 'react';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="footer">
                <ul>
                    <li className="footer-label footer-item">Links</li>
                    <li className="footer-item"><a href="https://github.com/derek-2">Github</a></li>
                    <li className="footer-item"><a href="#">Link 2</a></li>
                    <li className="footer-item"><a href="#">Link 3</a></li>
                </ul>
                <ul>
                    <li className="footer-label footer-item">Technologies</li>
                    <li className="footer-item">stuff1</li>
                    <li className="footer-item">stuff2</li>
                    <li className="footer-item">stuff3</li>
                </ul>
                <ul>
                    <li className="footer-label footer-item">About</li>
                    <li className="footer-item">stuff1</li>
                    <li className="footer-item">stuff2</li>
                    <li className="footer-item">stuff3</li>
                </ul>
            </div>
            <div className="real-footer">
                <p>© 2022 Bedfast, Inc.</p>
            </div>
        </div>
    )
}

export default Footer;