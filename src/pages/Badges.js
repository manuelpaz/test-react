import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Badges.css';
import confLogo from   '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import MiniLoader from '../components/MiniLoader';
import PageError from '../components/PageError';

import api from '../api'

class Badges extends React.Component{     
    state ={
        loading: true,
        error: null,
        data: undefined,       

    };
    componentDidMount(){
        this.fetchData()

        setInterval (this.fetchData, 5000);
    }
    fetchData = async () =>{
        this.setState({loading: true, error: null})

        try{
            const data = await api.badges.list();
            this.setState({loading: false, data: data})
        }catch(error){
            this.setState({loading: false, error: error})
        }
    };
    render(){  
        //if(this.state.loading===true && this.state.data ===undefined)
        if(this.state.loading===true && !this.state.data){
            return <PageLoading />;
        }
        if(this.state.error){
            //return `Error: ${this.state.error.message}`;
            return <PageError error= {this.state.error}  />
        }
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

                            {this.state.loading && <MiniLoader />}                            
                        </div>
                    </div>
                </div>
            </div> 
       );
    }
}

export default Badges;