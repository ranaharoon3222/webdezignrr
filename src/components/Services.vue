<template>
  <div>
    <div class="servicessec font-space  py-[10px] sm:py-[80px] ">
      <swiper
        :slidesPerView="5"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <div class="servimg">
            <img src="/images/serv1.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide
          >
          <div class="servimg">
             <img src="/images/serv2.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide
          ><div class="servimg">
             <img src="/images/serv3.png" alt="">
          </div></swiper-slide
        >
        <swiper-slide
          ><div class="servimg">
             <img src="/images/serv4.png" alt="">
          </div></swiper-slide
        >
        <swiper-slide
          ><div class="servimg">
             <img src="/images/serv5.png" alt="">
          </div></swiper-slide
        >
      </swiper>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },

  name: "Services",
};
</script>

<style></style>
