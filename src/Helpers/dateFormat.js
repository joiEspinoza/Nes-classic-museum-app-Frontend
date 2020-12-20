

const formatoFecha = ( fecha ) =>
{
    return fecha.replace( /^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1' );
};

//////---------------------------------------------->>>>>

export { formatoFecha };