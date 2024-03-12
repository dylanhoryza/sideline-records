import { Link } from 'react-router-dom';
import '../styles/servicespage.css'
import RecordingImage from '../services-images/microphone.png'
import PodcastImage from '../services-images/microphone (1).png'
import MixingImage from '../services-images/mixing-table.png'
import MeetingImage from '../services-images/meeting.png'
import BandImage from '../services-images/live-music.png'
import FilmAudioImage from '../services-images/video.png'
import CameraImage from '../services-images/video-camera (1).png'

export default function ServicesPage() {
  return (
    <section className='about-container' id='home'>
      <div className='our-services'>
        <div className='service-title'>
          <h1 className='services-header'>OUR <span>SERVICES</span></h1>
        </div>
        <div className='image-grid'>
          <div className='grid-item'>
            <img src={RecordingImage} alt='Description 1' />
            <h2 className='image-title'>Vocal Recording</h2>
            <p>Vocal quality is everything in recording music. We speacialize in capturing industry standard vocal quality for your songs and projects and offer many different microphone options.</p>
            <Link to="/videos/music">
            <button className='watch-btn-about'>View</button>
         </Link>
          </div>
          <div className='grid-item'>
            <img src={MixingImage} alt='Description 2' />
            <h2 className='image-title'>Mixing</h2>
            <p>We offer full mixing and mastering of your songs. Whether it is full tracked out instrumental stems or multiple layers of vocal production, we can deliver high quality mixes utilizing Pro Tools and our numerous plug in libraies.</p>
            <Link to="/videos/events">
            <button className='watch-btn-about'>View</button>
         </Link>
          </div>
          <div className='grid-item'>
            <img src={FilmAudioImage} alt='Description 3' />
            <h2 className='image-title'>Film Audio</h2>
            <p>Sound can make or break a good film. We now offer 5.1 surround sound mixing, dialouge editing, sound design and foley to help bring your next film to life.</p>
            <Link to="/photos">
            <button className='watch-btn-about'>View</button>
         </Link>
          </div>
          <div className='grid-item'>
            <img src={PodcastImage} alt='Description 4' />
            <h2 className='image-title'>Podcasts</h2>
            <p>We have ample space for you to setup your podcast. We have multiple microphones perfect for podcasts as well as lighting and clean audio quality mixing.</p>
            <Link to="/videos/lifestyle">
            <button className='watch-btn-about'>View</button>
            </Link>
          </div>
          <div className='grid-item'>
            <img src={BandImage} alt='Description 4' />
            <h2 className='image-title'>Live Bands</h2>
            <p>Live sound has been a huge part of our company. We offer a full band and live recording space to record your next album or single. Equipped with the right gear and microphones, we can record just about any instrument. </p>
            <Link to="/videos/lifestyle">
            <button className='watch-btn-about'>View</button>
            </Link>
          </div>
          <div className='grid-item'>
            <img src={MeetingImage} alt='Description 4' />
            <h2 className='image-title'>Meeting Space</h2>
            <p>Our studio is a great space for you and your company to hold creative meetings. Our facility provides ample seating, display screens and the ability to record meetings.</p>
            <Link to="/videos/lifestyle">
            <button className='watch-btn-about'>View</button>
            </Link>
          </div>
    
        </div>
      </div>
   
  

     
    </section>
  );
}