import {useEffect, useRef} from "react";
import styled from "styled-components";
import {useCanvasImage} from "@src/shared/ui/canvas-image/CanvasImageProvider";

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

export const CanvasImage = (p: Props) => {
    const backgroundRef = useRef<HTMLCanvasElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const {setValue} = useCanvasImage()

    useEffect(() => {
        if (canvasRef.current && backgroundRef.current) {

            if (setValue) {
                setValue({
                    canvas: canvasRef.current,
                    backgroundCanvas: backgroundRef.current
                })
            }

            const backgroundContext = backgroundRef.current.getContext("2d") as CanvasRenderingContext2D;
            const image = new Image();
            image.src = p.imageSource
            image.onload = () => backgroundContext.drawImage(image, 0, 0, p.width, p.height)
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
                ref={backgroundRef}
                width={p.width}
                height={p.height}
            />
        </Container>
    );
};
