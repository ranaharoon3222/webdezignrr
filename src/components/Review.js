import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styles from './arrow.module.css';

export default () => {
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
            <div ref={sliderRef} className='py-10 keen-slider'>
              <div className=' keen-slider__slide number-slide1'>
                <div class='py-8 m-2 px-4 bg-white shadow-md  rounded-xl'>
                  <div class=' max-w-[90px]'>
                    <img src='/images/team1.png' alt='' />
                  </div>
                  <div class='starb max-w-[70px] mt-4'>
                    <img src='/images/aboutstars.png' alt='' />
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
              <div className=' keen-slider__slide number-slide1'>
                <div class='py-8 m-2 px-4 bg-white shadow-md  rounded-xl'>
                  <div class=' max-w-[90px]'>
                    <img src='/images/team1.png' alt='' />
                  </div>
                  <div class='starb max-w-[70px] mt-4'>
                    <img src='/images/aboutstars.png' alt='' />
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
              <div className=' keen-slider__slide number-slide1'>
                <div class='py-8 m-2 px-4 bg-white shadow-md  rounded-xl'>
                  <div class=' max-w-[90px]'>
                    <img src='/images/team1.png' alt='' />
                  </div>
                  <div class='starb max-w-[70px] mt-4'>
                    <img src='/images/aboutstars.png' alt='' />
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
              <div className=' keen-slider__slide number-slide1'>
                <div class='py-8 m-2 px-4 bg-white shadow-md  rounded-xl'>
                  <div class=' max-w-[90px]'>
                    <img src='/images/team1.png' alt='' />
                  </div>
                  <div class='starb max-w-[70px] mt-4'>
                    <img src='/images/aboutstars.png' alt='' />
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
              <div className=' keen-slider__slide number-slide1'>
                <div class='py-8 m-2 px-4 bg-white shadow-md  rounded-xl'>
                  <div class=' max-w-[90px]'>
                    <img src='/images/team1.png' alt='' />
                  </div>
                  <div class='starb max-w-[70px] mt-4'>
                    <img src='/images/aboutstars.png' alt='' />
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
            </div>
            {loaded && instanceRef.current && (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`${styles.arrow} ${
        props.left ? `${styles.arrow__left}` : `${styles.arrow__right}`
      } ${disabeld}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      {props.left && (
        <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
      )}
      {!props.left && (
        <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
      )}
    </svg>
  );
}
