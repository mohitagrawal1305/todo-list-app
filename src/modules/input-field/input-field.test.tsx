import React from 'react';
import { InputField } from './input-field';
import { render, fireEvent } from '@testing-library/react';

test( 'render input', () => {
    
    render( <InputField  onChange = { ( value ) => { console.log( value ) } }/> );

} );

test( 'On change Input should return what user has typed.', () => {
    const { getByTestId } = render( <InputField onChange = { ( value ) => { console.log( value ) } }/> );

    const inputElement = getByTestId( 'input' );

    fireEvent.change( inputElement, { target: { value: 'Test123' } });

    expect( inputElement.value ).toBe('Test123')

} );