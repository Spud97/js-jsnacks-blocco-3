const N = prompt("inserisci un numero");

for (i = 0; i < N; i++) {
  box = [];
  for (j = 0; j < 10; j++) {
    const num = Math.floor(Math.random() * 99) + 1;
    box.push(num);
  }
  console.log(box);
}
