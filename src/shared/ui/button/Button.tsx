import {PropsWithChildren, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {AnimatedCanvas} from "@src/shared/ui/animated-canvas";
import {randomNumber} from "@src/shared/lib/random-number";
import {useTheme} from '@src/app/providers/ThemeProvider';
import {Theme} from "@src/app/providers/themes";

const ButtonContainer = styled.button<{ theme: Theme }>`
    border: 4px solid ${p => p.theme.borderColor};
    background-color: ${p => p.theme.bgColor};
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.5);
    }

    @media screen and (min-width: 1024px) {
        border-width: 6px;
    }
`

const ChildrenContainer = styled.div<{ theme: Theme }>`
    padding: 12px 18px;
    font-family: 'PixelifySans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    z-index: 2;
    position: relative;
    filter: invert(1);
    mix-blend-mode: difference;

    @media screen and (min-width: 1024px) {
        font-size: 36px;
        padding: 22px 36px;
    }
`

const AbsoluteBlock = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 0;

    * {
        width: 100%;
        height: 100%;
    }
`

type Props = {}

export const Button = (p: PropsWithChildren<Props>) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [bounds, setBounds] = useState<{
        width: number;
        height: number;
    }>({
        width: 0,
        height: 0,
    })
    const pixelSize = Math.floor(bounds.width / 8)
    const {theme} = useTheme()

    useEffect(() => {
        if (buttonRef.current) {
            const {width, height} = buttonRef.current.getBoundingClientRect()
            setBounds({width, height})
        }
    }, []);

    const onMouseEnterHandler = () => {
        if (canvasRef.current) {
            const context =
                canvasRef.current.getContext("2d") as CanvasRenderingContext2D;

            let [x, y] = [0, 0]
            const animate = () => {
                if (y < bounds.height) {
                    context.fillStyle = `rgb(${randomNumber(150, 255)}, ${randomNumber(150, 255)}, ${randomNumber(150, 255)})`
                    if (x < bounds.width) {
                        context.fillRect(x, y, pixelSize, pixelSize)
                        x += pixelSize
                    } else {
                        x = 0
                        y += pixelSize
                    }
                    requestAnimationFrame(animate)
                }
            }
            requestAnimationFrame(animate)
        }
    }

    const onMouseLeaveHandler = () => {
        if (canvasRef.current) {
            const context =
                canvasRef.current.getContext("2d") as CanvasRenderingContext2D;

            let [x, y] = [bounds.width, bounds.height]
            const animate = () => {
                if (y > -pixelSize) {
                    if (x > -pixelSize) {
                        context.clearRect(x, y, pixelSize, pixelSize)
                        x -= pixelSize
                    } else {
                        x = bounds.width
                        y -= pixelSize
                    }
                }
                requestAnimationFrame(animate)
            }
            requestAnimationFrame(animate)
        }
    }

    return (
        <ButtonContainer
            ref={buttonRef}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
            theme={theme}
        >
            <AbsoluteBlock>
                <AnimatedCanvas
                    width={bounds.width}
                    height={bounds.height}
                    ref={canvasRef}
                />
            </AbsoluteBlock>

            <ChildrenContainer theme={theme}>{p.children}</ChildrenContainer>
        </ButtonContainer>
    );
};