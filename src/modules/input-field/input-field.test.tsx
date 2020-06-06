import React from 'react';
import { InputField } from './input-field';
import { render } from '@testing-library/react';


it( 'render input', () => {
    render(<InputField  onChange = { ( value ) => { console.log( value ) } }/> )

} );