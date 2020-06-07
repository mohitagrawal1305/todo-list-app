import React from 'react';

interface Props {
    value?: string,
    placeholder?: string,
    onChange: ( value: string ) => void,
    type?: string
}

// this functional component return input field
export const InputField: React.FC<Props> = ( { value, placeholder, onChange, type } ) => {

    // this function will be called when user types something on input field.
    const handleOnChange = ( event: { currentTarget: { value: string; }; } ) => {
        onChange( event.currentTarget.value );
    };
    
    return (
        <input
            data-testid = 'input'
            className = 'ui-input-field'
            autoFocus = { true }
            type = { type }
            value = { value }
            placeholder = { placeholder }
            onChange = { handleOnChange }
        />
    );
};

InputField.defaultProps = {
    placeholder: 'Add To do\'s',
    type: 'text'
};
