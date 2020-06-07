import React from 'react';
import { render } from '@testing-library/react';
import { ChoiceList } from './choice-list';

test('renders ChoiceList', () => {
  render(
    <ChoiceList
        list = { [ { value: 'Test todo item', isComplete: false } ] }
        onClick = { ( list ) => { console.log( 'Test result for updated todo list', list ); } }
    />
  );
});
