import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as referralActions from '../../../actions/actions';



//test url: http://localhost:8080/#/creditcard/referral/371
/*const Referral = ({ match }) => {
    console.log('match.params',match.params)
    return (

        <div>
            User Profile for user: {match.params.id}
        </div>
    )}


export default Referral*/
const Head = ({ ssn, first, last }) => (

    <div>
        <h1>{`${first} ${last} ${ssn}`}</h1>
    </div>
)
//export default Head


class Referral extends React.Component {
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

    componentDidMount() {




    }


    redirectToAddReferralPage() {
        //browserHistory.push('/referral');

    }

    render() {
        console.log('this.state.client',this.state.client, this.state, this.props);
        // <Head ssn={this.state.client.ssn} first={this.state.client.firstName} last={this.state.client.surName} />
        //<h1>{this.props.client.firstName} {this.props.client.surName} {this.props.client.ssn}</h1>
        //<p>{this.props.match.params.id}</p>
        const id = this.props.match.params.id || 1;
        this.props.actions.loadFullApplication(id)
        return (
            <div className="animated fadeIn">
                <h1>{this.props.client.firstName} {this.props.client.surName} {this.props.client.ssn}</h1>
            </div>


        )
    }
}

Referral.propTypes = {
    actions: PropTypes.object.isRequired
};

/*function getReferralById(clients, id) {
    const client = clients.filter(client => client.applicationId == id);
    if (client) return client[0]; //since filter returns an array, have to grab the first.

    return null;
}*/

function getReferralById(client, id) {
    //const client = clients.filter(client => client.applicationId == id);
    if (client) return client[0]; //since filter returns an array, have to grab the first.

    return null;
}


function mapStateToProps(state, ownProps) {
    console.log('state from ManageRP',state);




    let clientId = ownProps.match.params.id; // from the path `/referral/:id`


    let client = {applicationId: '', ssn: '', firstName: '', surName: '', productName: ''};

    /*if (clientId && state.clients.length > 0) {
        client = getReferralById(state.clients, clientId);
    }*/
    //client = getReferralById(state.fullApplication, 2);


    return {
        client: state.fullApplication
    };

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(referralActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Referral);
