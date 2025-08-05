import Navbar from '../components/Navbar';
import ShortenUrl from '../components/ShortenUrl'
import ConnectionsPlatform from '../components/ConnectionsPlatform'
import Footer from '../components/Footer';
import StatsSection from '../components/StatsSection';
import TestimonialSection from '../components/TestimonialSection';
import RedirectUrl from '../components/RedirectUrl';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <ShortenUrl/>
      <ConnectionsPlatform />
      <RedirectUrl/>
      <StatsSection/>
      <TestimonialSection/>
      <Footer/>
    </>
  );
};

export default LandingPage;
