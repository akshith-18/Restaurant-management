import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Waiter() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Use Docker internal network URL instead of localhost
    axios.get('http://backend:5000/api/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Waiter Interface</h1>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>{order.items.join(', ')}</li>
        ))}
      </ul>
    </div>
  );
}

export default Waiter;
