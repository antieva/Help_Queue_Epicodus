import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Switch, Route } from 'react-router-dom';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import Moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
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
   console.log('check');
   let newMasterTicketList = this.state.masterTicketList.slice();
   newMasterTicketList.forEach((ticket) =>
     ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
   );
   this.setState({masterTicketList: newMasterTicketList});
 }

  handleAddingNewTicketToList(newTicket) {
    var newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render() {
    return (
      <div>
        <style jsx global>{`
          body {
            font-family: monospace;
            margin-left: 30px;
          }
          h1 {
            text-align: center;
          }
          .issue {
            border: 1px solid green;
            border-radius: 15px 50px;
            height: 30px;
            padding: 1%;
          }`}</style>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={() =><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
