import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentPropsWithoutRef<'button'>;

export const CutCornerButton = ({
  className,
  children,
  ...rest            // ← collect onClick and all other button props
}: ButtonProps) => (
  <button
    {...rest}        // ← forward them to the native element
    className={twMerge(
      "bg-fuchsia-500/20 px-4 py-2 relative font-extrabold uppercase font-heading text-sm tracking-wide hover:-translate-y-1 hover:transition hover:duration-500",
      className
    )}
  >
    <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500 [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)]"></div>

    <svg
      className="absolute top-0 right-0 text-fuchsia-500"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 1H12.2667L23 11.7333V24"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>

    <span className="leading-6">{children}</span>
  </button>
);
