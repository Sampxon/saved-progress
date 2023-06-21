import React, { useState } from 'react';

const SellerDelivery = () => {
  const [waybillProofToggle, setWaybillProofToggle] = useState(false);
  const [videos, setVideos] = useState([]);
  const [invoiceImage, setInvoiceImage] = useState(null);

  const handleToggleProof = (event) => {
    const isChecked = event.target.checked;
    setWaybillProofToggle(isChecked);
  };

  const handleVideoUpload = (event) => {
    const files = event.target.files;
    // Implement the logic to handle video uploads
  };

  const handleInvoiceUpload = (event) => {
    const file = event.target.files[0];
    // Implement the logic to handle invoice image upload
  };

  const handleSellerDelivery = () => {
    // Implement the seller delivery functionality
  };

  return (
    <div>
      {/* Seller delivery content */}
      <h2>Seller Delivery</h2>
      <div>
        <label>
          Seller Waybill Proof:
          <input
            type='checkbox'
            checked={waybillProofToggle}
            onChange={handleToggleProof}
          />
        </label>
      </div>
      {waybillProofToggle && (
        <div>
          <h4>Upload Videos</h4>
          <input type='file' multiple onChange={handleVideoUpload} />
          {/* Display uploaded videos */}
          <h4>Upload Invoice/Receipt Image</h4>
          <input type='file' onChange={handleInvoiceUpload} />
          {/* Display uploaded invoice image */}
        </div>
      )}
      <button onClick={handleSellerDelivery}>Confirm Delivery</button>
    </div>
  );
};

export default SellerDelivery;
