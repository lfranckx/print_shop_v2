import React, { Component } from 'react';
import './HeroSection.css';
import { Button } from '../Button/Button';

export default class HeroSection extends Component  {
  render() {
    return (
      <div className='hero-container'>
        <video src='videos/video-1.mp4' autoPlay loop muted />
        <h1>TRDMRK PRINTS</h1>
        <h2>Create custom logos and designs for t-shirts and more</h2>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            YOUR ACCOUNT
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            WATCH TRAILER <i className='far fa-play-circle' />
          </Button>
        </div>
      </div>
    );
  }
}