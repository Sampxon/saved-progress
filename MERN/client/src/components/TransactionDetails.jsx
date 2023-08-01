/* eslint-disable no-unused-vars */

import React from 'react';
import WaybillProofToggle from './WaybillProofToggle';

const TransactionDetails = ({
  confirmedByBuyer,
  confirmedBySeller,
  handleConfirmation,
}) => {
  const handleToggleProof = (event) => {
    const isChecked = event.target.checked;
    // Implement the logic to handle the toggle of the waybill proof
  };

  return (
    <div>
      {/* Transaction details content */}
      <h3>Transaction Details</h3>
      <p>Seller: Sam</p>
      <p>Buyer: Valley</p>
      <p>Total Amount: $100</p>
      {/* Other transaction details */}
      <div>
        <label>
          Seller Waybill Proof:
          <input type='checkbox' onChange={handleToggleProof} />
        </label>
      </div>
      {/* Confirmation buttons */}
      {!confirmedByBuyer && (
        <button onClick={() => handleConfirmation('buyer')}>
          Confirm as Buyer
        </button>
      )}
      {!confirmedBySeller && (
        <button onClick={() => handleConfirmation('seller')}>
          Confirm as Seller
        </button>
      )}
      {/* Additional components */}
      <WaybillProofToggle />
    </div>
  );
};

export default TransactionDetails;
