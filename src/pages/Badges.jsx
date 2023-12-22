import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Badges.css';
import confLogo from   '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import api from '../api/api'

const Badges = () => {
    const { isLoading, error, data, isFetching } = useQuery(
      'badges',
      () => api.list(),
      {
        enabled: !isFetching, // Prevent infinite loop during refetch
      }
    );
  
    const refetch = () => {
      queryClient.invalidateQueries('badges');
    };
  
    if (isLoading) return <PageLoading />;
    if (error) return <PageError error={error} />;
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
    };


export default Badges;