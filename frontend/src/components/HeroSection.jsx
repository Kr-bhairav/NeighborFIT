import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg"; 

const HeroSection = () => {
  return (
    <section className="h-screen pt-28 bg-gradient-to-r from-white via-purple-50 to-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Smarter Living,<br />
            <span className="text-purple-700">Brilliantly Chosen</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Discover your ideal neighborhood based on what really matters to you — safety, affordability, community, and more.
          </p>
          <Link
            to="/get"
            className="inline-block mt-6 bg-purple-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-purple-800 transition"
          >
            Get Started
          </Link>
        </div>
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Hero"
            className="rounded-lg shadow-xl max-h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
