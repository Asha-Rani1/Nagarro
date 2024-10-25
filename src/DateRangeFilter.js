// DateRangeFilter.js
import React, { useContext } from 'react';
import moment from 'moment';
import { CampaignContext } from './CampaignContext';

const DateRangeFilter = () => {
  const { setDateRange } = useContext(CampaignContext);

  const handleStartDateChange = (e) => {
    const startDate = moment(e.target.value);
    setDateRange((prev) => ({ ...prev, start: startDate }));
  };

  const handleEndDateChange = (e) => {
    const endDate = moment(e.target.value);
    setDateRange((prev) => ({ ...prev, end: endDate }));
  };

  return (
    <div className='date-range-container'>
      <input type="date" onChange={handleStartDateChange}  placeholder="Start-Date" />
      <input type="date" onChange={handleEndDateChange}  placeholder="End-Date" />
    </div>
  );
};

export default DateRangeFilter;
