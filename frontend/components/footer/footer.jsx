import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <ul>
                    <li className="footer-label">Links</li>
                    <li><a href="https://github.com/derek-2">Github</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
                <ul>
                    <li className="footer-label">Technologies</li>
                </ul>
                <ul>
                    <li className="footer-label">About</li>
                </ul>
            </div>
            <div class="real-footer">
                <p>© 2022 Bedfast, Inc.</p>
            </div>
        </div>
    )
}

export default Footer;