import { motion } from 'framer-motion';
import { Users, Award, Globe, Heart } from 'lucide-react';

const sliderVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const About = () => {


  const values = [
  {
    title: "Partnership",
    description: "Working closely with clients to develop customized sustainability strategies.",
    detailedDescription: "We don't believe in one-size-fits-all solutions. Every organization has unique challenges and opportunities when it comes to sustainability. Our team works hand-in-hand with your business to understand your specific needs, goals, and constraints. Together, we develop comprehensive strategies that align with your corporate values while delivering measurable environmental impact. From initial consultation to ongoing support, we're committed to being your trusted partner in the journey toward carbon neutrality and beyond.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
  {
    title: "Sustainability",
    description: "Committed to long-term environmental solutions that benefit future generations.",
    detailedDescription: "Our approach goes beyond short-term fixes. We design and implement solutions that create lasting environmental benefits for decades to come. By focusing on renewable energy infrastructure, ecosystem restoration, and sustainable agriculture, we ensure that our projects continue to reduce emissions and protect natural resources long into the future. We believe that true sustainability means creating systems that work in harmony with nature, supporting both ecological health and human prosperity for generations to come.",
    image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },

  {
    title: "Excellence",
    description: "Maintaining the highest standards in carbon offset verification and reporting.",
    detailedDescription: "Quality and integrity are at the heart of everything we do. All our carbon offset projects meet or exceed international standards for verification and certification. We employ advanced monitoring technologies and rigorous auditing processes to ensure every credit represents real, additional, and permanent carbon reduction. Our detailed reporting gives you complete transparency and confidence in your environmental investments. We're committed to maintaining the highest ethical standards in an industry where trust and credibility are paramount.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
    {
    title: "Global Impact",
    description: "Creating positive environmental change across continents through verified projects.",
    detailedDescription: "We operate in over 45 countries, partnering with local communities to implement sustainable solutions that create lasting change. Our projects span renewable energy, reforestation, and conservation initiatives that reduce carbon emissions while improving quality of life. Every project is carefully vetted and monitored to ensure real, measurable impact on both the environment and local communities. Through transparency and rigorous verification processes, we guarantee that your investment creates genuine positive change for our planet.",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  }
];

  const team = [
    {
      name: 'Name',
      position: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: '15+ years in environmental science and sustainable development'
    },
    {
      name: 'Name',
      position: 'CTO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Technology leader specializing in environmental monitoring systems'
    },
    {
      name: 'Name',
      position: 'Head of Projects',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Expert in renewable energy project development and management'
    },
    {
      name: 'Name',
      position: 'Sustainability Director',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Environmental policy specialist with global NGO experience'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            About EcoCarbon
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Pioneering sustainable solutions for a carbon-neutral future through innovation, partnership, and unwavering commitment to environmental stewardship.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2018, EcoCarbon has emerged as a leading force in the fight against climate change. 
                We believe that every organization, regardless of size, can make a meaningful impact on our planet's future.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive approach combines cutting-edge technology, verified carbon offset projects, 
                and transparent reporting to help businesses achieve their sustainability goals while creating 
                lasting positive environmental impact.
              </p>
              <p className="text-lg text-gray-600">
                Through partnerships with local communities and international organizations, we ensure that 
                our projects not only reduce carbon emissions but also contribute to social and economic 
                development in the regions where we operate.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/1108175/pexels-photo-1108175.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Renewable energy project"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </motion.div>

          {/* Mobile: Horizontal Scroll with Text Overlay */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-[85vw] sm:w-[400px]"
                >
                  <div className="relative rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-[400px]">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                      <p className="text-white/90 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: Alternating Layout with Detailed Content */}
          <div className="hidden lg:block space-y-24">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl opacity-25 group-hover:opacity-40 blur transition duration-500"></div>
                    <img
                      src={value.image}
                      alt={value.title}
                      className="relative rounded-xl shadow-2xl w-full h-[450px] object-cover hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1 lg:pr-8' : 'lg:pl-8'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-4xl font-bold text-gray-900 mb-6">{value.title}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      {value.description}
                    </p>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {value.detailedDescription}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate experts dedicated to creating a sustainable future through innovative carbon solutions.
            </p>
          </motion.div>

          {/* Mobile: Horizontal Scroll */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-[280px]"
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 h-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md border-4 border-green-50"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-green-600 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md border-4 border-green-50"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Six years of dedicated service to environmental sustainability and climate action.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">2018</div>
              <p className="text-green-100">Company Founded</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">45+</div>
              <p className="text-green-100">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$50M+</div>
              <p className="text-green-100">Environmental Investment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;