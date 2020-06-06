
export const cloneDeep = ( payload: any ) => {
    return JSON.parse( JSON.stringify( payload ) );
};