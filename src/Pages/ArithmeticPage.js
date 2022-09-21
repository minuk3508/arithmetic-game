import styled from "styled-components";
import QuestionBox from "../Components/QuestionBox";

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const RecodeBox = styled.div`
  width: 25rem;
  height: 26rem;
  border-radius: 2rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

function ArithmeticPage() {
  return (
    <Container>
      <QuestionBox />
      <RecodeBox></RecodeBox>
    </Container>
  );
}

export default ArithmeticPage;
