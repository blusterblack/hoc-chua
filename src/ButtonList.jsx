import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonList({ itemList, callback }) {
  const buttonList = itemList
    .map(({ name, isActive }) => (
      <Button
        key={name}
        name={name}
        isActive={isActive}
        callback={(name) => { callback(name); }}
      />
    ));
  return (
    <div>{buttonList}</div>
  );
}

ButtonList.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.shape(
    { name: PropTypes.string, isActive: PropTypes.bool },
  )).isRequired,
  callback: PropTypes.func.isRequired,
};

export default ButtonList;
