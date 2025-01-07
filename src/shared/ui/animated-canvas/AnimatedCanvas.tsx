import {useEffect, useRef} from "react";
import {randomNumber} from "@src/shared/lib/random-number";
import {useCanvasContext} from "@src/shared/ui/animated-canvas/AnimatedCanvasContext";

type Props = {
    width: number;
    height: number;
}

export const AnimatedCanvas = (p: Props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const {setCanvas} = useCanvasContext()

    useEffect(() => {
        if (setCanvas && canvasRef.current) {
            setCanvas(canvasRef.current)
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={p.width}
            height={p.height}
        >

        </canvas>
    )
}
