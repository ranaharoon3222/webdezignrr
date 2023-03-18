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
export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <ServiceSlider />
        <Portfolio />
        <CreativeIdea />
        <MobileFirst />
        <Expertise />
        <Team />
        <GotProject />
        <Review />
      </div>
    </>
  );
}
