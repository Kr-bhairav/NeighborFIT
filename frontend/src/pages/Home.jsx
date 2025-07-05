import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import Solutions from "../components/Solutions";
import About from "../pages/About";
import SubmitFeedback from "../components/SubmitFeedback"

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Solutions/>
      <About/>
      <SubmitFeedback/>
      <Footer />
    </div>
  );
};

export default Home;
