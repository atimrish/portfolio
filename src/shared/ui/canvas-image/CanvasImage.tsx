import {forwardRef, useEffect, useImperativeHandle, useRef} from "react";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
`

const Canvas = styled.canvas`
    position: absolute;
    left: 0;
    top: 0;
`

type Props = {
    width: number;
    height: number;
    imageSource: string
}

export type CanvasImageRef = {
    canvas: HTMLCanvasElement | null,
    bgCanvas: HTMLCanvasElement | null
}

export const CanvasImage = forwardRef<CanvasImageRef, Props>(
    (p, ref) => {
        const canvasRef = useRef<HTMLCanvasElement>(null)
        const bgCanvasRef = useRef<HTMLCanvasElement>(null)

        useImperativeHandle(ref, () => ({
            canvas: canvasRef.current,
            bgCanvas: bgCanvasRef.current
        }))

        useEffect(() => {
            if (bgCanvasRef.current) {
                const bgContext = bgCanvasRef.current.getContext("2d", {
                    willReadFrequently: true
                }) as CanvasRenderingContext2D;
                const image = new Image();
                image.src = p.imageSource
                image.onload = () => bgContext.drawImage(image, 0, 0, p.width, p.height)
            }
        }, []);

        return (
            <Container>
                <Canvas
                    width={p.width}
                    height={p.height}
                    ref={canvasRef}
                />
                <canvas
                    ref={bgCanvasRef}
                    width={p.width}
                    height={p.height}
                />
            </Container>
        )
    }
)
