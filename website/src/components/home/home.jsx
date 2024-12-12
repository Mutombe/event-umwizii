// src/pages/Home.tsx
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Users,
  Camera,
  Map,
  Umbrella,
  Calendar,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
    {
      title: "Multiple Venue Options",
      description:
        "Choose from our diverse selection of elegant indoor halls and stunning outdoor spaces to perfectly match your event's vision.",
      icon: Map,
      backgroundImage: "/v1.jpg", // Replace with actual image paths
    },
    {
      title: "Full-Service Planning",
      description:
        "Our experienced event planners will guide you through every detail, from concept to execution, ensuring a seamless experience.",
      icon: Calendar,
      backgroundImage: "/v2.jpg",
    },
    {
      title: "Premium Amenities",
      description:
        "Access state-of-the-art facilities, premium catering services, and sophisticated décor options all in one place.",
      icon: Heart,
      backgroundImage: "/v3.jpg",
    },
    {
      title: "Large Capacity",
      description:
        "Accommodate your guest list with ease in our spacious venues that can host both intimate gatherings and grand celebrations.",
      icon: Users,
      backgroundImage: "/v4.jpg",
    },
    {
      title: "Photo-Perfect Settings",
      description:
        "Create lasting memories with our picture-perfect backgrounds and designated photography spots throughout the venue.",
      icon: Camera,
      backgroundImage: "/v5.jpg",
    },
    {
      title: "All-Weather Solutions",
      description:
        "Rain or shine, we've got you covered with backup plans and climate-controlled spaces for year-round events.",
      icon: Umbrella,
      backgroundImage: "/v3.jpg",
    },
  ];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10" />
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-[url('v2.jpg')] bg-cover bg-center"
          />
        </div>

        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Create Unforgettable Moments at Venue Umwizii
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Your dream wedding venue and event space, where memories are
                crafted with elegance and style.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/venues")}
                className="bg-emerald-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-emerald-700 transition-colors"
              >
                <span>Explore Venues</span>
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Venue Umwizii
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of luxury, convenience, and natural
              beauty for your special day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-gray-50 rounded-xl overflow-hidden group"
              >
                {/* Background Image Layer */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ 
                    backgroundImage: `url('${feature.backgroundImage}')`,
                  }}
                />

                {/* Content Layer */}
                <div className="relative z-10 p-8 bg-white/70 hover:bg-white/80 transition-colors">
                  <feature.icon className="w-12 h-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
