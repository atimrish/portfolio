import {PropsWithChildren, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {AnimatedCanvas, AnimatedCanvasContext, CanvasConsumer, useCanvasContext} from "@src/shared/ui/animated-canvas";
import {randomNumber} from "@src/shared/lib/random-number";

const ButtonContainer = styled.button`
    border: 4px solid var(--black);
    background-color: var(--white);
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.5);
    }
`

const ChildrenContainer = styled.div`
    padding: 12px 18px;
    font-family: 'PixelifySans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    z-index: 2;
    position: relative;
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
    const [bounds, setBounds] = useState<{
        width: number;
        height: number;
    }>({
        width: 0,
        height: 0,
    })
    const pixelSize = Math.floor(bounds.width / 8)

    useEffect(() => {
        if (buttonRef.current) {
            const {width, height} = buttonRef.current.getBoundingClientRect()
            setBounds({width, height})
        }
    }, []);

    return (
        <AnimatedCanvasContext>
            <CanvasConsumer>
                {
                    (v) => (
                        <ButtonContainer
                            ref={buttonRef}
                            onMouseEnter={() => {
                                if (v.canvas) {
                                    const context =
                                        v.canvas.getContext("2d") as CanvasRenderingContext2D;

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
                            }}
                            onMouseLeave={() => {
                                if (v.canvas) {
                                    const context =
                                        v.canvas.getContext("2d") as CanvasRenderingContext2D;

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
                            }}
                        >
                            <AbsoluteBlock>
                                <AnimatedCanvas width={bounds.width} height={bounds.height}/>
                            </AbsoluteBlock>

                            <ChildrenContainer>
                                {p.children}
                            </ChildrenContainer>
                        </ButtonContainer>
                    )
                }
            </CanvasConsumer>
        </AnimatedCanvasContext>
    );
};