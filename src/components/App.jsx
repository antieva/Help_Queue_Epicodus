import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';

function App() {
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
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
      </Switch>
    </div>
  );
}

export default App;
