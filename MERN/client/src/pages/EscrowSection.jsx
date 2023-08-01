/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import ChatRoom from '../components/ChatRoom';
import TransactionDetails from '../components/TransactionDetails';

const EscrowSection = () => {
  const [confirmedByBuyer, setConfirmedByBuyer] = useState(false);
  const [confirmedBySeller, setConfirmedBySeller] = useState(false);

  const handleConfirmation = (user) => {
    if (user === 'buyer') {
      setConfirmedByBuyer(true);
    } else if (user === 'seller') {
      setConfirmedBySeller(true);
    }
  };

  return (
    <div>
      {/* Escrow section content */}
      <ChatRoom />
      <TransactionDetails
        confirmedByBuyer={confirmedByBuyer}
        confirmedBySeller={confirmedBySeller}
        handleConfirmation={handleConfirmation}
      />
    </div>
  );
};

export default EscrowSection;
