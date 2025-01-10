import {PropsWithChildren, useEffect, useRef, useState} from "react";
import {TooltipActive, TooltipActiveProps} from "@src/shared/ui/tooltip/TooltipActive";

type Props = Pick<TooltipActiveProps, 'text'> & {}

export const Tooltip = (p: PropsWithChildren<Props>) => {
    const [active, setActive] = useState<boolean>(false);
    const [bounds, setBounds] = useState<
        Pick<DOMRect, 'top'| 'left'>
    >({
        top: 0,
        left: 0
    });
    const containerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (containerRef.current && active) {
            const {bottom, left, width} = containerRef.current.getBoundingClientRect()
            setBounds({top: bottom + 20, left: left + width / 2})
        }
    }, [active]);

    return (
        <span
            ref={containerRef}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        >
            {p.children}

            <TooltipActive text={p.text} active={active} left={bounds.left} top={bounds.top} />
        </span>
    )
}
