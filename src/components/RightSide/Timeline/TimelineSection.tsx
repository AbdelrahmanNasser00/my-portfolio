import { CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import timeline from "./Timeline";

export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".timeline-event");
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - window.innerHeight / 2);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen py-16" id="timeline">
      <h2 className="text-xl lg:hidden uppercase font-bold mb-4 text-custom-red">
        Timeline
      </h2>
      <div className="container ">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[28px] top-0 bottom-0 w-[2px] bg-pink-500/20" />

          {/* Events */}
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div
                key={index}
                className={`timeline-event relative pl-16 transition-opacity duration-300 ${
                  activeIndex === index ? "opacity-100" : "opacity-50"
                }`}>
                {/* Timeline dot */}
                <div
                  className={`absolute left-[22px] top-[28px] w-[14px] h-[14px] rounded-full border-[3px] transition-all duration-300 ${
                    activeIndex === index
                      ? "border-pink-500 bg-pink-500"
                      : "border-pink-500/50 bg-[#1a1b1e]"
                  }`}
                />

                {/* Card */}
                <div
                  className={`rounded-lg border transition-all duration-300 bg-[#25262b] p-6 ${
                    activeIndex === index
                      ? "border-pink-500/50 shadow-lg shadow-pink-500/10"
                      : "border-gray-800"
                  }`}>
                  <h3 className="text-xl font-semibold mb-2 text-pink-400">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-400 mb-4 text-sm">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
