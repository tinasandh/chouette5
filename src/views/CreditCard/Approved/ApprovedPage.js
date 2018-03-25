import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'history';
import * as referralActions from '../../../actions/actions';
import ApprovedList from './ApprovedList';

class ApprovedPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        //this.redirectToAddApprovedPage = this.redirectToAddApprovedPage.bind(this);
    }

    redirectToAddApprovedPage() {
        //browserHistory.push('/referral');
    }

    render() {
        console.log('this.props.clients',this.props.clients);
        return (
            <div className="animated fadeIn">
                <h1>Beviljade ärenden</h1>


                <ApprovedList clients={this.props.clients}/>
            </div>
        );
    }
}

ApprovedPage.propTypes = {
    actions: PropTypes.object.isRequired,
    clients: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    console.log('state',state, state.clients);
    return {

        clients: state.clients
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(referralActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApprovedPage);
