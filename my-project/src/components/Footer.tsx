export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-text">
                    <div className="footer-header">
                        <img src="/logoFooter.svg" alt="logo" />
                        <h2 className="footer-company">DiveSea</h2>
                    </div>
                    <nav className="footer-links">
                        <a className="footer-link" href="">PRIVACY POLICY</a>
                        <a className="footer-link" href="">TERMS & CONDITIONS</a>
                        <a className="footer-link" href="">ABOUT US</a>
                        <a className="footer-link" href="">CONTACT</a>
                    </nav>
                </div>
                <div className="footer-socials">
                    <img src="/socialsFooter.svg" alt="socials" />
                </div>
            </div>
            <a className="footer-copyright" href="">© 2023 DiveSea All Rights Reserved.</a>
        </div>
    );
}