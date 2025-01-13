import {MouseEventHandler, useRef} from "react";
import {randomNumber} from "@src/shared/lib/random-number";

export const MouseEffectBlock = () => {
    const [width, height] = [window.innerWidth, window.innerHeight]
    let ctx: CanvasRenderingContext2D | null = null
    let r = 0
    let g =  0
    let b = 0
    const pixelSize = 8

    const mouseMoveHandler: MouseEventHandler = (e) => {
        const draw = () => {
            if (ctx) {
                const timeDraw = performance.now()
                const x = Math.trunc(e.clientX / pixelSize) * pixelSize
                const y = Math.trunc(e.clientY / pixelSize) * pixelSize
                r = randomNumber(0, 255);
                g =  randomNumber(0, 255);
                b = randomNumber(0, 255);
                ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
                ctx.fillRect(x - 16, y - 16, pixelSize, pixelSize);

                const clear = () => {
                    const timeGone = performance.now() - timeDraw
                    if (timeGone >= 200) {
                        return ctx?.clearRect(x - 16, y - 16, pixelSize, pixelSize);
                    }
                    requestAnimationFrame(clear)
                }
                requestAnimationFrame(clear)
            }
        }
        requestAnimationFrame(draw)
    }

    return (
        <canvas
            width={width}
            height={height}
            onMouseMove={mouseMoveHandler}
            ref={(canvas) => {
                ctx = canvas?.getContext("2d") as CanvasRenderingContext2D
            }}
        />
    );
};