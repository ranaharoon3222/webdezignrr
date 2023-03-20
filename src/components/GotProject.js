import React from 'react';

const GotProject = () => {
  return (
    <div>
      <div className='gotprojectsec font-space '>
        <div className='wrapper'>
          <div className="twocol py-7 md:px-5 bg-[url('/images/gotbg.png')] bg-left bg-no-repeat bg-contain bg-[#F8F8F8] rounded-[40px]  text-center  md:text-left">
            <div className='project1   max-w-[450px] m-auto '>
              <h1 className=' font-bold lg:text-[70px] leading-[95px] text-black '>
                Got a project in Mind?
              </h1>

              <a className='btn min-w-[200px] font-space text-lg mt-6' href='#'>
                Talk to us
              </a>
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
