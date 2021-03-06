import prompt from 'prompt-sync'
const input = prompt()

function main() {
    let counter = 0
    const testQtt = Number(input('Digite a quantidade de testes a serem feitos: '))
    let line
    let quantity = 0
    let type
    let frogQtt = 0
    let rabbitQtt = 0
    let mouseQtt = 0

    while (counter < testQtt) {
        line = input('Digite a quantidade e o tipo do teste: ').split(' ')
        quantity = Number(line[0])
        type =  line[1]

        if (is_a_frog(type)) {
            frogQtt += quantity
        } else if (is_rabbit(type)) {
            rabbitQtt += quantity
        } else {
            mouseQtt += quantity
        }
        
        counter++
    }

    const totalQuantity = frogQtt + rabbitQtt + mouseQtt
    const frogPercentage = (frogQtt / totalQuantity) * 100
    const rabbitPercentage = (rabbitQtt / totalQuantity) * 100
    const mousePercentage = (mouseQtt / totalQuantity) * 100

    console.log(`Total: ${totalQuantity} cobaias`)
    console.log(`Total de coelhos: ${rabbitQtt}`)
    console.log(`Total de ratos: ${mouseQtt}`)
    console.log(`Total de sapos: ${frogQtt}`)
    console.log(`Percentual de coelhos: ${rabbitPercentage.toFixed(2)} %`)
    console.log(`Percentual de ratos: ${mousePercentage.toFixed(2)} %`)
    console.log(`Percentual de sapos: ${frogPercentage.toFixed(2)} %`)  
}

function is_a_frog(type) {
    return type === 'S'
}

function is_rabbit(type) {
    return type === 'C'
}

main()