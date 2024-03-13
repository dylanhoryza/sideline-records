import React from 'react';

const SpotifyPlayer = ({songId, ...props}) => {
  const embedUrl = `https://open.spotify.com/embed/track/${songId}`;

  return (
    <div className='spotify-player'>
      <iframe
        style={{ borderRadius: '12px' }}
        src={`${embedUrl}?utm_source=generator&theme=0`}
        width='100%'
        height='152'
        frameBorder='0'
        allowfullscreen=''
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
        {...props}
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;
