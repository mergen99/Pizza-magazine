import React from "react";
import styled from "styled-components";
import { ItemFood } from "../ItemFood/ItemFood";
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";
import { FoodArray } from "../Main/Main";

const FoodWrapper = styled.div<any>`
  width: ${(props) => props.wd};
  height: ${(props) => props.ht};
  margin-left: ${(props) => props.ml};
  margin-top: ${(props) => props.mt};
  display: ${(props) => props.dy};
  flex-direction: ${(props) => props.fd};
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.at};
  flex-wrap: ${(props) => props.fw};
`;

export const ListFood = ({ setModalPizzaActive, setActiveFood }: any) => {
  /*   const dispatch = useDispatch();
  const handleClick = (e: any) => {
    e.stopPropaganation();
    dispatch(setItemInCart(foods.payload));
  }; */
  return (
    <FoodWrapper dy={"flex"} fw={"wrap"}>
      {FoodArray.map((item) => (
        <ItemFood
          food={item}
          key={item.id}
          setModalPizzaActive={setModalPizzaActive}
          setActiveFood={setActiveFood}
        />
      ))}
    </FoodWrapper>
  );
};
