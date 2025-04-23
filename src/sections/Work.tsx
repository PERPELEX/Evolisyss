"use client";

import { Card } from "../components/Card";
import { Tag } from "../components/Tag";
import { CutCornerButton } from "../components/CutCornerButton";
import { twMerge } from "tailwind-merge";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  color: string; // Allow generic string
  images: string[];
  link: string;
}

export const PortfolioShowcase = (props: { portfolioItems: PortfolioItem[] }) => {
  const { portfolioItems } = props;

  const targetRef = useRef(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number[]>(() =>
    Array(portfolioItems.length).fill(0)
  );

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start center"],
  });

  const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndexes) =>
        prevIndexes.map((currentIndex, cardIndex) => {
          const totalImages = portfolioItems[cardIndex]?.images.length || 1;
          return (currentIndex + 1) % totalImages;
        })
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [portfolioItems]);

  const isValidColor = (color: string): color is "cyan" | "lime" | "violet" | "red" | "orange" | "fuchsia" => {
    return ["cyan", "lime", "violet", "red", "orange", "fuchsia"].includes(color);
  };

  return (
    <section className="py-36">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Showcase of Our Work
          </h2>
          <p className="text-xl lg:text-2xl text-center text-zinc-400 mt-8">
            Discover our diverse portfolio of cutting-edge projects and innovative solutions.
          </p>
        </div>

        <motion.div
          className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8"
          ref={targetRef}
          style={{
            marginTop,
          }}
        >
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {portfolioItems.map(({ title, category, description, color, images, link }, index) => (
              <Card
                key={index}
                buttonText="View Project"
                color={isValidColor(color) ? color : "cyan"} // Validate or fallback to "cyan"
                link={link}
                className={twMerge((index === 1 || index === 3) && "md:hidden")}
              >
                <div className="relative w-full h-56 rounded-lg overflow-hidden hover:-translate-y-2 hover:duration-500 hover:transition">
                  {/* Image Slider */}
                  {images.map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={image}
                      alt={`Portfolio ${index} - Image ${imageIndex}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        imageIndex === activeImageIndex[index]
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
                <Tag color={isValidColor(color) ? color : "cyan"}>{category}</Tag> {/* Validate or fallback */}
                <h3 className="font-heading font-black text-3xl mt-3">{title}</h3>
                <p className="text-lg text-zinc-400 mt-6">{description}</p>
              </Card>
            ))}
          </div>

          {/* Right Column */}
          <div className="hidden md:flex flex-col gap-8 mt-16">
            {portfolioItems.map(({ title, category, description, color, images, link }, index) => (
              <Card
                key={index}
                buttonText="View Project"
                color={isValidColor(color) ? color : "cyan"} // Validate or fallback to "cyan"
                link={link}
                className={twMerge((index === 0 || index === 2) && "md:hidden")}
              >
                <div className="relative w-full h-56 rounded-lg overflow-hidden hover:-translate-y-2 hover:duration-500 hover:transition">
                  {/* Image Slider */}
                  {images.map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={image}
                      alt={`Portfolio ${index} - Image ${imageIndex}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
                        imageIndex === activeImageIndex[index]
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-90"
                      }`}
                    />
                  ))}
                </div>
                <Tag color={isValidColor(color) ? color : "cyan"}>{category}</Tag> {/* Validate or fallback */}
                <h3 className="font-heading font-black text-3xl mt-3">{title}</h3>
                <p className="text-lg text-zinc-400 mt-6">{description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center mt-48 md:mt-32">
          <a href="/contact"> <CutCornerButton>Get Your Solution!</CutCornerButton></a>
        </div>
      </div>
    </section>
  );
};