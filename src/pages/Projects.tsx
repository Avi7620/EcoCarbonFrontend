import React, { useState } from 'react';
import { MapPin, Calendar, Target, Filter, ChevronRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  location: string;
  type: string;
  impact: string;
  date: string;
  image: string;
  description: string;
  status: 'active' | 'completed' | 'upcoming';
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Amazon Rainforest Conservation',
      location: 'Brazil',
      type: 'Forest Conservation',
      impact: '450,000 tons CO₂/year',
      date: '2023',
      image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg',
      description: 'Protecting 10,000 hectares of pristine Amazon rainforest while supporting indigenous communities.',
      status: 'active'
    },
    {
      id: '2',
      title: 'Wind Power Initiative',
      location: 'Texas, USA',
      type: 'Renewable Energy',
      impact: '350,000 tons CO₂/year',
      date: '2023',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg',
      description: 'Large-scale wind farm generating clean energy for 150,000 homes annually.',
      status: 'active'
    },
    {
      id: '3',
      title: 'Mangrove Restoration',
      location: 'Philippines',
      type: 'Marine Conservation',
      impact: '125,000 tons CO₂/year',
      date: '2024',
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg',
      description: 'Restoring coastal mangrove ecosystems to protect communities and sequester carbon.',
      status: 'upcoming'
    },
    {
      id: '4',
      title: 'Solar Farm Project',
      location: 'Morocco',
      type: 'Renewable Energy',
      impact: '500,000 tons CO₂/year',
      date: '2022',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
      description: 'Massive solar installation providing clean energy across North Africa.',
      status: 'completed'
    },
    {
      id: '5',
      title: 'Reforestation Program',
      location: 'Indonesia',
      type: 'Forest Conservation',
      impact: '200,000 tons CO₂/year',
      date: '2023',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      description: 'Large-scale tree planting initiative restoring degraded forest landscapes.',
      status: 'active'
    },
    {
      id: '6',
      title: 'Methane Capture Facility',
      location: 'Netherlands',
      type: 'Waste Management',
      impact: '180,000 tons CO₂/year',
      date: '2024',
      image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg',
      description: 'Converting agricultural waste methane into clean energy.',
      status: 'upcoming'
    }
  ];

  const filters = ['all', 'Forest Conservation', 'Renewable Energy', 'Marine Conservation', 'Waste Management'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'upcoming': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Impact Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our verified carbon offset projects making a real difference 
            in communities and ecosystems worldwide
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Filter className="h-5 w-5 text-gray-400 self-center mr-2" />
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              {filter === 'all' ? 'All Projects' : filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                  <span className="text-gray-300">•</span>
                  <Calendar className="h-4 w-4" />
                  <span>{project.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-green-600">
                    <Target className="h-4 w-4" />
                    <span className="font-medium text-sm">{project.impact}</span>
                  </div>
                  
                  <button className="flex items-center space-x-1 text-green-600 hover:text-green-700 font-medium group-hover:translate-x-1 transition-transform duration-200">
                    <span className="text-sm">Learn More</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer snap-center flex-shrink-0 w-80"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                    <MapPin className="h-3 w-3" />
                    <span>{project.location}</span>
                    <span className="text-gray-300">•</span>
                    <Calendar className="h-3 w-3" />
                    <span>{project.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-green-600">
                      <Target className="h-3 w-3" />
                      <span className="font-medium text-xs">{project.impact}</span>
                    </div>
                    
                    <button className="flex items-center space-x-1 text-green-600 hover:text-green-700 font-medium group-hover:translate-x-1 transition-transform duration-200">
                      <span className="text-xs">Learn More</span>
                      <ChevronRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-64">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedProject.status)}`}>
                    {selectedProject.status}
                  </span>
                  <span className="text-sm text-gray-500">{selectedProject.type}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {selectedProject.title}
                </h3>
                
                <div className="flex items-center space-x-4 text-gray-600 mb-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4" />
                    <span>{selectedProject.impact}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Want to Support These Projects?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of organizations making a real impact through verified carbon offset projects
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors transform hover:scale-105"
          >
            Start Offsetting Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;