import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Arrow } from '@components/arrow';

export default () => {
  const [slides] = useState([
    {
      avatar: '',
      body: '',
      name: '',
      title: '',
    },
    {
      avatar: '',
      body: '',
      name: '',
      title: '',
    },
    {
      avatar: '',
      body: '',
      name: '',
      title: '',
    },
    {
      avatar: '',
      body: '',
      name: '',
      title: '',
    },
    {
      avatar: '',
      body: '',
      name: '',
      title: '',
    },
    {
      avatar: '',
      body: '',
      name: '',
      title: '',
    },
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 0,
    },
    breakpoints: {
      '(min-width: 980px)': {
        slides: {
          perView: 4,
        },
      },
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
      <div class='teamsec pt-40  font-space relative '>
        <div class='wrapper '>
          <h1 class=' teamh text-center font-bold md:text-[70px] pb-10 text-black'>
            <span class=' inline-block relative '>
              <span class='meetp left-[15px] relative inline-block  '>
                <img src='/images/mp1.png' alt='' />
              </span>
              Meet
            </span>{' '}
            our team
          </h1>

          <div className='relative pb-16 navigation-wrapper'>
            <div ref={sliderRef} className='py-10 keen-slider'>
              {slides.map((item) => {
                return (
                  <div className=' keen-slider__slide number-slide1'>
                    <div class='  bg-white slide-shadow rounded-xl m-4 py-8'>
                      <div class=' text-center '>
                        <div class='nimg max-w-[100px] m-auto '>
                          <img src='/images/team1.png' alt='' />
                        </div>

                        <h3 className='py-2 pt-5 font-bold font-space'>
                          Chris Clafford
                        </h3>
                        <h4 className='font-space'>Senior colsultant</h4>
                        <h4 className='pt-2 font-bold font-space'>
                          Front-End Developer
                        </h4>
                      </div>
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
      </div>
    </>
  );
};
