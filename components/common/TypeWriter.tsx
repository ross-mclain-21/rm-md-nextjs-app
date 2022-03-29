import React, { useState, useEffect } from 'react';

interface TypeWriterInput {
  message: string;
  classes: string;
  typingSpeed: number;
}

interface TypeWriterState {
  text: string;
  isDeleting: boolean;
  loopNum: number;
  typingSpeed: number;
}

function TypeWriter({ message, classes, typingSpeed = 300 }: TypeWriterInput) {
  const initialState: TypeWriterState = {
    text: '',
    isDeleting: false,
    loopNum: 0,
    typingSpeed: typingSpeed
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleType = () => {
      setState(cs => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs),
        typingSpeed: typingSpeed
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [message]);

  function getCurrentText(currentState: TypeWriterState) {
    return currentState.isDeleting
      ? message.substring(0, currentState.text.length - 1)
      : message.substring(0, currentState.text.length + 1);
  }

  return <span className={classes}>{state.text}</span>;
}

export default TypeWriter;
