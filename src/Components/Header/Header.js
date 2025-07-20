import react, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from "../../Assets/fitNaviq_logo.png"

const Header = () => {
      const [showDropdown, setShowDropdown] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const authStatus = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(authStatus);
    }, [location.pathname]);

    const handleLogout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <NavLink to="/">
                    <img
                        // onClick={() => setShowFoundersPen(!showFoundersPen)}
                        style={{ height: "43px", cursor: "pointer" }}
                        src={logo}
                        alt="FitNaviq Logo"
                        className="logo"
                    />
                </NavLink>
            </div>

            <ul className="nav-links">
                <li
                    className="dropdown"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                >
                    <span className="drop-toggle">Features ▼</span>
                    {showDropdown && (
                        <ul className="dropdown-menu">
                            <li><NavLink to="/features/user">👤 User Platform</NavLink></li>
                            <li><NavLink to="/features/trainer">🏋️ Trainer Platform</NavLink></li>
                            <li><NavLink to="/features/gym">🏢 Gym Module</NavLink></li>
                            <li><NavLink to="/features/ai-core">⚙️ AI Core</NavLink></li>
                        </ul>
                    )}
                </li>
                <li><NavLink to="/careers">Careers</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/branding">Branding</NavLink></li>
                {/* Login/Logout Toggle */}
                {!isLoggedIn ? (
                    <li>
                        <NavLink to="/login" className="login-btn">Login</NavLink>
                    </li>
                ) : (
                    <li>
                        <NavLink
                            to="/login"
                            className="logout-btn"
                            onClick={() => {
                                localStorage.clear();
                                setIsLoggedIn(false);
                            }}
                        >
                            Logout
                        </NavLink>
                    </li>
                )}
            </ul>

            {/* <NavLink to="/" end className="link">
                Home
            </NavLink>
            <NavLink to="/features" className="link">
                Features
            </NavLink>
            <NavLink to="/career" className="link">
                Career
            </NavLink> */}
            {/* <NavLink to="/contact" className="link">
                        Contact&nbsp;Us
                    </NavLink> */}
        </nav>
    )
}

export default Header;
