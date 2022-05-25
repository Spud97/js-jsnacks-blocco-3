box = [];
sommaBox = 0;

do {
  let num = prompt("inserisci un numero");
  box.push(parseInt(num));
  sommaBox += box[num]
} while (sommaBox <= 50);

console.log(sommaBox);