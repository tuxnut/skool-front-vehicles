import React, { useState } from 'react';
import ShoppingItem from './ShoppingItem';

function ShoppingList() {
    const [shoppingItems, setShoppingItems] = useState(['patates', 'carottes', 'steacks']);
    const [newItem, setNewItem] = useState('');

    function addShoppingItem() {
        setShoppingItems([...shoppingItems, newItem]);
        setNewItem('');
    }

    return (
        <div>
            <input
                type="text"
                placeholder="New shopping item"
                value={newItem}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewItem(event.target.value)}
            />
            <input type="button" onClick={addShoppingItem} value="Add a new shopping item" />
            <ul>
                {shoppingItems.map((itemName: string) => (
                    <ShoppingItem itemName={itemName} />
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;
