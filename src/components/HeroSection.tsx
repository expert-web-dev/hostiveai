import React, { useEffect, useState, useCallback } from 'react';
import { Server, Shield, Clock, Database } from 'lucide-react';
import Button from './ui/Button';

const HeroSection: React.FC = () => {
  const [graphData, setGraphData] = useState<number[]>(Array(24).fill(0));
  const [particles, setParticles] = useState<Array<{ x: number; y: number; vx: number; vy: number; size: number }>>([]);

  const initParticles = useCallback(() => {
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    initParticles();
    const updateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let { x, y, vx, vy, size } = particle;
        x += vx;
        y += vy;

        if (x < 0) x = window.innerWidth;
        if (x > window.innerWidth) x = 0;
        if (y < 0) y = window.innerHeight;
        if (y > window.innerHeight) y = 0;

        return { x, y, vx, vy, size };
      }));
    };

    const particleInterval = setInterval(updateParticles, 50);
    return () => clearInterval(particleInterval);
  }, [initParticles]);

  useEffect(() => {
    const updateGraphs = () => {
      setGraphData(prev => 
        prev.map(() => Math.random() * (100 - 30) + 30)
      );
    };

    updateGraphs();
    const interval = setInterval(updateGraphs, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
          {/* Animated particles */}
          <div className="absolute inset-0">
            {particles.map((particle, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/20"
                style={{
                  left: `${particle.x}px`,
                  top: `${particle.y}px`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  transition: 'all 0.05s linear',
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 opacity-30">
            {/* Grid lines */}
            <div className="absolute inset-0 grid grid-cols-6 gap-0">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={`col-${i}`} className="border-r border-white/10" />
              ))}
            </div>
            <div className="absolute inset-0 grid grid-rows-6 gap-0">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={`row-${i}`} className="border-b border-white/10" />
              ))}
            </div>
            
            {/* Animated graphs */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between h-full">
              {graphData.map((height, i) => (
                <div
                  key={i}
                  className="w-full relative"
                  style={{
                    transition: 'all 1s ease-in-out',
                  }}
                >
                  <div
                    className="absolute bottom-0 w-full bg-gradient-to-t from-purple-500/40 to-transparent"
                    style={{
                      height: `${height}%`,
                      transition: 'height 1s ease-in-out',
                    }}
                  >
                    <div 
                      className="absolute bottom-0 w-full bg-purple-400/20"
                      style={{ height: '2px' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Professional Web Hosting Solutions
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto lg:mx-0">
              Fast, secure, and reliable hosting with 24/7 support. Perfect for businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-purple-600 text-white hover:bg-purple-700 px-8"
                onClick={scrollToPlans}
              >
                Start Now
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                View Plans
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/5 rounded-xl blur-xl" />
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <Server className="h-6 w-6 text-purple-300" />
                  <div className="text-xl font-semibold">Live Metrics</div>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Shield className="h-5 w-5 text-green-400" />
                        <div className="font-medium">Network Status</div>
                      </div>
                      <div className="text-sm text-purple-100">
                        Optimal Performance
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="h-5 w-5 text-green-400" />
                        <div className="font-medium">Response Time</div>
                      </div>
                      <div className="text-sm text-purple-100">
                        45ms Average
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Database className="h-5 w-5 text-purple-300" />
                      <div className="font-medium">System Performance</div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>CPU Usage</span>
                          <span>28%</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-green-400 rounded-full transition-all duration-500"
                            style={{ width: '28%' }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Memory</span>
                          <span>42%</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-green-400 rounded-full transition-all duration-500"
                            style={{ width: '42%' }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Network</span>
                          <span>65%</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-green-400 rounded-full transition-all duration-500"
                            style={{ width: '65%' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-purple-100">Uptime Guarantee</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-purple-100">Expert Support</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">Free</div>
            <div className="text-purple-100">Domain Name</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">AI</div>
            <div className="text-purple-100">Powered Security</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;