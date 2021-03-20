import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import styles from '../Column/Column.scss';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.object,
  }

  render() {
    const {cards} = this.props;

    return (
      <div className={styles.component}>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
    );
  }
}

export default SearchResults;