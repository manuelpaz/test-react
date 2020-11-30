import React from 'react';

import "./styles/Badge.css";
import confLogo from '../images/badge-header.svg';
class Badge extends React.Component{
    //Render define el resultado que vamo a ver en pantalla
    render(){
        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia"/>
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src = "https://s.gravatar.com/avatar/49c401b8c20d11caa2246b058cef0467?s=80" alt="Avatar"/>
                <h1>Manuel<br/>Paz</h1>
            </div>
            <div className="Badge__section-info">
                <h3>Estudiante Frontend</h3>
                <div>@manuelpazrobles</div>
            </div>
            <div className="Badge__footer">
                #platziconf
            </div>
        </div>;
    }
}
export default Badge;