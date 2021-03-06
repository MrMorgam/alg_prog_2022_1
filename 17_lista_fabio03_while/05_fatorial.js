import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número: '))

    const factorial = calcFactorial(number)

    console.log(`${number}! = ${factorial}`)
}

function calcFactorial(number) {
    if (number === 0) {
        return 1
    } else {
        let factorial = number
        number--

        while (number >= 1){
            factorial = factorial * number
            number--
        }

        return factorial
    }
    
}

main()