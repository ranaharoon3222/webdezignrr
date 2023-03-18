<template>
  <div>
    <div class="contactsec secspacing font-space ">
      <div class="wrapper">
        <div class="twocol">
          <div class="contact1">
            <h1 class="font-bold text-[45px] leading-[60px] text-black">
              Does your project Demand expert assistance? Lets Talk!
            </h1>
            <div class="conimg max-w-[250px] m-auto mt-9 ">
              <img src="/images/contact1.png" alt="" />
            </div>
            <div
              class="call gap-1 p-2 max-w-[175px] flex items-center mt-16 bg-black rounded-md"
            >
              <img class="max-w-[18px]" src="/images/call.png" alt="" />
              <h4 class="text-white">+1-202-555-0139</h4>
            </div>
            <div
              class="sms gap-1 p-2 flex max-w-[210px] items-center mt-6 bg-black rounded-md"
            >
              <img class="max-w-[18px]" src="/images/sms.png" alt="" />
              <h4 class="text-white">youremail@gmail.com</h4>
            </div>
          </div>
          <div class="contact2">
            <h1 class=" font-medium text-[25px] text-black " >Send A Message</h1>
            <div class="contactForm mt-7 ">
              
              

              <div class="form2Cols formRow2">
                <input class="respRow" type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email Address" />
              </div>
              <div class="form2Cols">
                <input
                  class="respRow"
                  type="number"
                  placeholder="Phone Number"
                />
                <input type="text" placeholder="Subject" />
              </div>

              <div class="input">
                <input type="text" placeholder="what’s Your Budget?" />
              </div>
              <textarea
                placeholder="Message"
                name=""
                id=""
                cols="30"
                rows="5"
              ></textarea>

              <a href=""> 
                <div class="btnbox mt-[15px] sm:mt-8 justify-center flex items-center gap-2 w-[152px] h-[60px] rounded-lg border border-solid border-black "> 
                  <div class="plane">
                    <img src="/images/plane.png" alt="">
                  </div>
                  <button class=" text-[18px] text-black font-medium ">Send</button>
                </div>
              </a>
            </div>

            <!-- Contact Form -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style></style>
