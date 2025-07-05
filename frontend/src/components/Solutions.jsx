import {
  ShieldCheck,
  DollarSign,
  Wifi,
  Beer,
  TreePalm,
  GraduationCap
} from "lucide-react";

const features = [
  {
    title: "Safety",
    icon: <ShieldCheck size={32} className="text-purple-600" />,
    description: "Evaluate low-crime, secure neighborhoods."
  },
  {
    title: "Affordability",
    icon: <DollarSign size={32} className="text-purple-600" />,
    description: "Get matched with areas that fit your budget."
  },
  {
    title: "Internet Access",
    icon: <Wifi size={32} className="text-purple-600" />,
    description: "Explore areas with reliable connectivity."
  },
  {
    title: "Nightlife",
    icon: <Beer size={32} className="text-purple-600" />,
    description: "For those who enjoy vibrant evenings."
  },
  {
    title: "Parks & Outdoors",
    icon: <TreePalm size={32} className="text-purple-600" />,
    description: "Find green and walkable communities."
  },
  {
    title: "School Quality",
    icon: <GraduationCap size={32} className="text-purple-600" />,
    description: "Live near top-rated educational institutions."
  }
];

const Solutions = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Solutions We Provide
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-6 text-left shadow hover:shadow-md transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
