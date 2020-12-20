
const saveState = ( state ) =>
{
    if( !state )
    {
        return undefined;
    };

    const data = JSON.stringify( state );

    return localStorage.setItem( "state", data );
};


const loadState = () =>
{
    const data =  JSON.parse( localStorage.getItem( "state" ) );

    if( !data )
    {
        return undefined;
    };

    return data;
};

//////---------------------------------------------->>>>>

export { saveState, loadState };
