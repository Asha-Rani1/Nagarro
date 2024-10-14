import React from 'react';

const CampaignList = ({ campaigns }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>User</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Status</th>
                    <th>Budget (USD)</th>
                </tr>
            </thead>
            <tbody>
                {campaigns.map((campaign) => {
                    const currentDate = new Date();
                    const isActive = new Date(campaign.startDate) <= currentDate && new Date(campaign.endDate) >= currentDate;
                    const userName = campaign.userId ? `User ${campaign.userId}` : 'Unknown user';

                    return (
                        <tr key={campaign.id}>
                            <td>{campaign.name}</td>
                            <td>{userName}</td>
                            <td>{campaign.startDate}</td>
                            <td>{campaign.endDate}</td>
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


