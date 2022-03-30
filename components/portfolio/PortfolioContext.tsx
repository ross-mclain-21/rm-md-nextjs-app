import React, { Dispatch, SetStateAction } from "react";

interface IPortfolioContext {
  selectedTechnologies: string[];
  setSelectedTechnologies: Dispatch<SetStateAction<string[]>>;
}

const defaultPortfolioContext = {
  selectedTechnologies: [],
  setSelectedTechnologies: () => {},
};

const PortfolioContext = React.createContext<IPortfolioContext>(
  defaultPortfolioContext
);

export default PortfolioContext;
