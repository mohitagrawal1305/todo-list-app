import React from 'react';
import { render } from '@testing-library/react';
import { Dashboard } from './dashboard';

test('renders Dashboard', () => {
  render( <Dashboard /> );
});


test('renders title message', () => {
    const { getByTestId } = render(<Dashboard />);
    expect( getByTestId( 'title' ) ).toBeInTheDocument();
});

test( 'prints title Start Adding Todo\'s if list is empty', () => {
    
    const { getByText } = render(<Dashboard />);
    
    expect( getByText( 'Start Adding Todo\'s' ) ).toBeInTheDocument();
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