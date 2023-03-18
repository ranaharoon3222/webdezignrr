import Navbar from '@components/Navbar';
import Banner from '@components/Banner';
import ServiceSlider from '@components/ServicesSlide';
import Portfolio from '@/components/Portfolio';
import CreativeIdea from '@/components/CreativeIdea';
import MobileFirst from '@/components/MobileFirst';
import Expertise from '@/components/Expertise';
import Team from '@/components/Team';
import GotProject from '@/components/GotProject';
import Review from '@/components/Review';
import Contact from '@/components/Contact';
import BannerServices from '@/components/BannerServices';

export default function Home() {
  return (
    <>
      <div>
        <Banner />
        <ServiceSlider />
        <Portfolio />
        <CreativeIdea />
        <MobileFirst />
        <Expertise />
        <Team />
        <GotProject />
        <Review />
        <Contact />
        <BannerServices />
      </div>
    </>
  );
}
