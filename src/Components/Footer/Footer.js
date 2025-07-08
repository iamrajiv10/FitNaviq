import './Footer.css';
import insta from "../../Assets/insta_logo.png";
import whatapp from "../../Assets/whatsapp_logo.png";

const Footer = () => {
    return (
        <footer className='footer'>
            &copy; 2025 FitNaviq. All rights reserved.
            <br />
            For updates &amp; enquiries:{" "}
            <a
                style={{ color: "#a7c2b9" }}
                href="mailto:team@fitnaviq.in"
            >
                team@fitnaviq.in
            </a>
            <div className="social-contact" style={{ marginTop: "10px" }}>
                <span style={{ marginRight: "8px" }}>
                    Follow &amp; contact us:
                </span>
                <a
                    href="https://instagram.com/fitnaviq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <img
                        src={insta}
                        alt="Instagram"
                        style={{ width: "32px", marginRight: "10px", verticalAlign: "middle" }}
                    />
                </a>
                <a
                    href="https://wa.me/917991207033?text=Hello%20FitNaviq%20Team%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20platform.%20Could%20you%20please%20share%20details%20about%20how%20FitNaviq%20works%2C%20what%20features%20will%20be%20available%2C%20and%20any%20launch%20offers%20or%20early%20access%20programs%3F%.%20Thank%20you%21"

                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <img
                        src={whatapp}
                        alt="WhatsApp"
                        style={{ width: "32px", verticalAlign: "middle" }}
                    />
                </a>
            </div>
        </footer>
    )
}

export default Footer;
