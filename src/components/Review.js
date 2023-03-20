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
          <h1 className=' relative font-space font-bold md:text-[65px] text-black max-w-[580px] md:leading-[82px]'>
            What peoples Say
            <span className='abp absolute md:right-[-85px] -z-10  right-[30px] md:top-[-30px] '>
              <img
                src='/images/aboutzig.png'
                className='max-w-[50px] md:max-w-[100%]'
                alt=''
              />
            </span>
          </h1>
          <h1 className='font-bold font-space '>about us</h1>

          <div className='relative navigation-wrapper'>
            <div ref={sliderRef} className='py-10 pt-28 keen-slider'>
              {reviews.map((item, i) => {
                return (
                  <div
                    className=' keen-slider__slide number-slide1 !overflow-visible'
                    key={i}
                  >
                    <div className='px-4 py-8 pt-0 m-4 bg-white slide-shadow rounded-xl'>
                      <div className=' max-w-[90px] relative -top-8 -mb-8'>
                        <img
                          src='/images/team1.png'
                          className='border-2 border-[#ed5d79] rounded-full'
                          alt=''
                        />
                        <div className='starb max-w-[90px] mt-4'>
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
