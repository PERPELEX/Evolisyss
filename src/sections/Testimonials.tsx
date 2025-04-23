import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const testimonials = [
    {
        text: "The User experience is phenomenal, and the support teams always available to help. Highly Recommended!",
        name: "Saad Shoaib",
        title: "Software Developer",
        avatarImage: "/assets/images/saad.jpg",
    },
    {
        text: "Our Sales have skyrocketed through Evolisyss's Marketing strategies, it's truly a game changer for our team.",
        name: "John Doe",
        title: "Marketing Head - BitBridge",
        avatarImage: "/assets/images/avatar-cameron-yang.jpg",
    },
    {
        text: "The SEO optimizations were beyond our expectations, and it helped put our company in everyone's view.",
        name: "Mark Harry",
        title: "CFO - HighBrand",
        avatarImage: "/assets/images/avatar-harry-bender.jpg",
    },
    {
        text: "Evolisyss delivered exceptional results for our branding. Their designs are top-notch!",
        name: "Jane Smith",
        title: "Creative Director",
        avatarImage: "/assets/images/saad.jpg",
    },
    {
        text: "Their development team is highly skilled and delivered our project on time with great quality.",
        name: "Michael Brown",
        title: "CTO - TechWave",
        avatarImage: "/assets/images/avatar-cameron-yang.jpg",
    },
    {
        text: "The marketing strategies provided by Evolisyss have been a game changer for our business growth.",
        name: "Emily Davis",
        title: "CEO - Growthify",
        avatarImage: "/assets/images/avatar-harry-bender.jpg",
    },
];

export const TestimonialsSection = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Duplicate testimonials for seamless looping
        if (sliderRef.current) {
            const slider = sliderRef.current;
            slider.innerHTML += slider.innerHTML;
        }
    }, []);

    return (
        <section className="py-32 bg-zinc-800 overflow-hidden">
            <div className="container">
                <motion.div
                    ref={sliderRef}
                    className="flex gap-8"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px] bg-zinc-900 p-8 rounded-lg"
                        >
                            <p className="font-heading text-2xl lg:text-3xl font-black">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>
                            <cite className="mt-8 block">
                                <div className="flex gap-3 items-center">
                                    <div>
                                        <div
                                            className="size-16 bg-zinc-700 rounded-full bg-cover"
                                            style={{
                                                backgroundImage: `url(${testimonial.avatarImage})`,
                                            }}
                                        ></div>
                                    </div>
                                    <div>
                                        <div className="text-lg not-italic font-black">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-zinc-400 not-italic">
                                            {testimonial.title}
                                        </div>
                                    </div>
                                </div>
                            </cite>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};