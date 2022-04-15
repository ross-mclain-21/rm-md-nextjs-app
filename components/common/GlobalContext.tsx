import React, { Dispatch, RefObject, SetStateAction } from 'react';

interface IGlobalContext {
  developRef: RefObject<any>;
  setDevelopRef: Dispatch<SetStateAction<RefObject<any>>>;
}

const defaultGlobalContext = {
  developRef: null,
  setDevelopRef: () => {}
};

const GlobalContext = React.createContext<IGlobalContext>(defaultGlobalContext);

export default GlobalContext;
