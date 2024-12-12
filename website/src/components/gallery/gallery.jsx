// src/pages/Gallery.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const categories = ['All', 'Weddings', 'Corporate', 'Social Events', 'Celebrations'];

const images = [
  {
    id: 1,
    src: '/wed4.jpg',
    category: 'Weddings',
    title: 'Garden Wedding Reception',
    },
    {
        id: 1,
        src: '/wed3.jpg',
        category: 'Weddings',
        title: 'Garden Wedding Reception',
    },
    {
        id: 1,
        src: '/cele.jpg',
        category: 'Celebrations',
        title: 'Amazing celebration events',
    },
    {
        id: 1,
        src: '/social.jpg',
        category: 'Social Events',
        title: 'Corporate Event',
    },
    {
        id: 1,
        src: '/wed1.jpg',
        category: 'Weddings',
        title: 'Garden Wedding Reception',
      },
  // Add more images here
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = images.filter(
    (image) => selectedCategory === 'All' || image.category === selectedCategory
  );

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
            Event Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Browse through our collection of magical moments and get inspired for
            your special day.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative aspect-[4/3] cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  className="h-full bg-cover bg-center rounded-xl overflow-hidden"
                  style={{ backgroundImage: `url(${image.src})` }}
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-xl font-bold">{image.title}</h3>
                  <p>{image.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;