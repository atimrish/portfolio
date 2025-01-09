import {ConsumerProps, createContext, PropsWithChildren, ReactNode, useContext, useState} from "react";

interface ICanvasImageContext {
    canvas: HTMLCanvasElement;
    backgroundCanvas: HTMLCanvasElement;
    image: string;
}

type State = {
    value: Partial<ICanvasImageContext>;
    setValue?: (value: Partial<ICanvasImageContext>) => void;
}

type CanvasImageConsumerFunction = ConsumerProps<State>

const CanvasImageContext = createContext<State>({
    value: {},
    setValue: (value: Partial<ICanvasImageContext>) => {}
})

export const useCanvasImage = () => useContext(CanvasImageContext)

export const CanvasImageConsumer = (p: CanvasImageConsumerFunction) => {
    return (
        <CanvasImageContext.Consumer>
            {p.children}
        </CanvasImageContext.Consumer>
    )
}

export const CanvasImageProvider = (p: PropsWithChildren) => {
    const [value, setValue] = useState<Partial<ICanvasImageContext>>({})

    return (
        <CanvasImageContext.Provider value={{value, setValue}}>
            {p.children}
        </CanvasImageContext.Provider>
    );
};
