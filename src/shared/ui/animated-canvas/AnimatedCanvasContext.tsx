import {createContext, PropsWithChildren, ReactNode, useContext, useState} from "react";

export interface ICanvasContext {
    canvas: HTMLCanvasElement;
    setCanvas: (canvas: HTMLCanvasElement) => void;
}

const CanvasContext = createContext<Partial<ICanvasContext>>({});

export const useCanvasContext = () => useContext(CanvasContext)

export const CanvasConsumer = (p: {children: (value: Partial<ICanvasContext>) => ReactNode}) => {
    return (
        <CanvasContext.Consumer>
            {p.children}
        </CanvasContext.Consumer>
    )
}

export const AnimatedCanvasContext = (p: PropsWithChildren) => {
    const [canvas, setCanvas] =
        useState<HTMLCanvasElement | undefined>();

    return (
        <CanvasContext.Provider value={{canvas, setCanvas}}>
            {p.children}
        </CanvasContext.Provider>
    )
}
