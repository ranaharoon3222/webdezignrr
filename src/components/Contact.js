import React from 'react';

const Contact = () => {
  return (
    <div className='contactsec secspacing font-space '>
      <div className='wrapper'>
        <div className='twocol'>
          <div className='contact1'>
            <h1 className='font-bold text-[45px] leading-[60px] text-black'>
              Does your project Demand expert assistance? Lets Talk!
            </h1>
            <div className='conimg max-w-[250px] m-auto mt-9 '>
              <img src='/images/contact1.png' alt='' />
            </div>
            <div className='call gap-1 p-2 max-w-[175px] flex items-center mt-16 bg-black rounded-md'>
              <img className='max-w-[18px]' src='/images/call.png' alt='' />
              <h4 className='text-white'>+1-202-555-0139</h4>
            </div>
            <div className='sms gap-1 p-2 flex max-w-[210px] items-center mt-6 bg-black rounded-md'>
              <img className='max-w-[18px]' src='/images/sms.png' alt='' />
              <h4 className='text-white'>youremail@gmail.com</h4>
            </div>
          </div>
          <div className='contact2'>
            <h1 className=' font-medium text-[25px] text-black '>
              Send A Message
            </h1>
            <div className='contactForm mt-7 '>
              <div className='form2Cols formRow2'>
                <input
                  className='respRow'
                  type='text'
                  placeholder='Your Name'
                />
                <input type='email' placeholder='Email Address' />
              </div>
              <div className='form2Cols'>
                <input
                  className='respRow'
                  type='number'
                  placeholder='Phone Number'
                />
                <input type='text' placeholder='Subject' />
              </div>
              <div className='mt-5'>
                <input
                  type='text'
                  placeholder='Type here'
                  className='w-full input input-bordered'
                />
              </div>
              <textarea
                placeholder='Message'
                name=''
                id=''
                cols={30}
                rows={5}
                defaultValue={''}
              />
              <a href=''>
                <div className='btnbox mt-[15px] sm:mt-8 justify-center flex items-center gap-2 w-[152px] h-[60px] rounded-lg border border-solid border-black '>
                  <div className='plane'>
                    <img src='/images/plane.png' alt='' />
                  </div>
                  <button className=' text-[18px] text-black font-medium '>
                    Send
                  </button>
                </div>
              </a>
            </div>
            {/* Contact Form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
