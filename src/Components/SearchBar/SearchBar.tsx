import React, { useState } from 'react';
import { InputField } from '../../modules/input-field';
import { button as Button } from '../../modules/button';

interface Props {
    onSubmit: ( value: string ) =>  void;
}

export const SearchBar: React.FC<Props> = ( { onSubmit } ) => {

    const [ inputValue, setValue ] = useState( '' );

    const handleFormSubmit = ( event: { preventDefault: () => void; } ) => {
        event.preventDefault();
        if( inputValue.trim() ) {
            onSubmit( inputValue.trim() );
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