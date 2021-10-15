import React from 'react';

function ShoppingItem(props: { itemName: string }) {
  return <li>{props.itemName}</li>;
}

export default ShoppingItem;
