// CampaignList.js
import React, { useContext } from 'react';
import moment from 'moment';
import { CampaignContext } from './CampaignContext';

const CampaignList = () => {
    const { filteredCampaigns, users, isCampaignActive } = useContext(CampaignContext);

    const getUserName = (userId) => {
        const user = users.find((user) => user.id === userId);
        return user ? user.name : 'Unknown User';
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Active</th>
                    <th>Budget</th>
                </tr>
            </thead>
            <tbody>
                {filteredCampaigns.map((campaign) => {
                    const isActive = isCampaignActive(campaign.startDate, campaign.endDate);

                    return (
                        <tr key={campaign.id}>
                            <td>{campaign.name}</td>
                            <td>{getUserName(campaign.userId)}</td>
                            <td>{moment(campaign.startDate).format('YYYY-MM-DD')}</td>
                            <td>{moment(campaign.endDate).format('YYYY-MM-DD')}</td>
                            <td>
                                <span className={`${isActive ? 'activeClass' : 'inactiveClass'}`}></span>
                                {isActive ? "Active" : "Inactive"}
                            </td>
                            <td>${campaign.budget}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default CampaignList;
