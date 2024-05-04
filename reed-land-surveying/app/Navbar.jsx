import { useEffect, useState } from 'react';
import '../styles/scss/Navbar.scss';
import Link from 'next/link';

function Navbar({ scrollToBottom, navFg = "#FFFFFF", navBtnFg = "#000000" }) {

    const styles = {
        '--nav-fg': navFg,
        '--nav-btn-bg': navFg,
        '--nav-btn-fg': navBtnFg,
    }

    return (
        <div className="container px-3 px-md-4 px-lg-5">
            <div className="navbar-wrapper mb-3 mb-md-4 mb-lg-5" style={styles}>
                <nav className="site-navigation">
                    <div className="site-logo-container">Reed Land Surveying</div>
                    <div className="nav-links-container">
                        <NavLink to="/" displayText="HOME" />
                        <NavLink to="/services" displayText="SERVICES" />
                        <NavLink to="" displayText="PROJECTS" />
                        <NavLink to="/about" displayText="ABOUT US" />
                    </div>
                    <div>
                        <a className='nav-btn' onClick={() => scrollToBottom(100)}>
                            <span>Contact Us</span>
                        </a>
                    </div>
                </nav>
            </div>
        </div>

    )
}

function NavLink({ to, displayText }) {

    const [mounted, setMounted] = useState();
    const [hovered, setHovered] = useState();
    
    useEffect(() => {
        setTimeout(() => {
            setMounted(true)
        }, 750)
    }, [])

    const onMouseEnter = () => {
        setHovered(true);
    }

    const onMouseLeave = () => {
        setHovered(false);
    }

    const isHovered = mounted && (hovered || window.location.pathname.toLowerCase() === to)

    return (
        <div className="nav-link-wrapper">
            <Link disabled onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={"nav-link" + (isHovered ? " hovered" : "")} href={to}>{displayText}</Link>
        </div>
    )
}

export default Navbar