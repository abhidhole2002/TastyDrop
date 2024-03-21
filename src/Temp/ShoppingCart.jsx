import React, { useState } from 'react';

function ShoppingCart() {
    const [name, setName] = useState({});

    const addCart = (itemId) => {
        if (!name[itemId]) {
            setName((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setName((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <button onClick={() => addCart(1)}>Add Item 1</button>
            <button onClick={() => addCart(2)}>Add Item 2</button>
            <button onClick={() => addCart(3)}>Add Item 3</button>
            <h2>Cart Contents:</h2>
            <ul>
                {Object.keys(name).map((itemId) => (
                    <li key={itemId}>
                        Item {itemId}: {name[itemId]}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingCart;
