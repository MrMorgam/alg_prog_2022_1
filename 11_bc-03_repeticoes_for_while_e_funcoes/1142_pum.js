import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const linesQuantity = Number(input('Quantidade de linhas: '))

    let i = 0
    let num1 = 1
    let num2 = 2
    let num3 = 3
    console.log(`${num1} ${num2} ${num3} PUM`)
    i++

    while (i < linesQuantity) {
        num1 += 4
        num2 += 4
        num3 += 4
        
        console.log(`${num1} ${num2} ${num3} PUM`)

        i++
    }
}

main ()