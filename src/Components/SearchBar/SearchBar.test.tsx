import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';

test('renders SearchBar', () => {
  render(
    <SearchBar
        onSubmit = { ( value: string ) => { console.log( `input result on form submit`, value ); } }
    />
  );
});


test('SearchBar should return user input value on form submission', () => {
  
  let searchResult = '';

  const { getByTestId } = render(
    <SearchBar
        onSubmit = { ( value: string ) => { searchResult = value } }
    />
  );

  const input = getByTestId( 'input' );

  const button = getByTestId( 'button' );

  fireEvent.change( input, { target: { value: 'Test123' } });

  fireEvent.click( button );

  expect( searchResult ).toBe( 'Test123' );

});

test('SearchBar should not call onSubmit if input is empty', () => {
  
  let searchResult = '';

  const { getByTestId } = render(
    <SearchBar
        onSubmit = { ( value: string ) => { searchResult = value } }
    />
  );

  const input = getByTestId( 'input' );

  const button = getByTestId( 'button' );

  fireEvent.change( input, { target: { value: '' } });

  fireEvent.click( button );

  expect( searchResult ).toBe( '' );

});

test('SearchBar should not call onSubmit if input constains only space characters', () => {
  
  let searchResult = '';

  const { getByTestId } = render(
    <SearchBar
        onSubmit = { ( value: string ) => { searchResult = value } }
    />
  );

  const input = getByTestId( 'input' );

  const button = getByTestId( 'button' );

  fireEvent.change( input, { target: { value: '     ' } });

  fireEvent.click( button );

  expect( searchResult ).toBe( '' );

});

test( 'SearchBar should remote trailing space and then return input value', () => {

  let searchResult = '';

  const { getByTestId } = render(
    <SearchBar
        onSubmit = { ( value: string ) => { searchResult = value } }
    />
  );

  const input = getByTestId( 'input' );

  const button = getByTestId( 'button' );

  fireEvent.change( input, { target: { value: '  Test   ' } });

  fireEvent.click( button );

  expect( searchResult ).toBe( 'Test' );

} );
