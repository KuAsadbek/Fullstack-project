import "../styles/components-css/footer.css"

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>Funiro.</h2>
                    <p className="title">400 University Drive Suite 200 Coral Gables,<p>FL 33134 USA</p></p>
                </div>
                <div className="footer-menu">
                    <ul>
                        <li className="title">Links</li>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-menu">
                    <ul>
                        <li className="title">Help</li>
                        <li>Payment Options</li>
                        <li>Returns</li>
                        <li>Privacy Policies</li>
                    </ul>
                </div>
                <div className="footer-email">
                    <ul>
                        <li className="title">Newsletter</li>
                        <li><input type="email" placeholder="Enter your email" /> <button className="footer-btn">Subscribe</button></li>
                    </ul>
                </div>
            </div>
            <hr />
            <p>2023 furino. All rights reverved</p>
        </div>
    );
}

export default Footer;