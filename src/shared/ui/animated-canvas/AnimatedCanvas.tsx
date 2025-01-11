import {forwardRef} from "react";

type Props = {
    width: number;
    height: number;
}

export const AnimatedCanvas = forwardRef<HTMLCanvasElement, Props>(
    (p, ref) => {
        return (
            <canvas
                ref={ref}
                width={p.width}
                height={p.height}
            />
        )
    }
)
