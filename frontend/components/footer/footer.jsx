import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="main-footer">
            <div className="footer">
                <ul>
                    <div></div>
                    <div></div>
                    <li className="footer-label footer-item">Links</li>
                    <li className="footer-item"><a href="https://github.com/derek-2" className='profile-link' target='_blank'>Github</a></li>
                    <li className="footer-item"><a href="https://www.linkedin.com/in/derek-lee-a43632152/" className='profile-link' target='_blank'>Linkedin</a></li>
                    <li className="footer-item"><a href="https://angel.co/u/derek-lee-35" className='profile-link' target='_blank'>AngelList</a></li>
                </ul>
            </div>
            <div className="real-footer">
                <p>© {year} Bedfast, Inc.</p>
            </div>
        </div>
    )
}

export default Footer;