import { types } from "../Types/types";

//////<<<<<------------------------------------------------``

const openModalAction = () => ( { type : types.uiOpenModal } );

const closeModalAction = () => ( { type : types.uiCloseModal } );

//////---------------------------------------------->>>>>

export { openModalAction,closeModalAction };