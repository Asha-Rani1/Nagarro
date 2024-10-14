import React, { useState } from 'react';
import { initialCampaigns } from './data';
import CampaignFilter from './CampaignFilter';
import CampaignList from './CampaignList';
import './App.css'; // Import CSS

const App = () => {
    const [campaigns, setCampaigns] = useState(initialCampaigns);
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // Expose the global method
    window.AddCampaigns = (newCampaigns) => {
        setCampaigns(prevCampaigns => [
            ...prevCampaigns,
            ...newCampaigns.map((campaign, index) => ({
                ...campaign,
                id: prevCampaigns.length + index + 1, // Ensure unique IDs
            }))
        ]);
    };

    const filteredCampaigns = campaigns.filter(campaign => {
        const campaignStart = new Date(campaign.startDate);
        const campaignEnd = new Date(campaign.endDate);

        const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase());

        const inStartDateRange = startDate ? campaignStart >= startDate : true;
        const inEndDateRange = endDate ? campaignEnd <= endDate : true;

        const validDateRange = !(endDate && endDate < startDate);

        return matchesSearch && inStartDateRange && inEndDateRange && validDateRange;
    });

    return (
        <div className='container'>
            <CampaignFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
            />
            <CampaignList campaigns={filteredCampaigns} />
        </div>
    );
};

export default App;
