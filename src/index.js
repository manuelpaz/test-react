import React from  'react';
import ReacDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import BadgeNew from './pages/BadgeNew';

const container = document.getElementById('app');
 //ReacDom.render(__qué__, __dónde__)
ReacDom.render(<BadgeNew />,container);
