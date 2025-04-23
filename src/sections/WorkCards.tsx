"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { CheckCircle2, Clock } from "lucide-react";

export const WorkCards = () => {
  // add `active` flag: true → currently working, false → past client
  const brandLogos = [
    {
      image: "/assets/images/pill.png",
      alt: "Brand 1",
      color: "fuchsia",
      active: true,
    },
    {
      image: "/assets/images/cube.png",
      alt: "Brand 2",
      color: "cyan",
      active: false,
    },
    {
      image: "/assets/images/cone.png",
      alt: "Brand 3",
      color: "lime",
      active: true,
    },
    {
      image: "/assets/images/cylinder.png",
      alt: "Brand 4",
      color: "violet",
      active: false,
    },
    {
      image: "/assets/images/torus.png",
      alt: "Brand 5",
      color: "red",
      active: true,
    },
  ];

  const [selectedLogoIndex, setSelectedLogoIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const t = setTimeout(() =>
      setSelectedLogoIndex((i) => (i === brandLogos.length - 1 ? 0 : i + 1)),
    2000);
    return () => clearTimeout(t);
  }, [selectedLogoIndex, isHovered]);

  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
          Brands We&apos;ve Worked With
        </h2>

        {/* sliding rail */}
        <div className="mt-36 lg:mt-48 flex">
          <div className="flex flex-none gap-8">
            {brandLogos.map(({ image, alt, color, active }, logoIndex) => (
              <div
                key={alt}
                className="inline-flex transition-all duration-500"
                style={{
                  transform: `translateX(calc((-100% - 2rem) * ${selectedLogoIndex}))`,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* card */}
                <div className="relative z-0 p-8 md:p-10 max-w-96 md:w-80 group flex-none">
                  {/* blurred glow */}
                  <div
                    className={twMerge(
                      "absolute size-16 rounded-xl top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300",
                      color === "cyan" && "bg-cyan-500",
                      color === "lime" && "bg-lime-500",
                      color === "violet" && "bg-violet-500",
                      color === "red" && "bg-red-500",
                      color === "fuchsia" && "bg-fuchsia-500"
                    )}
                  />
                  {/* solid border */}
                  <div
                    className={twMerge(
                      "absolute size-16 rounded-xl top-1.5 right-1.5 -z-10 transition duration-300",
                      color === "cyan" && "bg-cyan-500 group-hover:bg-cyan-300",
                      color === "lime" && "bg-lime-500 group-hover:bg-lime-300",
                      color === "violet" && "bg-violet-500 group-hover:bg-violet-300",
                      color === "red" && "bg-red-500 group-hover:bg-red-300",
                      color === "fuchsia" && "bg-fuchsia-500 group-hover:bg-fuchsia-400"
                    )}
                  />

                  {/* dark body with clipped corner */}
                  <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]" />

                  {/* logo on pedestal */}
                  <div className="flex justify-center -mt-28">
                    <div className="inline-flex relative">
                      <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]" />
                      <img
                        src={image}
                        alt={alt}
                        className="size-40 group-hover:-translate-y-6 transition duration-300"
                      />
                    </div>
                  </div>

                  <h3 className="font-heading font-black text-3xl mt-12 text-center">
                    {alt}
                  </h3>

                  {/* status row */}
                  <div className="flex items-center justify-center gap-2 mt-8">
                    {active ? (
                      <CheckCircle2 className="size-6 text-green-400" />
                    ) : (
                      <Clock className="size-6 text-amber-400" />
                    )}
                    <span className="text-lg text-zinc-300">
                      {active ? "Currently collaborating" : "Past collaboration"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* pagination dots */}
        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {brandLogos.map((_, i) => (
              <div
                key={i}
                className={twMerge(
                  "size-2.5 bg-zinc-500 rounded-full cursor-pointer",
                  i === selectedLogoIndex && "bg-zinc-300"
                )}
                onClick={() => setSelectedLogoIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
