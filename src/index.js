import React from  'react';
import ReacDom from 'react-dom';

import Badge from  './components/Badge';



const container = document.getElementById('app');
 //ReacDom.render(__qué__, __dónde__)
ReacDom.render(<Badge />, container);
