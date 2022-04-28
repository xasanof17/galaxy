import React from 'react';
import './Footer.scss';
import {
    FaFacebook,
    FaLinkedin,
    FaMailBulk,
    FaPhone,
    FaSearchLocation,
    FaTwitter
} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation
                            size={20}
                            style={{
                            color: '#fff',
                            marginRight: '2rem'
                        }}/>
                        <div>
                            <p>Tashkent</p>
                            <h4>Uzbekistan</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <a href='tel:+998 90 019 85 05'>
                            <FaPhone
                                size={20}
                                style={{
                                color: '#fff',
                                marginRight: '1.3rem'
                            }}/>
                            +998 90 019 85 05
                        </a>
                    </div>
                    <div className='email'>
                        <a href='mailto:xasanof17@gmail.com'>
                            <FaMailBulk
                                size={20}
                                style={{
                                color: '#fff',
                                marginRight: '1.3rem'
                            }}/>
                            xasanof17@gmail.com
                        </a>
                    </div>
                </div>
                <div className='right'>
                    <h4>About the company</h4>
                    <p>Lorem ipsum dolor sit amet. consectetur adipsing elit, sed to eiusmed tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div className='social'>
                        <a href='#'><FaFacebook size={30}
                            style={{
                            color: '#fff',
                            marginRight: '1rem'
                        }}/></a>
                        <a href='#'><FaTwitter size={30}
                            style={{
                            color: '#fff',
                            marginRight: '1rem'
                        }}/></a>
                        <a href='#'><FaLinkedin size={30}
                            style={{
                            color: '#fff',
                            marginRight: '1rem'
                        }}/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer