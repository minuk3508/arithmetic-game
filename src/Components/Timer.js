import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  font-weight: 700;
  color: white;
`;
const TestButton = styled.div`
  :hover {
    cursor: pointer;
  }
`;
function Timer({ reset, correctValue }) {
  const [testValue, setTestValue] = useState(true);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  let startTimer;
  useEffect(() => {
    setTestValue(!correctValue);
  }, [correctValue]);
  console.log(testValue);
  useEffect(() => {
    if (testValue) {
      startTimer = setInterval(() => setSec((prev) => prev + 1), 1000);
    } else {
      clearInterval(startTimer);
    }

    return () => clearInterval(startTimer);
  }, [testValue]);
  useEffect(() => {
    if (sec >= 60) {
      setSec(0);
      setMin((prev) => prev + 1);
    }
  }, [sec]);
  useEffect(() => {
    setMin(0);
    setSec(0);
    console.log(reset);
  }, [reset]);

  return (
    <Container>
      {min >= 10 ? `${min}` : `0${min}`}:{sec >= 10 ? `${sec}` : `0${sec}`}
    </Container>
  );
}

export default Timer;
