"use client"

import { useState, useRef } from "react";
import { Circle } from "../components/Circle";
import { CutCornerButton } from "../components/CutCornerButton";
import { Hexagon } from "../components/Hexagon";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactModal               from "../components/ConatctModal";


export const HeroSection = () => {

      const [open, setOpen] = useState(false);
      const openModal  = () => setOpen(true);
      const closeModal = () => setOpen(false);

    const studentRef = useRef(null);
    const webRef = useRef(null);
    const dmRef = useRef(null);
    const seoRef = useRef(null);

    const { scrollYProgress: dmScrollYProgress } = useScroll({
        target: dmRef,
        offset: ['start end', 'end start'],
    });

    const { scrollYProgress: seoScrollYProgress } = useScroll({
        target: seoRef,
        offset: ['start end', 'end start'],
    });

    const { scrollYProgress: webScrollYProgress } = useScroll({
        target: webRef,
        offset: ['start end', 'end start'],
    });

    const { scrollYProgress } = useScroll({
        target: studentRef,
        offset: ['start end', 'end start']
    });

    const studentRotate = useTransform(scrollYProgress, [0, 1], [15, -15]);
    const webRotate = useTransform(webScrollYProgress, [0, 1], [100, -30]);
    const dmRotate = useTransform(dmScrollYProgress, [0, 1], [30, -30]);
    const seoRotate = useTransform(seoScrollYProgress, [0, 1], [20, -20]);




    return (
        <>
        <section className="py-24 md:py-52 overflow-x-clip">
            <div className="container">

                <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">Introducing Evolisyss</p>
                <h1 className="font-heading font-black text-5xl md:text-6xl max-w-3xl lg:text-7xl  mx-auto text-center mt-4">The Future of technological solutions!</h1>
                <p className="text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto">Evolisyss is a pioneer in software and digital solutions</p>

                <div className="flex justify-center mt-10">
                <CutCornerButton onClick={openModal}>Get Started</CutCornerButton>
                </div>

                <div className="flex justify-center mt-24">
                    <div className="inline-flex  relative z-0">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Hexagon className="size-[1100px] "  size={1100}/>
                        </div>
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Hexagon className="size-[1850px] " size={1850} reverse duration={20} />
                        </div>

                        <div className="absolute left-1/2 top-1/2 lg:top-52 -translate-x-1/2 -translate-y-1/2">
                            <Circle className="absolute left-[200px] -top-[900px] " animate>
                                <motion.img src="/assets/images/webmain1.png" alt="web maintenance" className="size-[140px] " style={{ rotate: webRotate }} ref={webRef}></motion.img>
                            </Circle>
                        </div>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Circle className="absolute left-[200px] top-[270px] " animate>
                                <motion.img src="/assets/images/seo.png" alt="seo optimization" className="size-[140px]" ref={seoRef} style={{ rotate: seoRotate }} />
                            </Circle>
                        </div>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Circle className="absolute -left-[600px] -top-[80px] " >
                                <motion.img src="/assets/images/dm.png" alt="Digital Marketing" className="size-[140px]" ref={dmRef} style={{ rotate: dmRotate }} />
                            </Circle>
                        </div>
                        <motion.div className="inline-flex" style={{
                            rotate: studentRotate,
                        }} ref={studentRef}>
                            <img src="/assets/images/studentsit.png" alt="" className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]" />
                            <img src="/assets/images/studentsit.png" alt="Developer" className="w-[500px]" />
                        </motion.div>
                    </div>
                </div>

                <div className="flex justify-center flex-col items-center mt-40 md:mt-80 gap-4">
                    <div className="h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex justify-center pt-2 rounded-full">
                        <motion.div 
                        animate={{
                            translateY:12,
                            opacity:0.2,
                        }} 
                        transition={{
                            duration:2,
                            ease:"linear",
                            repeat:Infinity,
                        }}
                        className="h-3 w-1 bg-fuchsia-500 rounded-full"></motion.div>
                    </div>
                    <p className="uppercase text-zinc-500 font-extrabold tracking-wider ">Scroll to learn more</p>
                </div>


            </div>
        </section>
        {/* ───── modal ───── */}
              <ContactModal open={open} onClose={closeModal} />
              </>

    )
}