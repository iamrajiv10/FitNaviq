import react, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from "../../Assets/fitNaviq_logo.png"

const Header = () => {
    const [showFoundersPen, setShowFoundersPen] = useState(false);

    return (
        <div >
            <header className="header">
                <img
                    onClick={() => setShowFoundersPen(!showFoundersPen)}
                    src={logo}
                    alt="FitNaviq Logo"
                    className="logo"
                />
                <nav className="nav">
                    <NavLink to="/" end className="link">
                        Home
                    </NavLink>
                    <NavLink to="/features" className="link">
                        Features
                    </NavLink>
                    <NavLink to="/career" className="link">
                        Career
                    </NavLink>
                    {/* <NavLink to="/contact" className="link">
                        Contact&nbsp;Us
                    </NavLink> */}
                </nav>
            </header>

            {/* Founder's Pen Panel */}
            <div className={`founders-pen-panel ${showFoundersPen ? "open" : ""}`}>
                <div className="founders-pen-content">
                    <button
                        className="close-btn"
                        onClick={() => setShowFoundersPen(false)}
                    >
                        ❌
                    </button>
                    <h2>✍️ Founder’s Pen</h2>
                    <p>
                        Fitness is not just about looking good — it is about living a
                        better, stronger, and healthier life. With FitNaviq, our mission is
                        to make wellness simple, smart, and accessible for everyone, no
                        matter where you start from. We believe your fitness journey should
                        empower you — from personalized workouts and nutrition guidance to
                        connecting with the best trainers and community events. It’s about
                        building habits that last, driven by real data and powerful
                        technology. Our vision is to create an ecosystem where motivation
                        meets innovation — where you can track progress, stay inspired, and
                        truly transform your lifestyle.
                    </p>
                    <p>
                        Stay tuned for a revolution in how you manage workouts, diet,
                        trainers, and your entire fitness journey. FitNaviq is here to
                        redefine what fitness means for you.
                    </p>
                    <p>
                        — <strong>Nikhil Singh, Building FitNaviq</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header;
