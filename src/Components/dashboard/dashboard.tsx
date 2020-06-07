import React from 'react';
import { SearchBar } from '../SearchBar';
import { ChoiceList } from '../../modules/choice-list';
import { useStore } from '../../utils/useStore'
import { cloneDeep } from '../../utils/cloneDeep';

const handleAddNewToDo = (
    list: Array<{}>,
    setList: ( list: Array<{}> ) => void
    ) => {

    return ( value: string ) => {
        const _list = cloneDeep( list );

        const checkIfAlreadyExist = _list.filter( (item: { value: string; }) => {
            return item.value.toLowerCase() === value.toLowerCase();
        } );

        if( 0 === checkIfAlreadyExist.length ) {

            _list.unshift( { value: value, isCompleted: false } );

            setList( _list );
        }
    };

};

const renderTitle = ( list: Array<{ value: string, isComplete: boolean }> ) => {

    let title = 'Start Adding Todo\'s';
    if( 0 !== list.length ) {

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
    const [ list, setList ] = useStore( 'todoList' );
    const handleSubmit = handleAddNewToDo( list, setList );
    return (
        <div className = 'ui-dashboard' >
            { renderTitle( list ) }
            <SearchBar
                onSubmit = { handleSubmit }
            />
            <ChoiceList
                list = { list }
                onClick = { ( _list ) => { setList( _list ); } }
            />
        </div>
    );
};