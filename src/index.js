//const element = document.createElement('h1');
//element.innerText = 'Hello, Platzi Badges!'; // se da un texto al elemento que se creo

//Donde se quiere poner el elemento en el elemento app de App.js
//const container = document.getElementById('app');

//container.appendChild(element);
 //Se utilizara react para hacer lo mismo que lo anterior

 import React from  'react';
 import ReacDom from 'react-dom';

 //const jsx = <h1>Hello, Platzi Badges from React!</h1>;
 
 //const element = React.createElement('a', {href: 'https://platzi.com'}, 'Ir a Platzi'); //Alternativa
 //const container = document.getElementById('app');
 const name = 'Manuel-Tony'
/*const element = React.createElement(
  'h1',
  {},
  `Hola soy ${name}`
);*/
const sum = ()=> 3 + 3;
//Se utiliza jsx con función
//const jsx = <h1>Hola soy, {sum()}</h1>;

const jsx = (
  <div>
    <h1>Hola, soy {name}</h1>
    <p>Soy estudiante frontend.</p>
  </div>
);
const container = document.getElementById('app');
 //ReacDom.render(__qué__, __dónde__)
ReacDom.render(jsx, container);
