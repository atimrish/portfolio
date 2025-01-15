import {createPortal} from "react-dom";
import styled, {keyframes} from "styled-components";
import {Theme} from "@src/app/providers/themes";
import {useTheme} from "@src/app/providers/ThemeProvider";
import {useEffect, useRef, useState} from "react";

const showAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const RenderTooltip = styled.div<{theme: Theme, $left: number, $top: number}>`
    color: ${(props) => props.theme.color};
    border: 4px solid ${(props) => props.theme.borderColor};
    padding: 12px;
    position: absolute;
    left: ${p => p.$left}px;
    top: ${p => p.$top}px;
    animation: ${showAnimation} 0.3s forwards ease;
    background-color: ${p => p.theme.bgColor};
    text-wrap: nowrap;
`

export type TooltipActiveProps = {
    text: string,
    active: boolean,
    left: number,
    top: number,
}

export const TooltipActive = (p: TooltipActiveProps) => {
    const {theme} = useTheme()
    const [width, setWidth] = useState<number>(0)
    const tooltipRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (tooltipRef.current) {
            const {width} = tooltipRef.current.getBoundingClientRect()
            setWidth(width)
        }
    }, [p.active]);

    return p.active && createPortal(
        <RenderTooltip
            ref={tooltipRef}
            theme={theme}
            $top={p.top}
            $left={p.left - width / 2}
        >{p.text}</RenderTooltip>,
        document.getElementById("tooltip-portal") as HTMLDivElement
    )
}
