import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className='bannersec bg-[#1B1A1D]'>
        <div className='wrapper'>
          <div className='grid gap-[40px] grid-cols-1 lg:grid-cols-[53%47%] secspacing'>
            <div className='banner1 max-w-[676px] m-auto'>
              <h2 className='font-bold text-center text-white capitalize'>
                We build creative brands
              </h2>
              <h3 className='text-center mt-[8px] font-play text-white uppercase font-normal'>
                We Design &amp; develop stunning websites
              </h3>
              <div className='overflow-hidden bg-white rounded-md mt-8 max-w-[612px] w-full relative'>
                <div className='absolute left-2 top-[50%] translate-y-[-50%] max-w-[22px]'>
                  <img src='/images/search.png' alt='' />
                </div>
                <input
                  className='indent-6 font-space outline-none py-5 px-[15px] font-medium text-[#555555] text-[16px] max-w-[440px] w-[100%]'
                  placeholder='“Want a LOGO or a WEBSITE design”'
                  type='text'
                />
                <button className='hidden lg:block bg-black absolute top-[50%] translate-y-[-50%] right-1 rounded-md text-white py-[17px] px-[23px] font-medium uppercase font-space'>
                  Talk to us
                </button>
              </div>
            </div>
            <div className='banner2'>
              <img src='/images/banner1.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
