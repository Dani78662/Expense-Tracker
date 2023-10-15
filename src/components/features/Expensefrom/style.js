import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 100px;
  min-width: 500px;
  max-width: 1000px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 10px;
  width: 100%;
  max-width: 550px;
  height: auto;
  margin-top: 10rem;
  padding: 15px;
  background-color: goldenrod;
  border-radius: 10px;
  color: black;
`;

const Input = styled.input`
  width: 100%;
  border: transparent;
  max-width: 80%;
  padding: 0.5rem;
  border-radius: 10px;
  margin-right: 10px;
  max-width: 100%;
`;
export { Form, Input };
