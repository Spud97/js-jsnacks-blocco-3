box = [];
sommaBox = 0;

do {
  let num = prompt("inserisci un numero");
  box.push(num);
  numN = parseInt(num)
  sommaBox += numN;
} while (sommaBox <= 50);

console.log(sommaBox - numN);