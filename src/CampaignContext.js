// CampaignContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { initialCampaigns } from './data';

export const CampaignContext = createContext();

export const CampaignProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [users, setUsers] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({ start: null, end: null });

  // Fetch users and campaigns
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    setCampaigns(initialCampaigns);
    setFilteredCampaigns(initialCampaigns);
  }, []);

  const isCampaignActive = (startDate, endDate) => {
    const today = moment();
    console.log( today.isBetween(moment(startDate), moment(endDate), null, '[]'))
    return today.isBetween(moment(startDate), moment(endDate), null, '[]');
  };

  const filterCampaigns = () => {
    let filtered = campaigns.filter(campaign => {
      const matchesName = campaign.name.toLowerCase().includes(searchTerm.toLowerCase());
      const startMatches = dateRange.start ? moment(campaign.startDate).isBetween(dateRange.start, dateRange.end, null, '[]') : true;
      const endMatches = dateRange.end ? moment(campaign.endDate).isBetween(dateRange.start, dateRange.end, null, '[]') : true;
      return matchesName && startMatches && endMatches;
    });
    setFilteredCampaigns(filtered);
  };

  useEffect(() => {
    filterCampaigns();
  }, [searchTerm, dateRange, campaigns]);

  return (
    <CampaignContext.Provider value={{ campaigns, filteredCampaigns, users, setSearchTerm, setDateRange, isCampaignActive }}>
      {children}
    </CampaignContext.Provider>
  );
};
