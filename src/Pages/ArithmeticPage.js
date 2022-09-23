import { useState } from "react";
import styled from "styled-components";
import QuestionBox from "../Components/QuestionBox";
import RecodeBox from "../Components/RecodeBox";

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  width: 100%;
  height: 100%;
`;

function ArithmeticPage() {
  const [data, setData] = useState({ recode: ["empty"], formula: ["empty"] });
  const recodeFuntion = (value) => {
    setData(value);
  };
  return (
    <Container>
      <QuestionBox recodeFuntion={recodeFuntion} />
      <RecodeBox recodeData={data} />
    </Container>
  );
}

export default ArithmeticPage;
