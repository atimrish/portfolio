import {randomNumber} from "@src/shared/lib/random-number";

export const randomRGB = () => {
    const r = randomNumber(0, 255);
    const g = randomNumber(0, 255);
    const b = randomNumber(0, 255);
    return `rgb(${r}, ${g}, ${b})`
}