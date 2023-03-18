import React, { useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { Popover } from '@headlessui/react';

const ServiceSlider = () => {
  const [images, setImages] = useState([
    {
      titlle: 'Logo & Branding',
      img: '/images/bnav1.png',
    },
    {
      titlle: 'T-shirt & Merchandise',
      img: '/images/bnav1.png',
    },
    {
      titlle: 'Website Design',
      img: '/images/bnav1.png',
    },
    {
      titlle: 'Illustrations',
      img: '/images/bnav1.png',
    },
    {
      titlle: 'Image Editing',
      img: '/images/bnav1.png',
    },
    {
      titlle: 'Social Media Design',
      img: '/images/bnav1.png',
    },
    {
      titlle: 'Web Development',
      img: '/images/bnav1.png',
    },
    {
      titlle: 'T-shirt & Merchandise',
      img: '/images/bnav1.png',
    },
    {
      titlle: 'T-shirt & Merchandise',
      img: '/images/bnav1.png',
    },
    {
      titlle: 'T-shirt & Merchandise',
      img: '/images/bnav1.png',
    },
  ]);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: false,
      slides: { perView: 'auto', spacing: 10 },
    },
    [
      // add plugins here
    ]
  );

  return (
    <div ref={sliderRef} className='px-3 py-4 pb-40 keen-slider'>
      {images.map((slide, i) => {
        return (
          <div
            className='keen-slider__slide !w-auto !overflow-visible'
            key={i}
            style={{ flex: '0 0 auto' }}
          >
            <Popover className='relative'>
              <Popover.Button>
                <div className='flex items-center'>
                  <img alt='' src={slide.img} />
                  <span className='m-2 font-medium font-space'>
                    {slide.titlle}
                  </span>
                </div>
              </Popover.Button>

              <Popover.Panel className='absolute z-10'>
                <ul
                  tabindex='0'
                  class='p-2 mb-3 bg-white border rounded-md shadow dropdown-content menu w-52'
                >
                  <a href='/account-settings' className='py-2'>
                    Account settings
                  </a>

                  <a href='/account-settings' className='py-2'>
                    Account settings
                  </a>

                  <a href='/account-settings' className='py-2'>
                    Account settings
                  </a>
                </ul>

                <img src='/solutions.jpg' alt='' />
              </Popover.Panel>
            </Popover>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceSlider;
