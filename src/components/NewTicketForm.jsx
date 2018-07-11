import React from 'react';
import reallyAdorablePuppy from '../assets/images/puppy.jpeg';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function NewTicketForm(props) {
  var imgStyle = {
    width: '910px',
  };

  var inputStyle =  {
  outline: 'none',
  border: 'none',
  borderRadius: '4px',
  padding: '10px',
  fontSize: '20px',
  width: '200px',
  backgroundColor: '#dddddd',
  margin: '10px 10px 10px 0',
  };

  var textareaStyle = {
    outline: 'none',
    border: 'none',
    borderRadius: '4px',
    padding: '10px',
    fontSize: '20px',
    width: '350px',
    backgroundColor: '#dddddd',
    height: '25px',
    margin: '0 10px -15px 0',
  };

  var focused = {
    width: '250px'
  };

  var button = {
    transition: 'width .35s linear',
    outline: 'none',
    border: 'none',
    borderRadius: '4px',
    padding: '10px',
    fontSize: '20px',
    width: '65px',
    backgroundColor: '#dddddd',
    height: '45px',
  };

  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_TICKET',
      id: v4(),
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    };
    dispatch(action);
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          style={inputStyle}
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}} />
        <input
          className={focused}
          style={inputStyle}
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          style={textareaStyle}
          id ='issue'
          placeholder='Describe your issue.'
          ref={(input) => {_issue = input;}}/>
        <button
          style={button}
          type='submit'>Help!</button>
      </form>
      <img style={imgStyle} src={reallyAdorablePuppy}/>
    </div>
  );
}

//NewTicketForm = connect()(NewTicketForm);

export default connect()(NewTicketForm);
