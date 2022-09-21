import { Link } from "react-router-dom";
import styled from "styled-components";

const StartButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 10rem;
  color: #8d39bd;
  border-radius: 2rem;
  transition: all 0.1s;
  :hover {
    cursor: pointer;
    color: #722e99;
  }
`;
function StartPage() {
  return (
    <Link to="/arithmetic">
      <StartButton>START</StartButton>
    </Link>
  );
}

export default StartPage;
