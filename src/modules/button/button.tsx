import React from 'react';

interface Props {
    title?: string
}

export const button: React.FC<Props> = ( { title } ) => {

    return (
        <button
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
