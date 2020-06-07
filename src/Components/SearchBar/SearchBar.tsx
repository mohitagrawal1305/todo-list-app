import React, { useState } from 'react';
import { InputField } from '../../modules/input-field';
import { button as Button } from '../../modules/button';

interface Props {
    onSubmit: ( value: string ) =>  void;
}

// this functional compoennt will return a form with input field and a button.
export const SearchBar: React.FC<Props> = ( { onSubmit } ) => {

    // state variable to store user input.
    const [ inputValue, setValue ] = useState( '' );

    // this function will be called when user clicks on Add button or when user press enter key.
    const handleFormSubmit = ( event: { preventDefault: () => void; } ) => {
        
        // prevent default pehaviour of form.
        event.preventDefault();

        // remove trailing space and check if input is empty
        if( inputValue.trim() ) {

            // remove trailing space and submit user input 
            onSubmit( inputValue.trim() );

            // set input value as empty after submitting so that user can add next todo item.
            setValue( '' );
        }
    };
    return (
        <form className = 'ui-search-bar' role='search' action="/" method="get" onSubmit = { handleFormSubmit } >
            <InputField
                onChange = { ( _value ) => { setValue( _value ) } }
                value = { inputValue }
                placeholder = 'Enter your todo here'
            />
            <Button
                title = 'Add'
            />
        </form>
    );
};