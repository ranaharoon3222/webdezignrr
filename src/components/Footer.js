import React from 'react';

const Footer = () => {
  return (
    <div className='footersec font-space py-[0px] sm:py-[70px] '>
      <div className='wrapper'>
        <div className='footerbox'>
          <div className='footer1'>
            <h1>Logo Design</h1>
            <h2>Logo Design</h2>
            <h2>Business Card</h2>
            <h2>Letter Head</h2>
            <h2>Print Design</h2>
            <h2>Book Design</h2>
          </div>
          <div className='footer1'>
            <h1>Web Design</h1>
            <h2>Website Mockup</h2>
            <h2>Website Design</h2>
            <h2>Responsive Design</h2>
            <h2>Web Development</h2>
            <h2>Adaptive Design</h2>
          </div>
          <div className='footer1'>
            <h1>UI/UX Design</h1>
            <h2>Mobile Apps</h2>
            <h2>Software Designs</h2>
            <h2>UI Wireframe</h2>
            <h2>UI Kit</h2>
            <h2>Design System</h2>
          </div>
          <div className='footer1'>
            <h1>About</h1>
            <h2>About Us</h2>
            <h2>Contact us</h2>
            <h2>Terms &amp; Conditions</h2>
            <h2>Privacy &amp; Policy</h2>
            <h2>Team</h2>
          </div>
          <div className='footer1'>
            <h1>Developer Support</h1>
            <div className='flex items-center gap-2 '>
              <div className='location'>
                <img src='/images/loc.png' alt='' />
              </div>
              <h2>701 Brickell Ave, Miami, FL 333131</h2>
            </div>
            <div className='flex items-center gap-2 '>
              <div className='cal mt-[20px] '>
                <img src='/images/c.png' alt='' />
              </div>
              <div> </div>
              <h2>+1-202-555-0139</h2>
            </div>
            <div className='flex items-center gap-2 '>
              <img className=' max-w-[20px] ' src='/images/s.png' alt='' />
              <h2>info@logocat@gm ail.com support@logocat .com</h2>
            </div>
          </div>
          <div className='footer1'>
            <h1>Follow us</h1>
            <div className='flex items-center gap-1 mt-5 icons '>
              <img className=' max-w-[35px] ' src='/images/f.png' alt='' />
              <img className=' max-w-[35px] ' src='/images/t.png' alt='' />
              <img className=' max-w-[35px] ' src='/images/l.png' alt='' />
              <img className=' max-w-[35px] ' src='/images/i.png' alt='' />
            </div>
            <div className='flogo  mt-5 max-w-[120px] '>
              <img src='/images/flogo.png' alt='' />
            </div>
          </div>
        </div>
        <div className='border mt-7 border-b border-solid border-[#DDDDDD] ' />
        <div className='smallf text-center py-[40px] '>
          <h1 className=' font-normal text-black text-[18px] '>
            © 2023 - Logocat All rights reserved
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
