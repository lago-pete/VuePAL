const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');


function addGoal(){
    const enteredValue = inputEl.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = enteredValue;
    listEl.appendChild(listItemEl);
    inputEl.value ='';
}


buttonEl.addEventListener('click',addGoal)


{/* <script src="https://unpkg.com/vue@3.4.9/dist/vue.global.js"></script>  */}