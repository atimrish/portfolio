import {randomNumber} from "@src/shared/lib/random-number";

/**
 * Позволяет получить случайное число от 0 до 255,
 * которое находится в промежутке слева и справа 'value' на значение 'deviation'
 * @param value
 * @param deviation
 */
export const closeColor = (value: number, deviation: number) => {
    const min = Math.max(0, value - deviation)
    const max = Math.min(255, value + deviation)
    return randomNumber(min, max)
}