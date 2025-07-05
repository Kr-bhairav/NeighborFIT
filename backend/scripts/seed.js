const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Neighborhood = require('../models/Neighborhood');

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const data = [
  {
    name: "Bangalore",
    description: "The Silicon Valley of India with top tech companies and modern amenities.",
    affordability: 3,
    safety: 4,
    nightlife: 4,
    internet: 5,
    greenery: 4,
    education: 5
  },
  {
    name: "Pune",
    description: "A calm and educated city with great weather and a growing IT sector.",
    affordability: 4,
    safety: 4,
    nightlife: 3,
    internet: 4,
    greenery: 3,
    education: 4
  },
  {
    name: "Hyderabad",
    description: "A rapidly growing metro with excellent infrastructure and food culture.",
    affordability: 4,
    safety: 4,
    nightlife: 3,
    internet: 5,
    greenery: 3,
    education: 4
  },
  {
    name: "Delhi",
    description: "The capital city with rich history, good infrastructure, and career opportunities.",
    affordability: 3,
    safety: 2,
    nightlife: 4,
    internet: 5,
    greenery: 2,
    education: 5
  },
  {
    name: "Mumbai",
    description: "The financial capital with fast-paced life and vibrant culture.",
    affordability: 2,
    safety: 3,
    nightlife: 5,
    internet: 5,
    greenery: 2,
    education: 4
  },
  {
    name: "Chennai",
    description: "Known for its coastal vibe, IT hub, and strong educational base.",
    affordability: 4,
    safety: 4,
    nightlife: 2,
    internet: 4,
    greenery: 3,
    education: 4
  },
  {
    name: "Ahmedabad",
    description: "A business-friendly city with decent quality of life and cultural warmth.",
    affordability: 5,
    safety: 4,
    nightlife: 2,
    internet: 4,
    greenery: 3,
    education: 4
  },
  {
    name: "Jaipur",
    description: "A historic city with growing IT and tourism and peaceful living.",
    affordability: 4,
    safety: 4,
    nightlife: 2,
    internet: 3,
    greenery: 4,
    education: 3
  },
  {
    name: "Kolkata",
    description: "A culturally rich city with a laid-back vibe and good educational institutes.",
    affordability: 4,
    safety: 3,
    nightlife: 3,
    internet: 4,
    greenery: 3,
    education: 5
  },
  {
    name: "Indore",
    description: "Cleanest city in India with strong education, IT presence, and low cost of living.",
    affordability: 5,
    safety: 4,
    nightlife: 2,
    internet: 4,
    greenery: 4,
    education: 4
  },
  {
    name: "Hauz Khas",
    description: "Trendy and upscale, known for cafes, art culture, and buzzing nightlife.",
    affordability: 3.2,
    safety: 4.5,
    nightlife: 4.7,
    internet: 4.8,
    greenery: 3.8,
    education: 4.0
  },
  {
    name: "Dwarka",
    description: "A well-planned residential zone with parks, wide roads, and good schools.",
    affordability: 4.1,
    safety: 4.2,
    nightlife: 2.0,
    internet: 4.0,
    greenery: 4.5,
    education: 4.4
  },
  {
    name: "Karol Bagh",
    description: "A popular market area with heritage charm, decent safety, and moderate facilities.",
    affordability: 3.6,
    safety: 3.2,
    nightlife: 3.9,
    internet: 4.2,
    greenery: 2.8,
    education: 3.5
  },
  {
    name: "Rohini",
    description: "Spacious residential locality with great parks, decent connectivity, and schools.",
    affordability: 4.5,
    safety: 4.1,
    nightlife: 2.4,
    internet: 3.9,
    greenery: 4.3,
    education: 4.2
  },
  {
    name: "Lajpat Nagar",
    description: "A lively shopping destination with moderate housing, good food, and culture.",
    affordability: 3.4,
    safety: 3.8,
    nightlife: 4.2,
    internet: 4.4,
    greenery: 3.2,
    education: 3.8
  }
];


const seed = async () => {
  await Neighborhood.deleteMany();
  await Neighborhood.insertMany(data);
  console.log('Database seeded');
  mongoose.disconnect();
};

seed();
