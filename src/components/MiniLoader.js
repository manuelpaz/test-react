import React from 'react';
import './styles/miniLoader.css'

class MiniLoader extends React.Component{
    render(){
        return(
            <div className="loader-wrap">
                <div className="miniLoader-container">
                    <div className="miniLoader"></div>
                    <div className="miniLoader2"></div>                                    
                </div> 
                <p>Loading....</p>                                
            </div>               
        );
    }
}

export default MiniLoader;