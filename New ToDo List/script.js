const inputBox = document.querySelector('input');
const text = document.querySelector('.todo-list');

function addTask(){
    if(inputBox.value == ''){
        alert('Please Enter The Task')
    }else{
        const li = document.createElement('li')// Creating li
        li.innerHTML = inputBox.value; // taking the input value to li
        text.appendChild(li);
        const span = document.createElement('span'); // to remove icon
        span.innerHTML = '\u00d7'
        li.appendChild(span);
        saveData();

    }
    inputBox.value = '';
    saveData();
}

text.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
     
 });

function saveData() {
    localStorage.setItem("data", text.innerHTML);
}

function displayData() {
    text.innerHTML = localStorage.getItem("data");
}
displayData();