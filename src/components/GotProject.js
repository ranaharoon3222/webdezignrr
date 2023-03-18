import React from 'react';

const GotProject = () => {
  return (
    <div>
      <div className='gotprojectsec secspacing font-space '>
        <div className='wrapper'>
          <div className="twocol bg-[url('/images/gotbg.png')] bg-left bg-no-repeat bg-contain bg-[#F8F8F8] rounded-[40px] secspacing ">
            <div className='project1   max-w-[450px] m-auto '>
              <h1 className=' font-bold text-[70px] leading-[95px] text-black '>
                Got a project in Mind?
              </h1>
              <div className='gotbtn mt-[20px] sm:mt-20 py-[13px] px-[35px] w-[162px] h-[60px] bg-black rounded-lg  '>
                <a className=' font-medium text-[20px] text-white ' href='#'>
                  Talk to us
                </a>
              </div>
            </div>
            <div className='project2'>
              <div className='proimg max-w-[500px] '>
                <img src='/images/got.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GotProject;
