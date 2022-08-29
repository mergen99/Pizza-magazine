import React from "react";
import styled from "styled-components";
import { ReactComponent as Cross } from "../../assets/X.svg";
import { FoodArray } from "../Main/Main";

const Modal = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transform: ${(props) => props.tr};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContent = styled.div`
  position: fixed;
  width: 66.875rem;
  height: 42.5rem;
  border-radius: 1.5rem;
  z-index: 5;
  background-color: white;
`;
const Wrapper = styled.div<any>`
  position: fixed;
  right: ${(props) => props.rt || "10rem"};
  top: ${(props) => props.tp || "1.5rem"};
  width: ${(props) => props.wd || "2.5rem"};
  height: ${(props) => props.ht || "2.5rem"};
  z-index: 5;
`;
const Image = styled.img`
  position: fixed;
  left: 15rem;
  top: 10rem;
  z-index: 99;
  width: 28.125rem;
  height: 28.125rem;
  border: none;
`;
const Name = styled.p`
  position: fixed;
  left: 50rem;
  top: 3rem;
  z-index: 99;
  width: 13rem;
  height: 5rem;
  font-size: 20px;
`;

const ingrediets = [
  "Mozarella.svg",
  "Cucambers.svg",
  "Pepperoni.svg",
  "Tomato.svg",
];
export const ModalPizza = ({
  active,
  setModalPizzaActive,
  activeFood,
}: any) => {
  return (
    <Modal tr={active === true ? "scale(1)" : "scale(0)"}>
      <ModalContent>
        <Image src={"assets/" + activeFood.image} />
        <Name>{activeFood.nameFood}</Name>
        <Wrapper
          wd={"30rem"}
          ht={"9.313rem"}
          tp={"10rem"}
          rt={"15rem"}
        ></Wrapper>
      </ModalContent>
      <Wrapper>
        <Cross onClick={() => setModalPizzaActive(false)} />
      </Wrapper>
    </Modal>
  );
};
