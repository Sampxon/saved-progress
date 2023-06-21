/* eslint-disable no-unused-vars */

import React from 'react';
import TemporaryBankAccount from '../components/TemporaryBankAccount';

const TransactionAccount = () => {
  const handleFundAccount = () => {
    // Implement the funding of the transaction account functionality
  };

  return (
    <div>
      {/* Transaction account content */}
      <h2>Transaction Account</h2>
      <p>Agreed Amount: $100</p>
      <p>Platform Fee: $3</p>
      <button onClick={handleFundAccount}>Fund Account</button>
      <TemporaryBankAccount />
    </div>
  );
};

export default TransactionAccount;
