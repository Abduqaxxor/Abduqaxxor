let calculator=localStorage.getItem('calculator') || '';

displaycalculation();

function updatecalculation(numbers){
  calculator+=numbers
  displaycalculation();
  localStorage.setItem('calculator',calculator);
}

function displaycalculation(){
  document.querySelector('.please').innerHTML=calculator
}
