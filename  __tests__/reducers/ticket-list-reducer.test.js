import ticketListReducer from './../../src/reducers/ticket-list-reducer';
import selectedTicketReducer from './../../src/reducers/selected-ticket-reducer';
import rootReducer from './../../src/reducers/index';
import { createStore } from 'redux';
import Moment from 'moment';
import c from './../constants';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterTicketList: {},
      selectedTicket: {}
    });
  });

  test('Should contain ticketListReducer logic', () => {
  expect(store.getState().masterTicketList).toEqual(ticketListReducer(undefined, { type: null }));
});

test('Should contain selectedTicketReducer logic', () => {
  expect(store.getState().selectedTicket).toEqual(selectedTicketReducer(undefined, { type: null }));
});

});

describe('ticketListReducer', () => {

  let action;
  const sampleTicketData = {
    names : 'Ryan & Aimen',
    location : '4b',
    issue : 'Jest is being a diva and won\'t work with Webpack!',
    timeOpen : 1500000000000,
    id: 0
  };

  test('Shoud return default state if no action type is recognized', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  test('New ticket should include Moment-formatted wait times', () => {
  const { names, location, issue, timeOpen, id } = sampleTicketData;
  action = {
    type: c.ADD_TICKET,
    names: names,
    location: location,
    issue: issue,
    timeOpen: timeOpen,
    id: id,
    formattedWaitTime: new Moment().fromNow(true)
  };
  expect(ticketListReducer({}, action)).toEqual({
    [id] : {
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id,
      formattedWaitTime: 'a few seconds'
    }
  });
});

  test('Should add freshly-calculated Moment-formatted wait time to ticket entry', () => {
   const { names, location, issue, timeOpen, id } = sampleTicketData;
   action = {
     type: c.UPDATE_TIME,
     formattedWaitTime: '4 minutes',
     id: id
   };
   expect(ticketListReducer({ [id] : sampleTicketData }, action)).toEqual({
     [id] : {
       names: names,
       location: location,
       issue: issue,
       timeOpen: timeOpen,
       id: id,
       formattedWaitTime: '4 minutes'
     }
   });
 });

  });

});
