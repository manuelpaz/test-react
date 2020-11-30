import React from 'react';

import confLogo from '../images/badge-header.svg'
class Badge extends React.Component{
    //Render define el resultado que vamo a ver en pantalla
    render(){
        return <div>
            <div>
                <img src={confLogo} alt="Logo de la conferencia"/>
            </div>
            <div>
                <img src = "https://s.gravatar.com/avatar/49c401b8c20d11caa2246b058cef0467?s=80" alt="Avatar"/>
                <h1>Manuel<br/>Paz</h1>
            </div>
            <div>
                <p>Estudiante Frontend</p>
                <p>@manuelpazrobles</p>
            </div>
            <div>
                #platziconf
            </div>
        </div>;
    }
}

export default Badge;