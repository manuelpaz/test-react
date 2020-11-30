import React from  'react';
import ReacDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from  './components/Badge';

const container = document.getElementById('app');
 //ReacDom.render(__qué__, __dónde__)
ReacDom.render(
<Badge firstName="Manuel"
 lastName ="Paz" 
 jobTitle="Estudiante machine Learning" 
 twitter="manuelpazrobles"
 urlAvatar = "https://s.gravatar.com/avatar/49c401b8c20d11caa2246b058cef0467?s=80" />,
 container);
