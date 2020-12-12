import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Badges.css';
import confLogo from   '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';




class Badges extends React.Component{   

    constructor(props){
        super(props); 
        console.log('1. constructor()');
        this.state = { 
            data:[],
        };
    }

    componentDidMount(){
        console.log('3. componentDidMount()');
        //Se simula una petición asincrona.
        setTimeout(() =>{
            this.setState({
                data:[
                    {
                      id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                      firstName: "Bobby",
                      lastName: "Fischer",
                      email: "bobbyfischer@gmail.com",
                      jobTitle: "World Champion 1972-1975",
                      twitter: "bobby_fischer", 
                      avatarUrl:   require("../images/Bobby-Fischer.jpg").default        
                    },
                    {
                      id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                      firstName: "Raul",
                      lastName: "Capablanca",
                      email: "capa_blanca@hotmail.com",
                      jobTitle: "World champion 1921-1927",
                      twitter: "capablanca",
                      avatarUrl:  require("../images/Raul-Capablanca.jpg").default               
                    },
                    {
                      id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                      firstName: "Garry",
                      lastName: "Kasparov",
                      email: "garry_kasparov@hotmail.com",
                      jobTitle: "World champion 1985-2000",
                      twitter: "kasparov", 
                      avatarUrl:   require("../images/Garry-Kasparov.jpg").default              
                    }
                  ],
            })
        }, 3000)
    }

    //Antes de que se realice una actualización ocurre el siguiente metodo
    //El cual recibe dos argumentos los cuales son los props que se tenian antes
    //y el state que se tenia antes
    componentDidUpdate(prevProps, prevState){
        console.log('5. componentDidUpdate()');
        //Se imprime en consola los props y el state previos.
        console.log({
            prevProps: prevProps, prevState: prevState
        });

        console.log({
            props: this.props, 
            state: this.state,
        })
    }

    //El siguiente metodo sucede antes de que se vaya el componente del DOM
    componentWillUnmount(){
        console.log('6. componentWillUnmount()'); 
    }

    render(){
        console.log('2/4. render()');
       return(
            <div className="Listado">                
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img 
                            src={confLogo} 
                            alt="Conf Logo"
                            className="Badges_conf-logo"
                            />
                        </div>
                    </div>                    
                </div>
                <div className="Badges__container" id="Badges_lista">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                    <div className="Badges__list">
                        <div className="Badges_container">
                            <BadgesList  Listbadges={this.state.data} />                            
                        </div>
                    </div>
                </div>
            </div> 
       );
    }
}

export default Badges;