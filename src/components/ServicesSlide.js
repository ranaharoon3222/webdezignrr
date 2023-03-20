import React, { useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { Popover } from '@headlessui/react';

const ServiceSlider = () => {
  const [images, setImages] = useState([
    {
      titlle: 'Logo & Branding',
      img: '/images/bnavlogo.png',
    },
    {
      titlle: 'T-shirt & Merchandise',
      img: '/images/bnav1.png',
    },
    {
      titlle: 'Website Design',
      img: '/images/bnav2.png',
    },
    {
      titlle: 'Illustrations',
      img: '/images/bnav3.png',
    },
    {
      titlle: 'Image Editing',
      img: '/images/bnav4.png',
    },
    {
      titlle: 'Social Media Design',
      img: '/images/bnav5.png',
    },
    {
      titlle: 'UI Design',
      img: '/images/uidesign.png',
    },
    {
      titlle: 'Game Design',
      img: '/images/gamedev.png',
    },
    {
      titlle: 'Web Development',
      img: '/images/webdevIco.png',
    },
    {
      titlle: 'Android Development',
      img: '/images/andico.png',
    },
  ]);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: {
        min: 10,
      },
      slides: { perView: 'auto', spacing: 10 },
    },
    [
      // add plugins here
    ]
  );

  return (
    <div ref={sliderRef} className='px-3 py-4 h-[400px] -mb-52 keen-slider'>
      {images.map((slide, i) => {
        return (
          <div
            className='keen-slider__slide !w-auto !overflow-visible'
            key={i}
            style={{ flex: '0 0 auto' }}
          >
            <Popover className='relative'>
              <Popover.Button className='outline-none'>
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
                  className='relative p-0 mt-3 mb-3 bg-white border rounded-md shadow dropdown-content menu w-52'
                >
                  <span
                    className='absolute w-5 h-4 shadow-md left-5 -top-4 bg-[#e5e7eb]'
                    style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                  >
                    {' '}
                  </span>
                  <a
                    href='/account-settings'
                    className='p-3 border-b border-gray-200 '
                  >
                    HTML & CSS
                  </a>

                  <a
                    href='/account-settings'
                    className='p-3 border-b border-gray-200'
                  >
                    ReactJS
                  </a>

                  <a
                    href='/account-settings'
                    className='p-3 border-b border-gray-200'
                  >
                    Vue JS
                  </a>
                  <a
                    href='/account-settings'
                    className='p-3 border-b border-gray-200'
                  >
                    Angular JS
                  </a>
                  <a
                    href='/account-settings'
                    className='p-3 border-b border-gray-200'
                  >
                    Svelte
                  </a>
                  <a
                    href='/account-settings'
                    className='p-3 border-b border-gray-200'
                  >
                    Backbone.js
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
