import React, { useEffect } from 'react';
import SpotifyPlayer from '../components/SpotifyPlayer';
import '../styles/aboutpage.css';
import avatarImage from '../assets/facility.jpeg'
import bullpenImage from '../assets/bullpen.jpeg'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='about-container'>
      <div className='title-section'>
        <h1 className='our-work-title'>
          OUR<span> WORK</span>
        </h1>
      </div>
      <div className='container'>
        <div className='row spotify-boxes'>
          <SpotifyPlayer songId='2EFqMCOdTTkcFYHoJH21Jr' />
          <SpotifyPlayer songId='2EFqMCOdTTkcFYHoJH21Jr' />
          <SpotifyPlayer songId='2EFqMCOdTTkcFYHoJH21Jr' />
          <SpotifyPlayer songId='2EFqMCOdTTkcFYHoJH21Jr' />
          <SpotifyPlayer songId='2EFqMCOdTTkcFYHoJH21Jr' />
          <SpotifyPlayer songId='2EFqMCOdTTkcFYHoJH21Jr' />
          <SpotifyPlayer songId='2EFqMCOdTTkcFYHoJH21Jr' />
          <SpotifyPlayer songId='2EFqMCOdTTkcFYHoJH21Jr' />
        </div>
      </div>
      <div className='meet-the-team'>
        <div className='service-title'>
          <h1 className='team-header'>
            ABOUT OUR <span className='our-team-span'>FACILITY</span>
          </h1>
        </div>
        <div className='container'>
          <div className='row about-container'>
            <div className='col-md-6'>
              <img src={avatarImage} alt='avatar' className='avatar' />
              <img src={bullpenImage} alt='avatar-2' className='avatar-2' />
            </div>
            <div className='col-md-6'>
              <div class='card about-me-card'>
                <div class='card-body'>
                  <p class='card-text' id='about-bio'>
                    The goal at SLR is to provide a blank canvas for creative
                    ideas to flow. unimpeded. We accomplish this by providing
                    knowledgeable staff, cutting edge equipment and software, as
                    well as an atmosphere that promotes productive energy during
                    your time with us. We value the time you have entrusted us
                    with, and take pride in our speed and efficiency, to achieve
                    the best return on your investment in yourself. <br></br> <br></br>
                    The
                    engineers at our facility have substantial experience in the
                    audio world, from music, to film and television, as well as
                    live sound and concerts. Our Owner and Lead Engineer, Chris
                    Grimsley, has worked with Platinum selling and Grammy
                    Award-winning artists and musicians, whose collective
                    catalogues span decades. With an "easy-going" disposition
                    outside the studio, his "on-the clock" demeanor represents a
                    saying he picked up from his time in the Military; "Slow is
                    Smooth, and Smooth is Fast. 
                    <br /> <br />
                    This 1900 sqft facility can
                    accommodate large multi-track recording sessions, including
                    large bands, choirs, orchestral ensembles, complex foley,
                    and multi-character ADR sessions. Yet, with a modular
                    layout, can accommodate even the most intimate vocal
                    recordings. Sideline Records lives to one of the meanings of
                    it's name. Being a critical part of the team, on the
                    sideline, much like coaches, trainers, coordinators... while
                    you the artist can focus on the goal from the field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='title-section'>
        <h1 className='our-gear-title'>
          OUR<span> GEAR</span>
        </h1>
      </div>
      <div className='container'>
        <div className='row gear-row'>
          <div className='card gear-card'>
            <div className='card-body'>Avid ProTools</div>
          </div>
          <div className='card gear-card'>
            <div className='card-body'>Universal Audio Apollo</div>
          </div>
          <div className='card gear-card'>
            <div className='card-body'>UAD Plugins</div>
          </div>
          <div className='card gear-card'>
            <div className='card-body'>Universal Audio Mic Preamps</div>
          </div>
          <div className='card gear-card'>
            <div className='card-body'>API Mic Preamps</div>
          </div>
          <div className='card gear-card'>
            <div className='card-body'>Focusrite ISA Mic Preamps</div>
          </div>
          <div className='card gear-card'>
            <div className='card-body'>Warm Audio Mic Preamps</div>
          </div>
          <div className='card gear-card'>
            <div className='card-body'>CloudLifter</div>
          </div>
          <div className='card gear-card'>
            <div className='card-body'>Shure Mics</div>
          </div>
          <div className='card gear-card'>
            <div className='card-body'>AKG Mics</div>
          </div>
          <div className='card gear-card'>
            <div className='card-body'>Sennheiser Mics</div>
          </div>
          <div className='card gear-card'>
            <div className='card-body'>Rode Mics</div>
          </div>
          <div className='card gear-card'>
            <div className='card-body'>HearBack Octo</div>
          </div>
          <div className='card gear-card'>
            <div className='card-body'>Triad Orbit Stands</div>
          </div>
          <div className='card gear-card'>
            <div className='card-body'>Mogami Cables</div>
          </div>
          <div className='card gear-card'>
            <div className='card-body'>Canare Cables</div>
          </div>
          <div className='card gear-card'>
            <div className='card-body'>Waves Plugins</div>
          </div>
          <div className='card gear-card'>
            <div className='card-body'>5.1 Surround Setup</div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
