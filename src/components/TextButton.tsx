import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type TextButtonProps = ComponentPropsWithoutRef<"button"> & {
  color?: "cyan" | "lime" | "violet" | "red" | "orange";
};

export const TextButton = ({
  className,
  children,
  color,
  ...rest                // ← capture onClick, type, aria‑*, etc.
}: TextButtonProps) => {
  return (
    <button
      {...rest}          // ← forward them to the native element
      className={twMerge(
        "text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-500",
        color === "cyan"   && "text-cyan-500",
        color === "lime"   && "text-lime-500",
        color === "violet" && "text-violet-500",
        color === "red"    && "text-red-500",
        color === "orange" && "text-orange-500",
        className
      )}
    >
      {children}
    </button>
  );
};
