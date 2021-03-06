import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Referral from "./Referral";

const ReferralListRow = ({client}) => { 
  console.log('client from listrow!!!', client)
  return (
    <tr key={client.applicationId}> 
        <td>&nbsp;</td>
        <td><Link to={'/creditcard/referraldetail/' + client.applicationId}>{client.ssn}</Link></td>
        <td>{client.firstName}</td>
        <td>{client.surName}</td>
        <td>{client.productName}</td>    
        
      </tr> 
    
  );
};

ReferralListRow.propTypes = {
  client: PropTypes.object.isRequired
};

export default ReferralListRow;
