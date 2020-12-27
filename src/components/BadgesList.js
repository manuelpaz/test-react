import React from 'react';
import BadgeListItem from '../components/BadgeListItem';
import {Link} from 'react-router-dom';
import './styles/BadgesList.css';
class BadgesList extends React.Component {
    render() {
      if(this.props.Listbadges.length === 0){
        return(
          <div>
            <h3>No badges were found</h3>
            <Link className="btn btn-primary" to="/badges/new">
              Create new badge
            </Link>
          </div>
        )
      }
      return (
        <div className="BadgesList">
          <ul className="list-unstyled">
          {this.props.Listbadges.map(badges => {
            return (
              <li key={badges.id}>
                <BadgeListItem badge={badges} />
              </li>
            );
          })}
          </ul>
        </div>
      );
    }
  }
  

export default BadgesList;
