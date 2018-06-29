import React from 'react';
import reallyAdorablePuppy from '../assets/images/puppy.jpeg';

function NewTicketForm() {
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

  return (
    <div>
      <form>
        <input
          style={inputStyle}
          type='text'
          id='names'
          placeholder='Pair Names' />
        <input
          className={focused}
          style={inputStyle}
          type='text'
          id='location'
          placeholder='Location' />
        <textarea
          style={textareaStyle}
          id ='issue'
          placeholder='Describe your issue.' />
        <button type='submit'>Help!</button>
      </form>
      <img style={imgStyle} src={reallyAdorablePuppy}/>
    </div>
  );
}

export default NewTicketForm;
