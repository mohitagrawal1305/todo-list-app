import React from 'react';
import { render } from '@testing-library/react';
import { button as Button } from './button';

test( 'renders Button', () => {
  render( <Button/> );
} );

test( 'render button with title "Add"', () => {

  const { getByText } = render( <Button title = 'Add' /> );

  expect( getByText( 'Add' ) ).toBeInTheDocument();
 
} );

