import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro maior que 1: '))

    const evenIntegers = evenIntegersInRange(1, number)

    console.log(`Números inteiros pares de 1 a ${number}:${evenIntegers}`)
}

function evenIntegersInRange(startNumber, endNumber) {
    let i = startNumber
    let listOfEvenIntegers = ''

    while (i <= endNumber) {
        if (isEven(i)) {
            listOfEvenIntegers += ` ${i}`
        }

        i++
    }

    return listOfEvenIntegers
}

function isEven(number) {
    return (number % 2 === 0)
}

main()