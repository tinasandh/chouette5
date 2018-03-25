import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import Referral from '../../views/CreditCard/Referral/Referral';
import ReferralPage from '../../views/CreditCard/Referral/ReferralPage';
import ManageReferralPage from '../../views/CreditCard/Referral/ManageReferralPage'
import History from '../../views/CreditCard/History';
import ApprovedPage from "../../views/CreditCard/Approved/ApprovedPage";
import ManageApprovedPage from "../../views/CreditCard/Approved/ManageApprovedPage";

class Full extends Component {

  /*
  * <Route path="/creditcard/referral" component={ReferralPage} />
                  <Route path="/creditcard/referraldetail/:id" component={ManageReferralPage} />


                  Denna url för att testa params:
                  <Route path="/creditcard/referral/:id" component={Referral} />


                  */
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>


                  <Route path="/creditcard/referral/:id" component={Referral} />
                <Route path="/creditcard/approved" component={ApprovedPage} />
                  <Route path="/creditcard/approveddetail/:id" component={ManageApprovedPage} />
                  <Route path="/creditcard/declined" component={Referral} />
                <Route path="/creditcard/history" component={History} />
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
