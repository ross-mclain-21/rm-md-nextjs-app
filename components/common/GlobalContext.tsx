import React, { Dispatch, RefObject, SetStateAction } from 'react';

interface IGlobalContext {}

const defaultGlobalContext = {};

const GlobalContext = React.createContext<IGlobalContext>(defaultGlobalContext);

export default GlobalContext;
