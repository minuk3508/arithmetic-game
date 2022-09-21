import styled from "styled-components";
import { BsArrowRepeat } from "react-icons/bs";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Timer from "./Timer";

const Container = styled.div`
  width: 55rem;
  height: 26rem;
  background-color: #722e99;
  border-radius: 2rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
const QuestionBoxHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 15%;
`;
const TimerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
`;
const ResetBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
  height: 100%;
  margin-right: 2%;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  transition: all 0.2s;
  :hover {
    cursor: pointer;
    color: #cccccc;
  }
`;
const QuestionBoxBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
`;
const Question = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 55%;
`;
const Q = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 100%;
  font-size: 3rem;
  font-weight: 700;
  color: white;
`;
const Formula = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  height: 100%;
  font-size: 3rem;
  font-weight: 700;
  color: ${(props) => props.correctFont};
  transition: all 0.2s;
`;
const Next = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  margin-top: 1rem;
  margin-left: 3rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  :hover {
    cursor: pointer;
    color: #e6e6e6;
  }
`;
const Answer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40%;
`;
const AnswerInputBox = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  height: 100%;
  font-size: 4rem;
  font-weight: 700;
  color: white;
`;
const AnswerInput = styled.input`
  width: 85%;
  height: 80%;
  height: 4rem;
  padding: 0% 4%;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  background-color: #581e6e;
  border: none;
  border-radius: 1rem;
`;
const QuestionBoxFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;
`;
const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 4rem;
  font-size: 2rem;
  font-weight: 700;
  color: #722e99;
  border: none;
  border-radius: 1rem;
  background-color: #dab5e8;
  transition: all 0.2s;
  :hover {
    cursor: pointer;
    color: #c7c3c9;
    background-color: #aa8bb5;
  }
`;
const generateRandomNumber0_9 = () => {
  const characters = "0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 1; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
const generateRandomNumber1_9 = () => {
  const characters = "123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 1; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
const generateRandomOperation = () => {
  const characters = "+-x";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 1; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
const test = (a, b, c, d, e) => {
  const firstNum = Number(a + b);
  const secondNum = Number(c + d);

  if (e === "+") {
    return firstNum + secondNum;
  } else if (e === "-") {
    return firstNum - secondNum;
  } else if (e === "x") {
    return firstNum * secondNum;
  }
};

function QuestionBox() {
  const [reset, setReset] = useState("");
  const [inputs, setInputs] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [thirdNumber, setThirdNumber] = useState("");
  const [forthNumber, setForthNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [correctValue, setCorrectValue] = useState(false);
  const correctButton = useRef(null);
  const inputRef = useRef(null);
  const targetButton = document.getElementsByClassName(correctButton.current);
  console.log(targetButton);
  console.log(correctButton.current);

  useLayoutEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  });
  useEffect(() => {
    setFirstNumber(generateRandomNumber1_9());
    setSecondNumber(generateRandomNumber0_9());
    setThirdNumber(generateRandomNumber1_9());
    setForthNumber(generateRandomNumber0_9());
    setOperation(generateRandomOperation());
  }, [reset]);

  const onChange = (e) => {
    const { value } = e.target;
    const onlyNumber = value;
    setInputs(onlyNumber);
  };
  const resetButton = () => {
    setReset(generateRandomNumber0_9());
    setInputs("");
  };
  const correctAnswer = () => {
    const inputAnswer = Number(inputs);
    const answer = test(
      firstNumber,
      secondNumber,
      thirdNumber,
      forthNumber,
      operation
    );
    if (correctValue) {
      alert("이미 정답입니다. 다음문제로 넘어가세요");
    } else if (inputAnswer === answer) {
      setCorrectValue(true);
      // setReset(generateRandomNumber0_9());
    } else {
      alert("틀렸어요!");
    }
    setInputs("");
  };
  const nextButton = () => {
    setReset(generateRandomNumber0_9());
    setCorrectValue(false);
    setInputs("");
  };
  const enterPress = (e) => {
    if (e.key === "Enter" && correctValue === false) {
      correctAnswer();
    } else if (e.key === "Enter" && correctValue === true) {
      nextButton();
    }
  };
  const clickContainer = () => {
    if (inputRef.current !== null) inputRef.current.focus();
  };
  return (
    <Container onClick={clickContainer}>
      <QuestionBoxHead>
        <TimerBox>
          <Timer reset={reset} correctValue={correctValue} />
        </TimerBox>
        <ResetBox onClick={resetButton}>
          <BsArrowRepeat />
        </ResetBox>
      </QuestionBoxHead>
      <QuestionBoxBody>
        <Question>
          <Q>Q.</Q>
          <Formula correctFont={correctValue ? "#78f542" : "white"}>
            {correctValue ? (
              <>
                <span>
                  {firstNumber}
                  {secondNumber} {operation} {thirdNumber}
                  {forthNumber}
                </span>
                <Next onClick={nextButton}>{`정답!(Enter or Click)`}</Next>
              </>
            ) : (
              <span>
                {firstNumber}
                {secondNumber} {operation} {thirdNumber}
                {forthNumber}
              </span>
            )}
          </Formula>
        </Question>
        <Answer>
          <Q>A.</Q>
          <AnswerInputBox>
            <AnswerInput
              ref={inputRef}
              type="text"
              placeholder="정답을 입력하세요"
              onChange={onChange}
              onKeyPress={enterPress}
              value={inputs}
            />
          </AnswerInputBox>
        </Answer>
      </QuestionBoxBody>
      <QuestionBoxFooter>
        <SubmitButton ref={correctButton} onClick={correctAnswer}>
          완료
        </SubmitButton>
      </QuestionBoxFooter>
    </Container>
  );
}

export default QuestionBox;
