// CampaignSearchForm.js
import React, { useContext } from 'react';
import { CampaignContext } from './CampaignContext';

const CampaignSearchForm = () => {
  const { setSearchTerm } = useContext(CampaignContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by Campaign Name"
      onChange={handleSearchChange}
    />
  );
};

export default CampaignSearchForm;
