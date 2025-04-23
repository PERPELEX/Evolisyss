"use client"

import React, { useEffect, useRef } from "react";

export const SparkleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to match the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: Array<{ x: number; y: number; size: number; opacity: number }> = [];
    const numStars = 100;

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1, // Random size between 1 and 3
        opacity: Math.random(),
      });
    }

    const draw = () => {
      if (!ctx) return;

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw each star
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 0, 255, ${star.opacity})`; // Fuchsia color (RGB: 255, 0, 255)
        ctx.fill();

        // Slightly animate the opacity for a twinkling effect
        star.opacity += Math.random() * 0.05 - 0.025;
        if (star.opacity > 1) star.opacity = 1;
        if (star.opacity < 0) star.opacity = 0;
      });

      requestAnimationFrame(draw);
    };

    draw();

    // Resize canvas on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none", // Ensures it doesn't block interactions
      }}
    />
  );
};
