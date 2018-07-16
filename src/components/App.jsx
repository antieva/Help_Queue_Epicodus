import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Switch, Route, withRouter } from 'react-router-dom';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import Admin from './Admin';
import Moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import c from './../constants';

class App extends React.Component {

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
      5000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    const { dispatch } = this.props;
    Object.keys(this.props.masterTicketList).map(ticketId => {
      const ticket = this.props.masterTicketList[ticketId];
      const newFormattedWaitTime = ticket.timeOpen.fromNow(true);
      const action = {
        type: c.UPDATE_TIME,
        id: ticketId,
        formattedWaitTime: newFormattedWaitTime
      };
      dispatch(action);
    });
   // var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
   // Object.keys(newMasterTicketList).forEach(ticketId => {
   //   newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
   // });
   // this.setState({masterTicketList: newMasterTicketList});
 }

  render() {
    return (
      <div>
        <style jsx global>{`
          body {
            font-family: monospace;
            margin-left: 30px;
            font-size: 16px;
          }
          h1 {
            text-align: center;
            background-color: #ce4914;
            height: 70px;
            padding-top: 30px;
          }
          .issue {
            border-radius: 15px 50px;
            height: 30px;
            padding: 1%;
          }`}</style>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.props.masterTicketList} />} />
          <Route path='/newticket' render={() =><NewTicketControl />} />
          <Route path='/admin' render={(props)=><Admin currentRouterPath={props.location.pathname} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  masterTicketList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  };
};

export default withRouter(connect(mapStateToProps)(App));
