import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Navbar from '../components/Navbar';


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
                        <div className="col-6">
                            <Badge 
                                firstName="Manuel"
                                lastName="Paz"
                                twitter="manuelpazrobles"
                                jobTitle="Alumno Platzi"
                                urlAvatar="https://s.gravatar.com/avatar/49c401b8c20d11caa2246b058cef0467?s=80"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>            
        );       
    }
}

export default BadgeNew;