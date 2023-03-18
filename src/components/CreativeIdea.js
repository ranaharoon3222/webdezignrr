import React, { useState } from 'react';

const CreativeIdea = () => {
  const [badges] = useState([
    {
      name: 'Digital Design',
      img: '/images/idea2.png',
    },
    {
      name: 'Brand Design',
      img: '/images/idea3.png',
    },
    {
      name: 'Social Media',
      img: '/images/idea4.png',
    },
    {
      name: 'UI/UX Design',
      img: '/images/idea5.png',
    },
    {
      name: 'Websites',
      img: '/images/idea6.png',
    },
    {
      name: 'Infographics',
      img: '/images/idea9.png',
    },
    {
      name: 'Illustrations',
      img: '/images/idea8.png',
    },
    {
      name: 'Mobile Apps',
      img: '/images/idea7.png',
    },
    {
      name: 'Packaging',
      img: '/images/idea11.png',
    },
    {
      name: 'Animation',
      img: '/images/idea12.png',
    },
    {
      name: 'Print',
      img: '/images/idea11.png',
    },
  ]);
  return (
    <div>
      <div className='py-16 sm:pt-32 ideasec '>
        <div className='wrapper'>
          <div className='ideabox '>
            <div className='idea1'>
              <div className='idea1img'>
                <img src='/images/idea1.png' alt='' />
              </div>
            </div>
            <div className='idea2 max-w-[660px] m-auto'>
              <h1 className='  font-bold font-space text-[70px] leading-[95px]'>
                Let’s get
                <span className='relative inline-block ml-3 '>
                  <span className='print '>
                    <img
                      className=' ml-auto mb-[-35px] relative right-[-30px] '
                      src='/images/print.png'
                      alt=''
                    />
                  </span>
                  creative
                  <span className='orangzag'>
                    <img src='/images/orangezag.png' alt='' />
                  </span>
                </span>
                with Your Idea
              </h1>
              <div className='flex flex-wrap mt-9'>
                {badges.map((item) => {
                  return (
                    <div className='mr-3 mb-5 py-3 text-center justify-center px-4  flex items-center gap-3 bg-[#F8F8F8] rounded-[44px]'>
                      <div className='fimg'>
                        <img src={item.img} alt='' />
                      </div>
                      <h4 className='font-semibold font-space'>{item.name}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeIdea;
