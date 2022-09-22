import styled from "styled-components";
import { BsArrowRepeat, BsLightbulb } from "react-icons/bs";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 25rem;
  height: 26rem;
  border-radius: 2rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
const BoxHead = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 15%;
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  width: 60%;
  height: 100%;
`;
const ResetBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  width: 20%;
  height: 100%;
  transition: all 0.2s;
  :hover {
    cursor: pointer;
    color: #cccccc;
  }
`;
const EmptyBox = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  height: 100%;
`;
const BoxBody = styled.div`
  display: flex;
  overflow: auto;
  flex-direction: column;
  width: 100%;
  height: 75%;
  padding: 5% 8%;
  ::-webkit-scrollbar {
    width: 0.5rem; /* 스크롤바의 너비 */
  }
`;
const Recodes = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 3rem;
  color: #707070;
`;
const Numbering = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  height: 100%;
  font-size: 1.5rem;
  font-weight: 700;
`;
const Formula = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 100%;
  margin-left: 5%;

  font-size: 1.5rem;
  font-weight: 700;
`;
const Recode = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 45%;
  height: 100%;
  font-size: 1.5rem;
  font-weight: 700;
`;
const Div = styled.div`
  margin-bottom: 10%;
`;
const Bottom = styled.div`
  width: 100%;
  height: 10%;
`;
function RecodeBox({ recodeData }) {
  const { recode, formula } = recodeData;
  const [recodeArray, setrecodeArray] = useState(["empty"]);
  const [formulaArray, setFormulaArray] = useState(["empty"]);
  useEffect(() => {
    setrecodeArray([...recode]);
    setFormulaArray([...formula]);
  }, [recode, formula]);

  console.log(recode);
  console.log(recodeArray);
  return (
    <Container>
      <BoxHead>
        <EmptyBox />
        <TitleBox>RECODE</TitleBox>
        <ResetBox
          onClick={() => {
            window.location.reload();
          }}
        >
          <BsArrowRepeat />
        </ResetBox>
      </BoxHead>
      <BoxBody>
        <Recodes>
          <Recode>
            {recodeArray.map((i) => (
              <Div>
                <BsLightbulb />
                __ {i}
              </Div>
            ))}
          </Recode>

          <Formula>
            {formulaArray.map((i) => (
              <Div>{i}</Div>
            ))}
          </Formula>
        </Recodes>
        <Bottom />
      </BoxBody>
    </Container>
  );
}

export default RecodeBox;
