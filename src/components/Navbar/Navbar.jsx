import React, { useState } from 'react';
import './Navbar.scss';
import { getImageUrl } from '../../help/utils';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav id="navbar" className="navbar-component">
            <a className="title" href="/">
                Portfolio
            </a>
            <div className="menu">
                <img
                    className="menuBtn"
                    src={menuOpen ? getImageUrl('nav/closeIcon.svg') : getImageUrl('nav/menuIcon.svg')}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`menuItems ${menuOpen && 'menuOpen'}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="#overview">About</a>
                    </li>
                    <li>
                        <a href="#skill">Skills</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#project">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
