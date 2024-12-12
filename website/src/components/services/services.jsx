import { motion } from 'framer-motion';
import {
  Sparkles,
  Camera,
  Music,
  Utensils,
  Flower,
  PartyPopper,
  CheckCircle2,
  Star,
  Wand2,
  Mic,
  CakeSlice,
  PaletteIcon,
  MapPin,
} from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    listIcon: CheckCircle2,
    title: 'Event Planning',
    description: 'Full-service event planning and coordination from start to finish.',
    backgroundImage: '/s1.jpg',
    features: [
      'Personalized consultation',
      'Timeline creation',
      'Vendor coordination',
      'On-site management',
    ],
  },
  {
    icon: Camera,
    listIcon: Star,
    title: 'Photography & Video',
    description: 'Professional photography and videography services.',
    backgroundImage: '/s2.jpg',
    features: [
      'Engagement shoots',
      'Ceremony coverage',
      'Reception documentation',
      'Same-day edits',
    ],
  },
  {
    icon: Music,
    listIcon: Mic,
    title: 'Entertainment',
    description: 'Live music and DJ services for your perfect celebration.',
    backgroundImage: '/s3.jpg',
    features: [
      'Live bands',
      'Professional DJs',
      'Sound equipment',
      'Custom playlists',
    ],
  },
  {
    icon: Utensils,
    listIcon: CakeSlice,
    title: 'Catering',
    description: 'Exquisite dining experiences for your special day.',
    backgroundImage: '/s4c.jpg',
    features: [
      'Custom menus',
      'Wine pairing',
      'Dietary accommodations',
      'Service staff',
    ],
  },
  {
    icon: Flower,
    listIcon: PaletteIcon,
    title: 'Decor & Styling',
    description: 'Beautiful decorations and floral arrangements.',
    backgroundImage: '/s5.jpg',
    features: [
      'Floral design',
      'Theme development',
      'Lighting design',
      'Room styling',
    ],
  },
  {
    icon: PartyPopper,
    listIcon: MapPin,
    title: 'Additional Services',
    description: 'Extra touches to make your event truly special.',
    backgroundImage: '/s6.jpg',
    features: [
      'Valet parking',
      'Security services',
      'Guest accommodation',
      'Transportation',
    ],
  },
];

const Services = () => {
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
            Our Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From planning to execution, we offer comprehensive services to make your
            event extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Background Image Layer */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-30 transition-opacity duration-300"
                style={{ 
                  backgroundImage: `url('${service.backgroundImage}')`,
                }}
              />

              {/* Content Layer */}
              <div className="relative z-10 bg-white/80 hover:bg-white/90 transition-colors p-8">
                <div className="flex items-center mb-6">
                  <service.icon className="w-12 h-12 text-emerald-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li 
                      key={feature} 
                      className="flex items-center text-gray-700 font-medium"
                    >
                      <service.listIcon 
                        className="w-5 h-5 text-emerald-500 mr-3" 
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 w-full bg-emerald-100 text-emerald-700 py-3 rounded-lg hover:bg-emerald-200 transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;