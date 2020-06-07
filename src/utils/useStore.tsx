import { useState } from 'react';

const getList = ( key: string ) => {
    
    const _list = localStorage.getItem( key );
    
    return _list ? JSON.parse( _list ) : [];
};

function useStore( key: string ) {

    const _list = getList( key );
    const [ list, updateList ] = useState( _list );
    
    const setList = ( item: any ) => {
        
        localStorage.setItem( key, JSON.stringify( item ) );
      
        updateList( item );
    };

    return [ list, setList ];
};

export { useStore };
