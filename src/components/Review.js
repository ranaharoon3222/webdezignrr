import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Arrow } from '@components/arrow';

export default () => {
  const [reviews] = useState([
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
          perView: 3,
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
      <div className='aboutsec py-[100px]  relative  '>
        <div className='wrapper'>
          <h1 className=' abouth font-space font-bold text-[65px] text-black max-w-[580px] leading-[82px]'>
            What peoples{' '}
            <span className='relative inline-block '>
              <span className='abp left-[110px] relative top-[75px] '>
                <img src='/images/aboutzig.png' alt='' />
              </span>
              Say
            </span>{' '}
            about us
          </h1>

          <div className='relative navigation-wrapper'>
            <div ref={sliderRef} className='py-10 pt-28 keen-slider'>
              {reviews.map((item) => {
                return (
                  <div className=' keen-slider__slide number-slide1 !overflow-visible'>
                    <div class='py-8 pt-0 m-4 px-4 bg-white slide-shadow  rounded-xl'>
                      <div class=' max-w-[90px] relative -top-8 -mb-8'>
                        <img
                          src='/images/team1.png'
                          className='border-2 border-[#ed5d79] rounded-full'
                          alt=''
                        />
                        <div class='starb max-w-[90px] mt-4'>
                          <img src='/images/aboutstars.png' alt='' />
                        </div>
                      </div>

                      <h4 className='py-2 pt-5 font-space'>
                        “I recently had the pleasure of working with a creative
                        agency called Designrr, and I must say Iwas thoroughly
                        impressed withtheir work. Their team of”
                      </h4>
                      <h4 className='font-space'>Jonathon H Coleman</h4>
                      <h4 className='pt-2 font-bold font-space'>
                        CEO Of Ivory Coast
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
            {loaded && instanceRef.current && (
              <div className='justify-end arrows'>
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
