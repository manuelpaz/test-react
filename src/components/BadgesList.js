import React from 'react';
import BadgeListItem from '../components/BadgeListItem';
import './styles/BadgesList.css';
class BadgesList extends React.Component {
    render() {
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
