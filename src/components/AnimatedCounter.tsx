import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Globe, TrendingUp } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  number: number;
  suffix: string;
  label: string;
  color: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, number, suffix, label, color }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setCount(prev => {
          if (prev < number) {
            return prev + Math.ceil(number / 100);
          }
          return number;
        });
      }, 20);

      return () => clearInterval(timer);
    }
  }, [isVisible, number]);

  return (
    <div ref={ref} className="text-center group hover:transform hover:scale-105 transition-all duration-300 flex-shrink-0 w-full md:w-auto">
      <div className={`${color} p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:shadow-lg transition-shadow flex items-center justify-center`}>
        {icon}
      </div>
      <div className="text-4xl font-bold text-gray-800 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

const AnimatedCounter: React.FC = () => {
  const stats = [
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      number: 1200,
      suffix: '+',
      label: 'Global Clients',
      color: 'bg-blue-500'
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      number: 250,
      suffix: '+',
      label: 'Verified Projects',
      color: 'bg-green-500'
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      number: 50,
      suffix: '+',
      label: 'Expert Team',
      color: 'bg-purple-500'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      number: 2500000,
      suffix: '',
      label: 'Tons CO₂ Reduced',
      color: 'bg-emerald-500'
    }
  ];

  return (
    <section id="stats" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Driving measurable change in the fight against climate change through verified carbon solutions
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {stats.map((stat, index) => (
              <div key={index} className="snap-center min-w-[280px]">
                <StatItem {...stat} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedCounter;