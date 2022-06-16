export function getOcurrenceNumber(numberArray: string[]) {
    const ocurrencesNumber = new Map()
    for (const number of numberArray) {
        if (ocurrencesNumber.has(number)) {
            let currentValue: number = ocurrencesNumber.get(number)
            const newValue: number = currentValue += 1
            ocurrencesNumber.set(number, newValue)
        } else {
            ocurrencesNumber.set(number, 1)
        }
    }

    return ocurrencesNumber
}
