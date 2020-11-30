const element = document.createElement('h1');
element.innerText = 'Hello, Platzi Badges!'; // se da un texto al elemento que se creo

//Donde se quiere poner el elemento en el elemento app de App.js
const container = document.getElementById('app');

container.appendChild(element);

