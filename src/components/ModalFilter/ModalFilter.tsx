import React from "react";
import styled from "styled-components";
import { ReactComponent as Cross } from "../../assets/X.svg";
const Modal = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transform: ${(props) => props.tr};
`;

const ModalContent = styled.div`
  position: fixed;
  width: 32.5rem;
  height: 59.063rem;
  top: 0;
  right: 0;
  z-index: 5;
  background-color: white;
`;
const Wrapper = styled.div`
  position: fixed;
  width: 2rem;
  top:1.8rem;
  height: 2.5rem;
  right: 0.5rem;
  display: flex;
  z-index: 6;
`;
const Text = styled.p`
  position: fixed;
  right: 23.5rem;
  z-index: 7;
  font-size: 2rem;
  top: 1rem;
  margin: 0;
`;
export const ModalFilter = ({ active, setActive }: any) => {
  return (
    <Modal
      tr={active === true ? "scale(1)" : "scale(0)"}
      
    >
      <ModalContent >
        <Text>Фильтры</Text>
        <Wrapper>
        <Cross onClick={() => setActive(false)} />
        </Wrapper>
      </ModalContent>
    </Modal>
  );
};
