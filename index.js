const form = document.querySelector('form');

const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const inputValue = document.getElementById('fruit-to-add');

    //Li-adding
    const newLi = document.createElement('li');
    const newLitext = document.createTextNode(inputValue.value);
 newLi.appendChild(newLitext);
 newLi.className = 'fruit';

//deltetBTN
 const deleteBtn = document.createElement('button');
 const deleteBtnText = document.createTextNode('x');
 deleteBtn.appendChild(deleteBtnText);
 deleteBtn.className = 'delete-btn';
 newLi.appendChild(deleteBtn);




//editBTN

const editBtn = document.createElement('button');
const editBtnText = document.createTextNode('Edit');
 editBtn.appendChild(editBtnText);
 editBtn.className = 'edit-btn';
 newLi.appendChild(editBtn);


//adding li as the last element of unorder list
fruits.appendChild(newLi);


});


fruits.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    };
    
});