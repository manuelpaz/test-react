import React from 'react';

class Badge extends React.Component{
    //Render define el resultado que vamo a ver en pantalla
    render(){
        return <div>
            <div>
                <img src="" alt="Logo de la conferencia"/>
            </div>
            <div>
                <img src = "" alt="Avatar"/>
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