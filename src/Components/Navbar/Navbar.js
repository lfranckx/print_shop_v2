import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        TRDMRK
                        <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>

                <div className='navbar-container'>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link
                                to='/products'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/services'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/templates'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Templates
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/design-lab'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Design Lab
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/login'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Your Account
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
            </nav>
        </>
    )
}

export default Navbar;