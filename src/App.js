import React from 'react';
import { CampaignProvider } from './CampaignContext';
import CampaignSearchForm from './CampaignSearchForm';
import DateRangeFilter from './DateRangeFilter';
import CampaignList from './CampaignList';
import './App.css';

function App() {
    return (
        <CampaignProvider>
            <div className='container'>
                <div className='filter-container'>
                    <DateRangeFilter />
                    <CampaignSearchForm />
                </div>
                <CampaignList />
            </div>
        </CampaignProvider>
    );
}

export default App;
