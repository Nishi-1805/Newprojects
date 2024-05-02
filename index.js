let mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'center';

const fruits= document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const basketHeading = document.querySelector('h2');
basketHeading.style.marginLeft = '30px';
basketHeading.style.color = 'brown'

const fruitItems = document.querySelectorAll('.fruit');
for(let i=0; i<fruitItems.length; i++){
  fruitItems[i].style.backgroundColor = 'white';
 fruitItems[i].style.padding = '10px';
 fruitItems[i].style.margin = '10px';
 fruitItems[i].style.borderRadius = '5px';
}
const OddfruitItems = document.querySelectorAll('.fruit:nth-child(odd)');
for(let i=0; i<OddfruitItems.length; i++){
  OddfruitItems[i].style.backgroundColor = 'lightgray';
}
const EvenfruitItems = document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0; i<OddfruitItems.length; i++){
  EvenfruitItems[i].style.backgroundColor = 'brown';
  EvenfruitItems[i].style.color = 'white';
}

// Write answer to the questions asked below: