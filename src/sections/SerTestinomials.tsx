import React from "react";

interface Testimonial {
  name: string;
  feedback: string;
  company: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-20 bg-zinc-800 text-white">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
          What Our Clients Say
        </h2>
        <div className="mt-12 space-y-8">
          {testimonials.map(({ name, feedback, company }, index) => (
            <div
              key={index}
              className="bg-zinc-700 p-6 rounded-lg shadow-lg"
            >
              <p className="text-lg lg:text-xl text-zinc-400">"{feedback}"</p>
              <p className="mt-4 font-bold text-lg">{name}</p>
              <p className="text-zinc-500">{company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};