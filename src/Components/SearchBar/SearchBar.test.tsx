import React from 'react';
import { render } from '@testing-library/react';
import { SearchBar } from './SearchBar';

test('renders SearchBar', () => {
  render(
    <SearchBar
        onSubmit = { ( value: string ) => { console.log( `input result on form submit`, value ); } }
    />
  );
});
