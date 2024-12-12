// src/pages/Venues.tsx
import { motion } from 'framer-motion';
import { Calendar, Users, Map, ArrowRight } from 'lucide-react';

const venues = [
  {
    id: 1,
    name: 'Venue Umwezii',
    capacity: '50-300 guests',
    description: 'An elegant space with crystal chandeliers and panoramic views.',
    image: '/v3.jpg',
    features: ['Dance floor', 'Built-in bar', 'Stage area', 'Private terrace'],
  },
  {
    id: 2,
    name: 'Garden Pavilion',
    capacity: '50-200 guests',
    description: 'A stunning outdoor venue surrounded by manicured gardens.',
    image: '/v4.jpg',
    features: ['Outdoor lighting', 'Weather protection', 'Water features', 'Garden access'],
  },
  {
    id: 3,
    name: 'The Intimate Terrace',
    capacity: '20-80 guests',
    description: 'Perfect for intimate ceremonies and cocktail receptions.',
    image: '/v5.jpg',
    features: ['Private bar', 'Lounge area', 'City views', 'Indoor/outdoor flow'],
  },
];

const Venues = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-20 min-h-screen bg-neutral-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Exclusive Venues
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our collection of stunning venues, each offering unique features
            and atmosphere for your perfect event.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${venue.image})` }}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {venue.name}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <Users size={18} className="mr-2" />
                  <span>{venue.capacity}</span>
                </div>
                <p className="text-gray-600 mb-4">{venue.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {venue.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-emerald-700 transition-colors"
                >
                  <span>Book a Tour</span>
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Venues;