import React, { useEffect } from 'react';
import SpotifyPlayer from '../components/SpotifyPlayer';
import '../styles/aboutpage.css'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='about-container'>
      <div className='worktitle-section'>
        <h1 className='our-work-title'>
          OUR<span> WORK</span>
        </h1>
      </div>
      <div className='row spotify-boxes'>
        <SpotifyPlayer songId='2EFqMCOdTTkcFYHoJH21Jr' />
        <SpotifyPlayer songId='2EFqMCOdTTkcFYHoJH21Jr' />
        <SpotifyPlayer songId='2EFqMCOdTTkcFYHoJH21Jr' />
        <SpotifyPlayer songId='2EFqMCOdTTkcFYHoJH21Jr' />
        <SpotifyPlayer songId='2EFqMCOdTTkcFYHoJH21Jr' />
        <SpotifyPlayer songId='2EFqMCOdTTkcFYHoJH21Jr' />
      </div>
  
    </div>
  );
}
