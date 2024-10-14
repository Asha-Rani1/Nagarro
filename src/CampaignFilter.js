import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CampaignFilter = ({ searchTerm, setSearchTerm, startDate, setStartDate, endDate, setEndDate }) => {
    return (
        <div className='filter-container'>
            <div className='date-range-container'>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Start-Date"
                />
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="End-Date"
                />
            </div>
            <div class="search">
                <input
                    class="searchTerm"
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" class="searchButton">
                    <i class="fas fa-search"></i>
                </button>
            </div>

        </div>
    );
};

export default CampaignFilter;
