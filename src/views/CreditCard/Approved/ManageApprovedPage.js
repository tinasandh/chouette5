import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as referralActions from '../../../actions/actions';
//import ReferralForm from './ReferralForm';
//import {authorsFormattedForDropdown} from '../../selectors/selectors';
//import toastr from 'toastr';

/*const ManageApprovedPage = ({ match }) => {
    console.log('match.params',match.params)
    return (

        <div>
            User Profile for user: {match.params.id}
        </div>
    )}


export default ManageApprovedPage*/
const Head = ({ ssn, first, last }) => (

    <div>
        <h1>{`${first} ${last} ${ssn}`}</h1>
    </div>
)
//export default Head


class ManageApprovedPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            client: Object.assign({}, this.props.client),
            errors: {}
        };

        //this.redirectToAddReferralPage = this.redirectToAddReferralPage.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.client.id != nextProps.client.id) {
            // Necessary to populate form when existing client is loaded directly.
            this.setState({client: Object.assign({}, nextProps.client)});
        }
    }


    redirectToAddReferralPage() {
        //browserHistory.push('/referral');

    }

    render() {
        console.log('this.state.client',this.state.client, this.state, this.props, this.props.match);
        //
        return (
            <div className="animated fadeIn">
            <Head ssn={this.props.client.ssn} first={this.props.client.firstName} last={this.props.client.surName} />
            </div>

        )
    }
}

ManageApprovedPage.propTypes = {
    actions: PropTypes.object.isRequired,
    client: PropTypes.object.isRequired
};

function getReferralById(clients, id) {
    const client = clients.filter(client => client.applicationId == id);
    if (client) return client[0]; //since filter returns an array, have to grab the first.
    return null;
}


function mapStateToProps(state, ownProps) {
    console.log('state from ManageApprovedP',state, state.clients);


    const clientId = ownProps.match.params.id; // from the path `/referral/:id`

    let client = {applicationId: '', ssn: '', firstName: '', surName: '', productName: ''};

    if (clientId && state.clients.length > 0) {
        client = getReferralById(state.clients, clientId);
    }

    return {
        client: client
    };

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(referralActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageApprovedPage);
