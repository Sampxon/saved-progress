import React, { useState } from 'react';

const BuyerConfirmation = () => {
  const [receivedGoods, setReceivedGoods] = useState(false);

  const handleConfirmation = () => {
    setReceivedGoods(true);
    // Implement the logic for buyer confirmation
  };

  return (
    <div>
      {/* Buyer confirmation content */}
      <h2>Buyer Confirmation</h2>
      <div>
        <p>Received Goods: {receivedGoods ? 'Yes' : 'No'}</p>
        <button onClick={handleConfirmation}>Confirm Goods Received</button>
      </div>
    </div>
  );
};

export default BuyerConfirmation;


//saved progress