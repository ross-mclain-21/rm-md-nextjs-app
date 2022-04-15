import { RefObject } from 'react';

export const scrollTo = (ref: RefObject<any>) => {
  ref.current.scrollIntoView({ behavior: 'smooth' });
};
