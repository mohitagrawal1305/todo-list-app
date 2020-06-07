import React from 'react';
import { SearchBar } from '../SearchBar';
import { ChoiceList } from '../../modules/choice-list';
import { useStore } from '../../utils/useStore'
import { cloneDeep } from '../../utils/cloneDeep';

// this function will add todo into existing todo's in `Last In First Out` basis
// this function returns another function that will be called with new user input.
const handleAddNewToDo = (
    list: Array<{}>,
    setList: ( list: Array<{}> ) => void
    ) => {

    // return function.
    return ( value: string ) => {

        // existing list of todo's
        const _list = cloneDeep( list );

        // check if item already exists in todos.
        const checkIfAlreadyExist = _list.filter( (item: { value: string; }) => {
            return item.value.toLowerCase() === value.toLowerCase();
        } );

        // if item doesn't exist on list then add item on todo list.
        if( 0 === checkIfAlreadyExist.length ) {

            // adds item at 0 index.
            _list.unshift( { value: value, isCompleted: false } );

            // call custom hooks setList function to update todo list.
            setList( _list );
        }
    };

};

const renderTitle = ( list: Array<{ value: string, isComplete: boolean }> ) => {

    // default title when user visits application for the first time.
    let title = 'Start Adding Todo\'s';

    // if todo list is not empty then show total todos remaining.
    if( 0 !== list.length ) {

        // in-complete todo's.
        const inCompleteTodos = list.filter( ( item ) => {
            return !item.isComplete;
        } );
        
        title = `Total todos remaining: ${ inCompleteTodos.length } out of ${ list.length }`
    }
    return (
        <h1 data-testid = 'title' className = 'ui-dashboard__title' >
            { title }
        </h1>
    );
};

export const Dashboard = () => {

    // custom hook to fet and update todo-lists
    const [ list, setList ] = useStore( 'todoList' );

    // function to be called on search submit.
    const handleSubmit = handleAddNewToDo( list, setList );

    return (
        <div className = 'ui-dashboard' >

            { /* title */ }
            { renderTitle( list ) }

            { /* SearchBar */ }
            <SearchBar
            
                // function that will be called when user clicks on submit button or press enter key while typing.
                onSubmit = { handleSubmit }
            />

            { /* ChoiceList */ }
            <ChoiceList
                
                // existing list of todo's that needs to be rendered.
                list = { list }
                
                // this function will be called when user marks any item as complete or when clicked on delete button
                onClick = { ( _list ) => { setList( _list ); } }
            />
        </div>
    );
};