let somma = 0
parseInt(somma)

for (i = 0; i < 5; i++) {
    let num = prompt("inserisci un numero")
    parseInt(num)
    somma += num;
}

console.log(parseInt(somma))