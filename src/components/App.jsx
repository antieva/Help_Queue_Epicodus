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

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedTicket: null
    };
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

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
   // var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
   // Object.keys(newMasterTicketList).forEach(ticketId => {
   //   newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
   // });
   // this.setState({masterTicketList: newMasterTicketList});
 }

  handleChangingSelectedTicket(ticketId){
  this.setState({selectedTicket: ticketId});
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
          <Route path='/admin' render={(props)=><Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname} onTicketSelection={this.handleChangingSelectedTicket}
          selectedTicket={this.state.selectedTicket} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    masterTicketList: state
  }
}

App.propTypes = {
  masterTicketList: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(App));
