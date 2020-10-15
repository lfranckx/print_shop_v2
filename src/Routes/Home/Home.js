import React, { Component } from 'react';
import '../../App.css';
import Cards from '../../Components/Cards/Cards';
import HeroSection from '../../Components/HeroSection/HeroSection';

export default class Home extends Component {
    render() {
        return (
            <>
                <HeroSection />
                <Cards />
                <Footer />
            </>
        )
    }
}