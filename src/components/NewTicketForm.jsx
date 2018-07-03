import React from 'react';
import reallyAdorablePuppy from '../assets/images/puppy.jpeg';
import PropTypes from 'prop-types';

function NewTicketForm(props) {
  var imgStyle = {
    width: '830px',
  }
  var inputStyle =  {
  transition: 'width .35s linear',
  outline: 'none',
  border: 'none',
  borderRadius: '4px',
  padding: '10px',
  fontSize: '20px',
  width: '200px',
  backgroundColor: '#dddddd',
  margin: '10px 10px 10px 0',
  }

  var textareaStyle = {
    transition: 'width .35s linear',
    outline: 'none',
    border: 'none',
    borderRadius: '4px',
    padding: '10px',
    fontSize: '20px',
    width: '350px',
    backgroundColor: '#dddddd',
    height: '25px',
    margin: '0 10px -15px 0',
  }

  var focused = {
    width: '250px'
  }

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
  }

  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value});
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
NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
