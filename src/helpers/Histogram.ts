// Pure function
function increaseOccurenceOf(valueToIncrement: number, step = 1): number {
    return valueToIncrement += step
}

export function getOcurrenceNumber(numberArray: string[]) {
    const ocurrencesNumber = new Map()
    for (const number of numberArray) {
        if (ocurrencesNumber.has(number)) {
            const currentValue: number = ocurrencesNumber.get(number)
            // functional programming concept: Immutability 
            const newValue: number = increaseOccurenceOf(currentValue)
            ocurrencesNumber.set(number, newValue)
        } else {
            ocurrencesNumber.set(number, 1)
        }
    }

    return ocurrencesNumber
}
