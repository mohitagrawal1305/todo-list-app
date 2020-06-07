import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ChoiceList } from './choice-list';

test('renders ChoiceList', () => {
  render(
    <ChoiceList
        list = { [ { value: 'Test todo item', isComplete: false } ] }
        onClick = { ( list ) => { console.log( 'Test result for updated todo list', list ); } }
    />
  );
});

test( 'should return list of items if list is not empty', () => {
  
  const { getByText } = render(
    <ChoiceList
        list = { [ { value: 'Test todo item', isComplete: false } ] }
        onClick = { () => { } }
    />
  );

  expect( getByText( 'Test todo item' ) ).toBeInTheDocument();

} );

test( 'should delete item on delete icon click', () => {
  
  let list = [ { value: 'temp', isComplete: false } ];
  const { getByTestId, rerender } = render(
    <ChoiceList
        list = { list }
        onClick = { ( _list ) => { list = _list; } }
    />
  );

  const deleteIconElement = getByTestId( 'li-item-delete-icon-temp' );

  // fire onChange event on input.
  fireEvent.click( deleteIconElement, 'temp' );

  rerender(
    <ChoiceList
      list = { list }
      onClick = { ( _list ) => { list = _list; } }
    />
  );

  expect( deleteIconElement ).not.toBeInTheDocument();

} );

test( 'should not add delete icon if props.canDelete is false', () => {
  
  let list = [ { value: 'temp', isComplete: false } ];
  const { queryByTestId } = render(
    <ChoiceList
        list = { list }
        onClick = { ( _list ) => { list = _list; } }
        canDetete = { false }
    />
  );

  expect( queryByTestId( 'li-item-delete-icon-temp' ) ).toBeNull();


} );

test( 'should mark as complete item on click', () => {
  
  let list = [ { value: 'temp', isComplete: false } ];
  const { getByTestId, rerender } = render(
    <ChoiceList
        list = { list }
        onClick = { ( _list ) => { list = _list; } }
    />
  );

  const element = getByTestId( 'li-item-label-temp' );

  // fire onChange event on input.
  fireEvent.click( element, 'temp' );

  rerender(
    <ChoiceList
      list = { list }
      onClick = { ( _list ) => { list = _list; } }
    />
  );

  const strickedElement = getByTestId( `li-item-strike-through-temp` );

  expect( strickedElement ).toBeInTheDocument();

} );