"use client"

import { useRef } from "react"
import { Circle } from "../components/Circle"
import { CutCornerButton } from "../components/CutCornerButton"
import { Hexagon } from "../components/Hexagon"
import {motion, useScroll, useTransform} from "framer-motion"

export const CallToAction = () => {

    const sectionRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target:sectionRef,
        offset:['start end','end start'],
    });

    const rotate = useTransform(scrollYProgress, [0,1], [45,-60]);

    return (
        <section className="py-60 overflow-hidden" ref={sectionRef}>
            <div className="container">
                <div className="relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Hexagon className="size-[700px]" size={700} duration={20} />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Hexagon className="size-[1100px]" size={1100} reverse duration={30} />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Circle className="absolute left-0 -top-[400px]" animate>
                            <motion.img src="/assets/images/animation.png" className="size-[140px]" 
                            style={{
                                rotate:rotate
                            }}/>
                        </Circle>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Circle className="absolute -left-[600px] -top-[70px]" animate>
                            <motion.img src="/assets/images/student.png" className="size-[140px]"
                            style={{
                                rotate
                            }} />
                        </Circle>
                    </div>
                    <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">Ready to <span className="block" >get started?</span></h2>
                    <p className="text-xl lg:text-2xl max-w-sm text-zinc-400 text-center mt-8 mx-auto">Upgrade your company to a whole new level, with Evolisyss. </p>
                    <div className="flex justify-center mt-12">
                    <a href="/contact"><CutCornerButton>Contact Us</CutCornerButton></a>
                    </div>
                </div>
            </div>
        </section>
    )
}