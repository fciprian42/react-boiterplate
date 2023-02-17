import React, { useState, useCallback } from "react";

import { useThemeContext } from "hooks";

import { Container, Button } from "./Home.styles";

interface IHome {}

const Home: React.FC<IHome> = (props) => {
  const theme = useThemeContext();

  const [counter, setCounter] = useState<number>(0);

  const increment = useCallback(() => {
    setCounter((prevState) => prevState + 1);
  }, []);

  const decrement = useCallback(() => {
    setCounter((prevState) => prevState - 1);
  }, []);

  return (
    <Container>
      <p>count: {counter}</p>
      <Button onClick={increment}>increment</Button>
      <Button onClick={decrement}>decrement</Button>
    </Container>
  );
};

export default Home;
