import React from 'react';

const MobileFirst = () => {
  return (
    <div>
      <div className='mobilefirstsec py-[70px] '>
        <div className='wrapper'>
          <div className='twocol'>
            <div className='mobilef1 max-w-[510px] '>
              <h1 className=' font-space font-bold text-black text-[50px] leading-[63px]'>
                Mobile- First Responsive Design
              </h1>
              <p className=' font-space font-normal mt-6 text-[18px] leading-[30px] text-[#555555]'>
                Welcome to our company, where we specialize in mobile-first
                responsive design. In today's world, mobile devices are the most
                commonly used platform for accessing the internet. As a result,
                it is essential that businesses optimize
              </p>
              <div className='mobfimg mt-14 '>
                <img src='/images/mobilef1.png' alt='' />
              </div>
            </div>
            <div className='mobilef2 max-w-[550px] px-[40px] border-l border-solid border-[#CCCCCC] '>
              <div className='mobf2img'>
                <img src='/images/mobilef2.png' alt='' />
              </div>
              <h1 className=' font-space font-bold mt-6 text-black text-[44px] leading-[60px]'>
                Work directly With your Designer
              </h1>
              <p className=' font-space font-normal mt-6 text-[18px] leading-[30px] text-[#555555]'>
                Welcome to our company, where we specialize in mobile-first
                responsive design. In today's world, mobile devices are the most
                commonly used platform for accessing the
              </p>
              <div className='mobresbtn mt-6 py-[15px] px-[27px] h-[55px] w-[173px] bg-black rounded-lg '>
                <a
                  className=' font-space font-medium text-[16px] text-white'
                  href='#'
                >
                  Start a project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFirst;
