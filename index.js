const counter = document.querySelector(`.counterr`);

let initilCounter =0;

function increment(){
  initilCounter ++;
  counter.innerHTML = initilCounter;
}

function reset(){
  initilCounter = 0;
  counter.innerHTML = initilCounter;
}