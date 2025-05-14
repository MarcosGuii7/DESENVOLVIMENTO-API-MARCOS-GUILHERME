let frutas = ["Maça", "Uva", "Laranja"]
console.log(frutas) //Exibe tudo]
console.log(frutas[0]) //Exibe Maçã
console.log(frutas[2]) //Exibe Laranja

frutas.push("Abacate")
console.log(frutas)

//Remove o último item
frutas.pop()
console.log(frutas)

//Tamanho da Array
let numeros = [10, 20, 30, 40]
console.log(numeros.length) //4

//Filtra com base em condição
let nomes = ["Ana", "Beatriz", "João", "Carlos"]
let nomeFiltrado = nomes.filter(nome => nome == "João")
console.log(nomeFiltrado)

let cores = ["Azul", "Vermelho", "Verde"]
cores.forEach(cor => {
    console.log("Cor", cor)
})

//Saída
//Cor: Azul
//Cor: Vermelho
//Cor: Verde