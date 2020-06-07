import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Dashboard } from './dashboard';

test('renders Dashboard', () => {
  render( <Dashboard /> );
});


test('renders title message', () => {
    const { getByTestId } = render(<Dashboard />);
    expect( getByTestId( 'title' ) ).toBeInTheDocument();
});

test( 'prints title Start Adding Todo\'s if list is empty', () => {
    
    const { getByText, queryByText } = render(<Dashboard />);

    const _list = localStorage.getItem( 'todoList' );
    const list = _list ? JSON.parse( _list ) : [];

    if( 0 === list.length ) {

        expect( getByText( 'Start Adding Todo\'s' ) ).toBeInTheDocument();
    } else {
        expect( queryByText( 'Start Adding Todo\'s' ) ).toBeNull();
    }
    
} );

test( 'prints title Total todos remaining: if list is not empty', () => {
    
    localStorage.setItem( 'todoList', JSON.stringify( [ { value: 'test', isComplete: false } ] ) );

    const { getByText } = render(<Dashboard />);
    
    const _list = localStorage.getItem( 'todoList' );
    const list = _list ? JSON.parse( _list ) : [];

    const inCompleteTodos = list.filter( ( item: { isComplete: any; } ) => {
        return !item.isComplete;
    } );
    
    expect( getByText( `Total todos remaining: ${ inCompleteTodos.length } out of ${ list.length }` ) ).toBeInTheDocument();
} );

const triggerFormSubmit = ( value: string ) => {

    const { getByTestId } = render(<Dashboard />);
    
    const input = getByTestId( 'input' );

    const button = getByTestId( 'button' );

    fireEvent.change( input, { target: { value: value } });

    fireEvent.click( button );
};

test( 'Should add items on local storage', () => {

    triggerFormSubmit( 'Test123' );

    const _list = localStorage.getItem( 'todoList' );

    const list = _list ? JSON.parse( _list ): [];

    expect( list[0].value ).toBe( 'Test123' );

} );

test( 'Should not add existing on local storage', () => {

    localStorage.setItem( 'todoList', JSON.stringify( [ { value: 'Test123', isComplete: false } ] ) );

    const _list = localStorage.getItem( 'todoList' );

    const initialListLength = _list ? JSON.parse( _list ).length: 0;

    triggerFormSubmit( 'Test123' );

    const _newList = localStorage.getItem( 'todoList' );

    const finalListLength = _newList ? JSON.parse( _newList ).length: 0;

    expect( initialListLength ).toBe( finalListLength );

} );

test( 'Should not add existing item but with different  on local storage', () => {

    localStorage.setItem( 'todoList', JSON.stringify( [ { value: 'Test123', isComplete: false } ] ) );

    const _list = localStorage.getItem( 'todoList' );

    const initialListLength = _list ? JSON.parse( _list ).length: 0;

    triggerFormSubmit( 'test123' );

    const _newList = localStorage.getItem( 'todoList' );

    const finalListLength = _newList ? JSON.parse( _newList ).length: 0;

    expect( initialListLength ).toBe( finalListLength );

} );
