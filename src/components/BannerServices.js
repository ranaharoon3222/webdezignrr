import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Arrow } from '@components/arrow';

export default () => {
  const [slides] = useState([
    {
      img: '/images/s-1.png',
      body: '',
      name: '',
      title: '',
    },
    {
      img: '/images/s-2.png',
      body: '',
      name: '',
      title: '',
    },
    {
      img: '/images/s-3.png',
      body: '',
      name: '',
      title: '',
    },
    {
      img: '/images/s4.png',
      body: '',
      name: '',
      title: '',
    },
    {
      img: '/images/s-5.png',
      body: '',
      name: '',
      title: '',
    },
    {
      img: '/images/s-1.png',
      body: '',
      name: '',
      title: '',
    },
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 'auto',
      spacing: 20,
    },

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className='relative pt-40 font-space '>
        <div className='relative pb-16 navigation-wrapper'>
          <div ref={sliderRef} className='py-10 keen-slider'>
            {slides.map((item, i) => {
              return (
                <div
                  className=' keen-slider__slide number-slide1 !w-auto'
                  style={{ flex: '0 0 auto' }}
                  key={i}
                >
                  <div className=''>
                    <img src={item.img} />
                  </div>
                </div>
              );
            })}
          </div>
          {loaded && instanceRef.current && (
            <div className='arrows'>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
