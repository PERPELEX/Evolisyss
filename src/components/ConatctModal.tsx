"use client";

import { CutCornerButton } from "./CutCornerButton";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Close icon
import { useCallback } from "react";

type Props = { open: boolean; onClose(): void };

export default function ContactModal({ open, onClose }: Props) {
  // Prevent scroll‑bleed while the modal is open
  const stopScroll = useCallback((e: React.UIEvent) => e.stopPropagation(), []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.form
            name="contact"
            method="post"
            data-netlify="true"
            className="relative w-[90%] max-w-xl bg-zinc-900 p-10 rounded-2xl text-white flex flex-col gap-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={stopScroll}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10"
            >
              <X size={20} />
            </button>

            <h2 className="font-heading font-black text-3xl text-center">
              Let’s Talk
            </h2>

            {/* Name Field */}
            <label htmlFor="name" className="font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full p-2 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              required
            />

            {/* Email Field */}
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-2 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              required
            />

            {/* Message Field */}
            <label htmlFor="message" className="font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-2 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              required
            ></textarea>

            {/* Submit Button */}
            <CutCornerButton className="mt-4 self-end">
              Send Message
            </CutCornerButton>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}