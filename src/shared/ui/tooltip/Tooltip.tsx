import {PropsWithChildren, useEffect, useRef, useState} from "react";
import {TooltipActive, TooltipActiveProps} from "@src/shared/ui/tooltip/TooltipActive";

type Props = Pick<TooltipActiveProps, 'text'> & {}

export const Tooltip = (p: PropsWithChildren<Props>) => {
    const [active, setActive] = useState<boolean>(false);
    const [bounds, setBounds] = useState<
        Pick<DOMRect, 'top' | 'left'>
    >({
        top: 0,
        left: 0
    });
    const containerRef = useRef<HTMLSpanElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (tooltipRef.current && containerRef.current && active) {
            const containerBounds = containerRef.current.getBoundingClientRect()
            const tooltipBounds = tooltipRef.current.getBoundingClientRect()
            const containerCenter = containerBounds.left + containerBounds.width / 2

            const top = window.scrollY + containerBounds.bottom + 20
            let left

            if (containerCenter + tooltipBounds.width > window.innerWidth) {
                left = window.innerWidth - tooltipBounds.width - 20
            } else {
                left = containerCenter - tooltipBounds.width / 2
            }

            setBounds({ top, left })
        }
    }, [active]);

    return (
        <span
            ref={containerRef}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        >
            {p.children}
            <TooltipActive
                ref={tooltipRef}
                text={p.text}
                active={active}
                left={bounds.left}
                top={bounds.top}
            />
        </span>
    )
}
