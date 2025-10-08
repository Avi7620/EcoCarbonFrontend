import { Zap, Shield, Layers, Sparkles } from 'lucide-react';

export default function Wave() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for seamless user experience',
    },
    {
      icon: Shield,
      title: 'Secure by Default',
      description: 'Enterprise-grade security built into every layer',
    },
    {
      icon: Layers,
      title: 'Scalable Architecture',
      description: 'Grows with your needs from startup to enterprise',
    },
    {
      icon: Sparkles,
      title: 'Modern Design',
      description: 'Beautiful interfaces that users love to interact with',
    },
  ];

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 ${
                index % 2 !== 0 ? 'md:scale-x-100 scale-x-[-1]' : ''
              }`}
            >
              <div className={index % 2 !== 0 ? 'md:scale-x-100 scale-x-[-1]' : ''}>
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
