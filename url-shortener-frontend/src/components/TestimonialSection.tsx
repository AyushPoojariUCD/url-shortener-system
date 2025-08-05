// components/Testimonials.js
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "This AI Agent completely transformed the way I browse. Super intuitive!",
    name: "John Doe",
    title: "Product Manager at TechCorp",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "Incredible automation. Saved me hours every week.",
    name: "Sarah Lee",
    title: "Founder at StartupX",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "Best tool I've added to my workflow in years!",
    name: "David Kim",
    title: "AI Researcher at OpenAI",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div>
       
    <section className="bg-gray-100 py-40 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">

        <div className="relative">
          {/* Card slider */}
          <div className="flex items-center justify-center transition-transform duration-500 ease-in-out">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-full md:w-2/3 lg:w-1/2 transition-all duration-500 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100 scale-100 my-8"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="bg-[#EE6123]  rounded-2xl shadow-lg p-8 flex flex-col items-center text-center space-y-4">
                  <p className="font-semibold text-lg text-white-700">"{testimonial.quote}"</p>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
                  />
                  <div>
                    <p className="text-sm text-white-900">
                      {testimonial.name}
                    </p>
                    <p className="font-bold text-white-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default TestimonialSection;
