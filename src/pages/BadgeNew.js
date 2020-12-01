import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName="Manuel"
                                lastName="Paz"
                                twitter="manuelpazrobles"
                                jobTitle="Alumno Platzi"
                                urlAvatar="https://s.gravatar.com/avatar/49c401b8c20d11caa2246b058cef0467?s=80"
                            />
                        </div>
                    </div>
                </div>
            </div>            
        );       
    }
}

export default BadgeNew;