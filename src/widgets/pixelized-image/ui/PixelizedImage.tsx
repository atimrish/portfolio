import {CanvasImage, CanvasImageRef} from "@src/shared/ui/canvas-image";
import styled from "styled-components";
import {useTheme} from "@src/app/providers/ThemeProvider";
import {randomNumber} from "@src/shared/lib/random-number";
import {closeColor} from "@src/shared/lib/close-color";
import {useRef} from "react";

const Container = styled.div`
    width: 128px;
    height: 128px;
    position: relative;
    display: grid;
    place-items: center;

    transition: all 0.3s ease-in;
    filter: grayscale(1);

    &:hover {
        filter: grayscale(0);
        transform: scale(1.15);
    }
`

const Background = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.1;
`

type Props = {
    imageSource: string,
    deviation: number,
};

export const PixelizedImage = (p: Props) => {
    const {theme} = useTheme();
    let isHover = false
    const delimiter = 16
    const width = 72
    const pixelSize = width / delimiter
    const ref = useRef<CanvasImageRef>(null)

    const mouseEnterHandler = () => {
        isHover = true
        if (ref.current && ref.current.canvas && ref.current.bgCanvas) {
            const context = ref.current.canvas.getContext("2d", {
                willReadFrequently: true
            }) as CanvasRenderingContext2D;

            const bgContext = ref.current.bgCanvas.getContext("2d", {
                willReadFrequently: true
            }) as CanvasRenderingContext2D;

            const animate = () => {
                const [x, y] = [randomNumber(0, delimiter) * pixelSize, randomNumber(0, delimiter) * pixelSize];
                const {data} = bgContext.getImageData(x, y, 1, 1)
                if (data[3] !== 0) {
                    context.fillStyle = `rgb(${closeColor(data[0], p.deviation)}, ${closeColor(data[1], p.deviation)}, ${closeColor(data[2], p.deviation)})`
                    context.fillRect(x, y, pixelSize, pixelSize)
                }
                if (isHover) {
                    requestAnimationFrame(animate)
                }
            }
            requestAnimationFrame(animate)
        }
    }

    const mouseLeaveHandler = () => {
        isHover = false
        if (ref.current && ref.current.canvas) {
            const context = ref.current.canvas.getContext("2d", {
                willReadFrequently: true
            }) as CanvasRenderingContext2D;

            let [x, y] = [0, 0]
            const animate = () => {
                if (x < width) {
                    context.clearRect(x, y, pixelSize, pixelSize)
                    x += pixelSize
                    requestAnimationFrame(animate)
                } else if (y < width) {
                    y += pixelSize
                    x = 0
                    requestAnimationFrame(animate)
                }
            }
            requestAnimationFrame(animate)
        }
    }

    return (

        <Container
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <Background src={theme.imageCover}/>
            <CanvasImage
                ref={ref}
                width={width}
                height={width}
                imageSource={p.imageSource}
            />
        </Container>

    );
};