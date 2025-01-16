import {useEffect} from "react";
import {randomNumber} from "@src/shared/lib/random-number";
import {randomRGB} from "@src/widgets/mouse-effect-block/lib/randomRGB";

export const MouseEffectBlock = () => {
    const [width, height] = [window.innerWidth, window.innerHeight]
    let ctx: CanvasRenderingContext2D | null = null
    const pixelSize = 8

    const mouseMoveHandler = (e: MouseEvent) => {
        const draw = () => {
            if (ctx) {
                const timeDraw = performance.now()
                const x = Math.trunc((e.clientX + window.scrollX) / pixelSize) * pixelSize
                const y = Math.trunc((e.clientY + window.scrollY) / pixelSize) * pixelSize
                ctx.fillStyle = randomRGB()
                ctx.fillRect(x, y, pixelSize, pixelSize);

                const clear = () => {
                    const timeGone = performance.now() - timeDraw
                    if (timeGone >= 200) {
                        return ctx?.clearRect(x, y, pixelSize, pixelSize);
                    }
                    requestAnimationFrame(clear)
                }
                requestAnimationFrame(clear)
            }
        }
        requestAnimationFrame(draw)
    }

    const clickHandler = (e: MouseEvent) => {
        const timeDraw = performance.now()
        const x = Math.trunc((e.clientX + window.scrollX) / pixelSize) * pixelSize
        const y = Math.trunc((e.clientY + window.scrollY) / pixelSize) * pixelSize
        const maxSteps = 10
        if (ctx) {
            //пиксель слева
            ctx.fillStyle = randomRGB()
            ctx.fillRect(x, y, pixelSize, pixelSize);
        }

        let steps = 1
        const epicenter = () => {
            if (ctx && steps < maxSteps) {
                //пиксель слева
                ctx.fillStyle = randomRGB()
                ctx.fillRect(x - (pixelSize * steps), y, pixelSize, pixelSize);

                //пиксель справа
                ctx.fillStyle = randomRGB()
                ctx.fillRect(x + (pixelSize * steps), y, pixelSize, pixelSize);

                //пиксель сверху
                ctx.fillStyle = randomRGB()
                ctx.fillRect(x, y + (pixelSize * steps), pixelSize, pixelSize);

                //пиксель снизу
                ctx.fillStyle = randomRGB()
                ctx.fillRect(x, y - (pixelSize * steps), pixelSize, pixelSize);

                const clearEpicenter = (step: number) => () => {
                    const timeGone = performance.now() - timeDraw
                    if (ctx && step < maxSteps) {
                        if (timeGone >= 50 * step) {
                            ctx.clearRect(x - (pixelSize * step), y, pixelSize, pixelSize);
                            ctx.clearRect(x + (pixelSize * step), y, pixelSize, pixelSize);
                            ctx.clearRect(x, y + (pixelSize * step), pixelSize, pixelSize);
                            ctx.clearRect(x, y - (pixelSize * step), pixelSize, pixelSize);
                        } else {
                            requestAnimationFrame(clearEpicenter(step))
                        }
                    }
                }
                requestAnimationFrame(epicenter)
                requestAnimationFrame(clearEpicenter(steps))
                steps++
            }
        }
        requestAnimationFrame(epicenter)
    }

    useEffect(() => {
        document.body.addEventListener('mousemove', mouseMoveHandler)
        document.body.addEventListener('click', clickHandler)
        return () => {
            document.body.removeEventListener('mousemove', mouseMoveHandler)
            document.body.removeEventListener('click', clickHandler)
        }
    }, []);

    return (
        <canvas
            width={width}
            height={height}
            ref={(canvas) => {
                if (canvas) {
                    ctx = canvas.getContext("2d", {willReadFrequently: true}) as CanvasRenderingContext2D
                }
            }}
        />
    );
};