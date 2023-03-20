import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const Portfolio = () => {
  const [open, setOpen] = React.useState(false);
  const [slideIndex, setSlideIndex] = React.useState(0);

  const [images] = useState([
    { src: '/images/port2.png' },
    { src: '/images/port4.png' },
    { src: '/images/port6.png' },
    { src: '/images/port8.png' },
    { src: '/images/port7.png' },
    { src: '/images/port9.png' },
    { src: '/images/port10.png' },
    { src: '/images/port11.png' },
    { src: '/images/port12.png' },
    { src: '/images/port3.png' },
  ]);

  const openLightBox = (index) => {
    setOpen(true);
    setSlideIndex(index);
  };
  return (
    <div>
      <div className='pb-10 md-pb-0 portfoliosec '>
        <Lightbox
          open={open}
          index={slideIndex}
          close={() => setOpen(false)}
          slides={images}
          plugins={[Thumbnails, Fullscreen]}
        />
        <div className='wrapper'>
          <div className='portfoliomain max-w-[1000px] m-auto'>
            <h1 className='font-space font-bold text-black  sm:text-[70px] text-center'>
              What do you need{' '}
              <span className='text-transparent bg-gradient-to-r from-[#ED5F78] to-[#FABC1C] bg-[#ED5F78] bg-clip-text fill-transparent'>
                designed?
              </span>
            </h1>
            <h2 className='font-space   mt-6 font-bold text-black max-w-[255px] m-auto'>
              Our Portfolio
            </h2>
            <div className='portfolioimg mt-[5px] text-center max-w-[120px] md:max-w-[245px] m-auto'>
              <img src='/images/zigzag.png' alt='' />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-5 lg:grid-cols-4 mt-[30px] sm:mt-[60px]'>
            {images.map((item, i) => {
              return (
                <div
                  key={i + Math.random(99999999999)}
                  className='transition-all cursor-pointer hover:scale-105'
                  onClick={() => openLightBox(i)}
                >
                  <img alt='' src={item.src} loading='lazy' />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
