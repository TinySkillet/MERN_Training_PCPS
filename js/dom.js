console.log('Hello World'); 
let titleElement = document.getElementById('heading');
console.log(titleElement.textContent);

let paragraph = document.getElementsByClassName('content');
console.log(paragraph[1]);

const listItemElements = document.getElementsByTagName('li');
console.log(listItemElements.length);

titleElement.textContent = 'Hello, OpenAI!';

const paragraphElement = document.querySelectorAll('.content');

for (ele of paragraphElement){
    ele.innerHTML = 'This is a <strong> modified </strong> paragraph';
}
content1 = "Hello GPT!";
console.log(content1);

let inputElement = document.getElementById('myInput');
console.log(inputElement.type);
console.log(inputElement.value);


let element = document.getElementById('myInput');
if (element.hasAttribute){
    console.log('Attribute exists')
}
else {  
    console.log('Attribute doesn not exist')
}

let button = document.getElementById('btn');
button.addEventListener('click', function(){
    inputElement.value = 'Aditya';
})