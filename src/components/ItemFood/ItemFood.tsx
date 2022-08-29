import React, { useState } from "react";
import styled from "styled-components";
import { setItemInCart } from "../../redux/cart/reducer";
import { useDispatch } from "react-redux";

const Card = styled.div`
  position: relative;
  width: 18.75rem;
  height: 30rem;
  background-color: white;
  border-radius: 0.513rem;
  display: flex;
  flex-direction: column;
  margin-right: 0.75rem;
  margin-top: 2rem;
`;
const Image = styled.img`
  width: 18.75rem;
  height: 18.75rem;
`;
const Text = styled.p<any>`
  width: ${(props) => props.wd || "none"};
  height: ${(props) => props.ht || "none"};
  margin: ${(props) => props.mr};
  font-style: ${(props) => props.fs};
  color: ${(props) => props.cr};
`;
const Wrapper = styled.div<any>`
  width: ${(props) => props.wd || "16rem"};
  height: ${(props) => props.ht || "3rem"};
  margin: ${(props) => props.mr};
  display: flex;
  justify-content: space-between;
`;
const Button = styled.div`
  width: 9.375rem;
  height: 3rem;
  background-color: rgba(255, 112, 16, 1);
  border-radius: 0.313rem;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Marker = styled.div`
  position: absolute;
  top: 1.25rem;
  width: 4.063rem;
  height: 2rem;
`;
export const ItemFood = ({ food, setModalPizzaActive, setActiveFood }: any) => {
  const dispatch = useDispatch();

  const handleClick = (e: any) => {
    dispatch(setItemInCart(food));
  };
  const cs = () => {
    setModalPizzaActive(true);
    setActiveFood(food);
  };
  return (
    <Card>
      <Image src={"assets/" + food.image} />
      <Marker>{food.markerName}</Marker>
      <Text
        wd={"16.25rem"}
        ht={"1.5rem"}
        mr={"1rem 0 0 1rem"}
        cr={"rgba(25, 25, 25, 1)"}
      >
        {food.nameFood}
      </Text>
      <Text wd={"16.25rem"} ht={"2.75rem"} mr={"0.75rem 0 0 1rem"}>
        {food.composition}
      </Text>
      <Wrapper mr={"1rem 0 0 0"}>
        <Button onClick={cs}>Выбрать</Button>
        <Text cr={"rgba(255, 112, 16, 1)"}>{"от" + " " + food.price}</Text>
      </Wrapper>
    </Card>
  );
};
