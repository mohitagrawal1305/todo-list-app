import React from 'react';
import { InputField } from './input-field';
import { render, fireEvent } from '@testing-library/react';

test( 'render input', () => {
    
    render( <InputField  onChange = { ( value ) => { console.log( value ) } }/> );

} );

test( 'On change Input should return what user has typed.', () => {

    const { getByTestId } = render( <InputField onChange = { ( value ) => { console.log( value ) } }/> );

    const inputElement = getByTestId( 'input' );

    // fire onChange event on input.
    fireEvent.change( inputElement, { target: { value: 'Test123' } });

    // check if inputs value is what we fired.
    expect( inputElement.value ).toBe('Test123')

} );