import React from 'react';
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
  const location = useLocation();
  const voterData = location.state?.voterData;

  return (
    <div className="success-page">
      <div className="voter-card">
        <h2>AES VOTER'S CARD</h2>
        <div className="voter-info">
          <div className="photo-placeholder"></div>
          <div className="details">
            <p>Name: {voterData?.fullName}</p>
            <p>Gender: {voterData?.gender}</p>
            <p>DOB: {voterData?.dateOfBirth}</p>
            <p>Occupation: {voterData?.occupation}</p>
            <p>State: {voterData?.state}</p>
            <p>LGA: {voterData?.lga}</p>
            <p>Voter's Number: {voterData?.voterNumber}</p>
          </div>
        </div>
      </div>
      <button className="print-button">Print Card</button>
    </div>
  );
};
