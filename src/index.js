//const element = document.createElement('h1');
//element.innerText = 'Hello, Platzi Badges!'; // se da un texto al elemento que se creo

//Donde se quiere poner el elemento en el elemento app de App.js
//const container = document.getElementById('app');

//container.appendChild(element);
 //Se utilizara react para hacer lo mismo que lo anterior

 import React from  'react';
 import ReacDom from 'react-dom';

 const element = <h1>Hello, Platzi Badges from React!</h1>;
 const container = document.getElementById('app');

 //ReacDom.render(__qué__, __dónde__)
ReacDom.render(element, container);
