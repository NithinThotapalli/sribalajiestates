import { useEffect, useState } from "react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: 12, label: "Years of\nexperience" },
    { number: 10_000, label: "+ Happy\nCustomers" },
    { number: 40, label: "+ Successful\nProjects Done" },
    { number: 40, label: "+ Locations\n‎ " }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("stats");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const CountUpNumber = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const startCount = 0;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        const currentCount = Math.floor(progress * (end - startCount) + startCount);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }, [ end, duration]);

    return <span>{count}</span>;
  };

  return (
    <section id="stats" className="py-16 md:py-24 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Build a Better Tomorrow
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-6 md:p-8 shadow-card hover:shadow-hover transition-all duration-300">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  <CountUpNumber end={stat.number} />
                </div>
                <div className="text-sm md:text-base font-medium opacity-90 whitespace-pre-line leading-relaxed">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;