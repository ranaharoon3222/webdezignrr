import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

export default () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = false;
            nextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className='keen-slider'>
        <div className='keen-slider__slide number-slide2'>
          <Image
            src={'/images/social.png'}
            quality={100}
            width={1920}
            height={900}
          />
        </div>
        <div className='keen-slider__slide number-slide2'>
          <Image
            src={'/images/mark.png'}
            quality={100}
            width={1920}
            height={900}
          />
        </div>
        <div className='keen-slider__slide number-slide2'>
          <Image
            src={'/images/seo.png'}
            quality={100}
            width={1920}
            height={900}
          />
        </div>
        <div className='keen-slider__slide number-slide2'>
          <Image
            src={'/images/digi.png'}
            quality={100}
            width={1920}
            height={900}
          />
        </div>
      </div>
    </>
  );
};

// import React from 'react';

// const Banner = () => {
//   return (
//     <div>
//       <div className='pt-12 bg-[#1B1A1D]'>
//         <div className='wrapper'>
//           <div className='grid gap-[40px] grid-cols-1 lg:grid-cols-[53%47%] secspacing'>
//             <div className='banner1 max-w-[676px] m-auto'>
//               <h2 className='font-bold text-center text-white capitalize font-space'>
//                 We build creative brands
//               </h2>
//               <h3 className='text-center mt-[8px] font-play text-white uppercase font-normal'>
//                 We Design &amp; develop stunning websites
//               </h3>
//               <div className='overflow-hidden bg-white rounded-md mt-8 max-w-[612px] w-full relative'>
//                 <div className='absolute left-2 top-[50%] translate-y-[-50%] max-w-[22px]'>
//                   <img src='/images/search.png' alt='' />
//                 </div>
//                 <input
//                   className='indent-6 font-space outline-none py-5 px-[15px] font-medium text-[#555555] text-[16px] max-w-[440px] w-[100%]'
//                   placeholder='“Want a LOGO or a WEBSITE design”'
//                   type='text'
//                 />
//                 <button className='hidden lg:block bg-black absolute top-[50%] translate-y-[-50%] right-1 rounded-md text-white py-[17px] px-[23px] font-medium uppercase font-space'>
//                   Talk to us
//                 </button>
//               </div>
//             </div>
//             <div className='banner2'>
//               <img src='/images/banner1.png' alt='' />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
