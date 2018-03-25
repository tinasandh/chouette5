import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReferralListRow from './ReferralListRow';
import {Link} from 'react-router';

const ReferralList = ({clients}) => {
    console.log('clients from RefferalList',clients)
    return (
      <table className="table">
        <thead>
        <tr>
          <th>&nbsp;</th>
          <th>ssn</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Product</th>
        </tr>
        </thead>
        <tbody>
        {clients.map(client => <ReferralListRow key={client.applicationId} client={client}/>
        
          
        )}
        </tbody>
      </table>
    );
  };
  
  ReferralList.propTypes = {
    clients: PropTypes.array.isRequired
  };
  
  export default ReferralList;
  
