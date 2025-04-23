"use client"

import { useEffect, useState } from "react";
import { CutCornerButton } from "../components/CutCornerButton";
import { Hexagon } from "../components/Hexagon";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'About Us',
        href: '/about',
    },
    {
        title: 'Services',
        submenus: [
            { title: 'Software Development', href: '/dev' },
            { title: 'Animations', href: '/video' },
            { title: 'Digital Marketing', href: '/marketing' },
            { title: 'SEO Optimization', href: '/seo' },
            { title: 'Graphic Designs', href: '/design' },
        ],
    },
    {
        title: 'Our Work',
        href: '/work',
    },
    {
        title: 'Pricing',
        href: '/pricing',
    },
    {
        title: 'Testimonials',
        href: '/testimonials',
    },
    {
        title: 'Contact Us',
        href: '/contact',
    },
];

export const HeaderSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    const toggleSubmenu = (menuTitle: string) => {
        setExpandedMenu((prev) => (prev === menuTitle ? null : menuTitle));
    };

    return (
        <>
            <header className="sticky top-0 bg-zinc-900/50 backdrop-blur-lg z-40">
                <div className="container">
                    <div className="flex justify-between items-center h-24">
                        <div className="size-32 py-[56px] ml-4 hover:transition hover:-translate-y-1 hover:duration-500">
                            <a href="/"><img src="/assets/images/logo.png" alt="logo" /></a>
                        </div>

                        <div className="flex gap-4 items-center">

                            {/* The get started button beside menu icon */}
                            <a href="/contact">
                                <CutCornerButton className="hidden md:inline-flex hover:-translate-y-1 hover:transition hover:duration-500">
                                    Get Started
                                </CutCornerButton>
                            </a>

                            {/* The menu icon bars */}
                            <div
                                className="size-10 relative cursor-pointer hover:bg-zinc-800 rounded-full transition-all duration-500"
                                onClick={() => setIsOpen((curr) => !curr)}
                            >
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div
                                        className={twMerge(
                                            "w-5 h-0.5 bg-zinc-300 -translate-y-1 transition-all duration-500",
                                            isOpen && 'translate-y-0 rotate-45'
                                        )}
                                    ></div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div
                                        className={twMerge(
                                            "w-5 h-0.5 bg-zinc-300 translate-y-1 transition-all duration-500",
                                            isOpen && 'translate-y-0 -rotate-45'
                                        )}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed size-full max-h-full top-0 left-0 z-30 bg-zinc-900"
                    >
                        <div className="absolute inset-2 rounded-md bg-zinc-800 mt-24 md:mt-28 z-0">
                            <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
                                <Hexagon size={700} />
                            </div>
                            <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
                                <Hexagon size={1100} reverse />
                            </div>
                            <div className="h-full flex justify-center items-center">
                                <nav className="flex flex-col items-center gap-8 md:gap-12 overflow-y-auto max-h-[calc(100vh-8rem)] p-8 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-500 scrollbar-thumb-rounded-full w-full">
                                    {navLinks.map(({ title, href, submenus }, index) => (
                                        <div key={title} className="text-center">
                                            <div
                                                className="flex items-center justify-center gap-2 cursor-pointer"
                                                onClick={() => toggleSubmenu(title)}
                                            >
                                                <motion.a
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{
                                                        duration: 0.5,
                                                        ease: 'linear',
                                                        delay: 0.25 * index,
                                                    }}
                                                    href={href || '#'}
                                                    className="text-3xl md:text-5xl font-heading font-black text-zinc-500 hover:text-zinc-300 transition duration-300"
                                                >
                                                    {title}
                                                </motion.a>
                                                {submenus && (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className={`w-6 h-6 text-zinc-500 transition-transform duration-300 ${
                                                            expandedMenu === title ? 'rotate-180' : ''
                                                        }`}
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M19 9l-7 7-7-7"
                                                        />
                                                    </svg>
                                                )}
                                            </div>
                                            {submenus && expandedMenu === title && (
                                                <div className="mt-4 flex flex-col gap-2">
                                                    {submenus.map(({ title, href }) => (
                                                        <motion.a
                                                            key={title}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{
                                                                duration: 0.5,
                                                                ease: 'linear',
                                                                delay: 0.25 * index,
                                                            }}
                                                            href={href}
                                                            className="text-xl md:text-2xl font-heading font-extrabold text-zinc-400 hover:text-zinc-200 transition duration-300"
                                                        >
                                                            {title}
                                                        </motion.a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};