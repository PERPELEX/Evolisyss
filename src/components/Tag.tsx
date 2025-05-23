import type { ComponentPropsWithoutRef } from "react"
import { twMerge } from "tailwind-merge";

export const Tag =(props: ComponentPropsWithoutRef<'div'> & {color?: string})=>{
    const {children, color} = props;
    return(
        <div className={twMerge("px-3 py-1.5 uppercase font-heading font-extrabold tracking-wider text-xs bg-fuchsia-500/15 text-fuchsia-500 inline-flex rounded-full",color === 'lime' && 'bg-lime-500/15 text-lime-500',color === 'cyan' && 'bg-cyan-500/15 text-cyan-500',color === 'violet' && 'bg-violet-500/15 text-violet-500',color === 'red' && 'bg-red-500/15 text-red-500',color === 'orange' && 'bg-orange-500/15 text-orange-500')}>{children}</div>
    )
}