import React, { Dispatch, RefObject, SetStateAction } from 'react';

interface IGlobalContext {
  homeRef: RefObject<any>;
  setHomeRef: Dispatch<SetStateAction<RefObject<any>>>;
  developRef: RefObject<any>;
  setDevelopRef: Dispatch<SetStateAction<RefObject<any>>>;
  hasScrolled: boolean;
  setHasScrolled: Dispatch<SetStateAction<boolean>>;
}

const defaultGlobalContext = {
  homeRef: null,
  setHomeRef: () => {},
  developRef: null,
  setDevelopRef: () => {},
  hasScrolled: false,
  setHasScrolled: () => {}
};

const GlobalContext = React.createContext<IGlobalContext>(defaultGlobalContext);

export default GlobalContext;
