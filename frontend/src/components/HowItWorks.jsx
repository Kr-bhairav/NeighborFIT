import { ClipboardList, SlidersHorizontal, MapPin } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Step 1: Create Account",
      description: "Start by making your profile so we can personalize suggestions.",
      icon: <ClipboardList size={32} className="text-purple-500" />
    },
    {
      title: "Step 2: Choose Preferences",
      description: "Tell us what's important to you: safety, affordability, more.",
      icon: <SlidersHorizontal size={32} className="text-purple-500" />
    },
    {
      title: "Step 3: Get Neighborhoods",
      description: "We’ll match you with the best-fit areas based on your input.",
      icon: <MapPin size={32} className="text-purple-500" />
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-20" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
