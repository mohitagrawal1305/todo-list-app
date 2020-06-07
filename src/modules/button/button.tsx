import React from 'react';

interface Props {
    title?: string
}

// this functional component returns a generic button.
export const button: React.FC<Props> = ( { title } ) => {

    return (
        <button
            data-testid = 'button'
            className = 'ui-button'
            type = 'submit'
        >
            { title }
        </button>
    );
};

button.defaultProps = {
    title: 'Submit'
};
