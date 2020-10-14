import React from 'react';
import './HerroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>TRDMRK CUSTOM PRINTS</h1>
            <p>Create custom logos and designs for t-shirts and more</p>
            <div className="hero-btns">
                <Button 
                    className="btns" 
                    btnStyle="btn--outline"
                    btnSize="btn--large"
                >
                    GET STARTED
                </Button>
                <Button 
                    className="btns" 
                    btnStyle="btn--primary"
                    btnSize="btn--large"
                >
                    WATCH TRAILER <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
