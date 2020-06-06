import React from 'react';

interface Props {
    value?: string,
    placeholder?: string,
    onChange: ( value: string ) => void,
    type?: string
}

export const InputField: React.FC<Props> = ( { value, placeholder, onChange, type } ) => {

    const handleOnChange = ( event: { currentTarget: { value: string; }; } ) => {
        onChange( event.currentTarget.value );
    };
    return (
        <input
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
