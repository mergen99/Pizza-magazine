import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { ReactComponent as Location } from "../../assets/location.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { ReactComponent as Account } from "../../assets/account.svg";
import { ReactComponent as Pizza } from "../../assets/pizza.svg";
import { ReactComponent as Shop } from "../../assets/shopping_bag.svg";
import { start } from "repl";
import { RootState } from "../../redux";

/* Напоминание!!! исправить стили они повторяются  */
const Wrapper = styled.div<any>`
  width: ${(props) => props.wd || "100%"};
  height: ${(props) => props.ht || "2.5rem"};
  background-color: white;
  border-bottom: ${(props) => props.br || "none"};
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.jc || "none"};
`;
const City = styled.div`
  width: 5.7rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
const CityName = styled.select`
  font-family: Inter;
  height: 1.25rem;
  margin: 0;
  border: none;
`;
const LeftSide = styled.div`
  width: 31.625rem;
  height: 1.25rem;
  margin-left: 10.406rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Address = styled.p`
  font-family: Inter;
  margin: 0;
  cursor: pointer;
`;
const TimeDel = styled.p`
  font-family: Inter;
  margin: 0;
`;

const RightSide = styled.div`
  width: 24.125rem;
  height: 1.25rem;
  margin-left: 21.438rem;
  display: flex;
  justify-content: space-between;
`;
const TimeWork = styled.div`
  font-family: Inter;
  margin: 0;
`;
const PrivateOffice = styled.div<any>`
  width: 8.388rem;
  height: 1.25rem;
  display: flex;
  align-items: ${(props) => props.al || "start"};
  justify-content: ${(props) => props.sb || "space-between"};
  cursor: pointer;
  margin-left: ${(props) => props.ml || "none"};
`;
const Entrance = styled.p`
  font-family: Inter;
  margin: 0;
`;
const Button = styled.button<any>`
  width: 5.563rem;
  height: 2.5rem;
  background-color: rgba(255, 112, 16, 1);
  border-radius: 0.313rem;
  border: none;
  cursor: pointer;
  display: ${(props) => props.dy};
  align-items: ${(props) => props.ai};
  justify-content: ${(props) => props.jc};
`;
const Text = styled.p`
  color: white;
  margin-left: 0.4rem;
`;

export const Header: React.FC = () => {
  const items = useSelector((state: RootState) => state.card.itemsInCart);
  const totalPrice = items.reduce((acc, item) => (acc += item["price"]), 0);

  return (
    <>
      <Wrapper br={"1px solid rgba(240, 240, 240, 1)"}>
        <LeftSide>
          <City>
            <Location />
            <CityName>
              <option>Москва</option>
              <option>Элиста</option>
            </CityName>
          </City>
          <Address>Проверить адрес</Address>
          <TimeDel>Среднее время доставки*:00:24:19</TimeDel>
        </LeftSide>
        <RightSide>
          <TimeWork>Время работы: с 11:00 до 23:00</TimeWork>
          <PrivateOffice>
            <Account />
            <Entrance>Войти в аккаунт</Entrance>
          </PrivateOffice>
        </RightSide>
      </Wrapper>
      <Wrapper ht={"4rem"}>
        <Wrapper wd={"87.5rem"} jc={"space-between"}>
          <PrivateOffice ml={"10.013rem"} al={"center"} sb={"space-around"}>
            <Pizza />
            <Entrance>Куда пицца</Entrance>
          </PrivateOffice>
          <Button dy={"flex"} ai={"center"} jc={"center"}>
            <Shop />
            <Text>{totalPrice} Р</Text>
          </Button>
        </Wrapper>
      </Wrapper>
    </>
  );
};
