import ticketListReducer from './../../src/reducers/ticket-list-reducer';
import selectedTicketReducer from './../../src/reducers/selected-ticket-reducer';
import rootReducer from './../../src/reducers/index';
import { createStore } from 'redux';

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

  test('Should successfully add new ticket data to masterTicketList', () => {
      const { names, location, issue, timeOpen, id } = sampleTicketData;
      action = {
        type: 'ADD_TICKET',
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id
      };
      expect(ticketListReducer({}, action)).toEqual({
        [id] : {
          names: names,
          location: location,
          issue: issue,
          timeOpen: timeOpen,
          id: id
        }
      });
    });

  });

  describe("selectedTicketReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(selectedTicketReducer({}, { type: null })).toEqual({});
  });

  test('Should record which ticket has been selected by user', () => {
   expect(selectedTicketReducer({}, { type: 'SELECT_TICKET', ticketId: 1 })).toEqual(1);
 });

});
