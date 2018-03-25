import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ApprovedListRow from './ApprovedListRow';
import {Link} from 'react-router';

const ApprovedList = ({clients}) => {
    console.log('clients from RefferalList',clients)
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Personnummer</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Product</th>
            </tr>
            </thead>
            <tbody>
            {clients.map(client => <ApprovedListRow key={client.applicationId} client={client}/>


            )}
            </tbody>
        </table>
    );
};

ApprovedList.propTypes = {
    clients: PropTypes.array.isRequired
};

export default ApprovedList;
  
