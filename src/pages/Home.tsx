import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Wind, Sun, Trees, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCallback, useRef, useEffect, useState } from 'react';
import AnimatedCounter from '../components/AnimatedCounter';

const Home = () => {
  
   const features = [

    {
      icon: <Wind className="h-8 w-8" />,
      title: 'Renewable Energy',
      description: 'Supporting wind and solar projects that provide clean, sustainable energy.',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: <Trees className="h-8 w-8" />,
      title: 'Forest Conservation',
      description: 'Protecting and restoring forests to preserve biodiversity and capture carbon.',
      image: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
        {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Carbon Offsetting',
      description: 'Comprehensive carbon offset solutions to neutralize your environmental impact.',
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: 'Solar Projects',
      description: 'Large-scale solar installations reducing dependence on fossil fuels.',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

 const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Solutions Inc.',
      text: 'EcoCarbon helped us achieve carbon neutrality with their comprehensive offset programs. Highly recommended!',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Green Manufacturing',
      text: 'Professional service and transparent reporting. They made our sustainability goals achievable.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      name: 'Emma Davis',
      company: 'Sustainable Logistics',
      text: 'Excellent team with deep expertise in environmental sustainability. Great partnership!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      name: 'David Park',
      company: 'Urban Development Co.',
      text: 'Outstanding results and measurable impact. Their expertise transformed our environmental approach.',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'Global Retail Group',
      text: 'Transparent, efficient, and truly committed to making a difference. Best decision we made.',
      image: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    }
  ];

  // Add this function to Home
  const scrollToStats = useCallback(() => {
    const element = document.getElementById('stats');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToFooter = useCallback(() => {
    const element = document.getElementById('footer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Detect mobile screen
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ref for scrollable container
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Building a Sustainable
            <span className="text-green-400 block">Future Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Leading carbon offset solutions through renewable energy, forest conservation, and innovative sustainability projects.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* <Link
              to="/projects"
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link> */}
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-900 transition-all duration-300 transform hover:scale-90"
            >
              Get Started
            </Link>
          </motion.div>

        </div>
        <button
          onClick={scrollToFooter}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-green-300 transition-colors animate-bounce"
        >
          <ArrowDown className="h-8 w-8" />
        </button>
      </section>

       
       {/* Features Section */}
      <section id="stats" className="py-20 bg-white">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive carbon offset solutions tailored to your organization's sustainability goals.
            </p>
          </motion.div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[85vw] snap-center"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[500px] group">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                      className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm w-14 h-14 rounded-xl flex items-center justify-center text-green-600 shadow-lg z-20"
                    >
                      {feature.icon}
                    </motion.div>

                    <div className="absolute inset-x-0 bottom-0 p-6 z-10">
                      <div className="inline-flex items-center gap-2 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full mb-3">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        <span className="font-semibold text-xs">Solution {index + 1}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                        {feature.title}
                      </h3>

                      <p className="text-gray-200 text-sm leading-relaxed mb-4">
                        {feature.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        {[
                          'Verified carbon reduction',
                          'Real-time impact tracking',
                          'Global project network'
                        ].map((benefit, i) => (
                          <div key={benefit} className="flex items-center gap-2">
                            <div className="bg-green-500/80 backdrop-blur-sm rounded-full p-1 flex-shrink-0">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-white text-xs">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 bg-white text-green-700 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-green-50 transition-all duration-300 shadow-lg"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {features.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-gray-300"></div>
              ))}
            </div>
          </div>

          {/* Desktop: Alternating Layout */}
          <div className="hidden md:block space-y-32">
            {features.map((feature, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-16`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/2 group"
                  >
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-[400px] object-cover"
                      />
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                        className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center text-green-600 shadow-lg z-20"
                      >
                        {feature.icon}
                      </motion.div>

                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-full md:w-1/2 space-y-6"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="font-semibold text-sm">Solution {index + 1}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        {feature.title}
                      </h3>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-lg text-gray-600 leading-relaxed"
                    >
                      {feature.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="space-y-3"
                    >
                      {[
                        'Verified carbon reduction',
                        'Real-time impact tracking',
                        'Global project network',
                        'Transparent reporting'
                      ].map((benefit, i) => (
                        <motion.div
                          key={benefit}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.7 + (i * 0.1) }}
                          className="flex items-center gap-3 group/item"
                        >
                          <div className="bg-green-100 rounded-full p-1.5 group-hover/item:bg-green-500 transition-colors duration-300 flex-shrink-0">
                            <svg className="w-4 h-4 text-green-600 group-hover/item:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-base text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">{benefit}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                    >
                      <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group/btn"
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div> <AnimatedCounter /></div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading companies worldwide to achieve their sustainability goals.
            </p>
          </motion.div>
        </div>

        {isMobile ? (
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-8 px-4 snap-x snap-mandatory scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-80 snap-center"
                >
                  <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 shadow-xl border border-green-100 h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                    <div className="flex items-center pt-4 border-t border-green-200">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full mr-4 object-cover ring-2 ring-green-200"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                        <p className="text-green-600 text-sm font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-gray-300"></div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center pt-4 border-t border-green-200">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full mr-4 object-cover ring-2 ring-green-200"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-green-600 text-sm font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </section>




      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies taking action on climate change. Start your carbon offset journey today.
            </p>
            <Link
              to="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Contact />
        </div>
      </section> */}

      {/* Scroll Indicator */}

    </div>
  );
};

export default Home;