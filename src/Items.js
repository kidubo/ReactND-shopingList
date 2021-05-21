import React from 'react';
import PropTypes from 'prop-types';

const Item = props => {
  return <li>{props.item}</li>;
};

Item.propTypes = {
  item: PropTypes.string.isRequired,
};

export default Item;