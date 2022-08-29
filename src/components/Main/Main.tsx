import React from "react";
import styled from "styled-components";
import { Item } from "../Item/Item";
import { ReactComponent as Mid } from "../../assets/3middle.svg";
import { ReactComponent as Cashback } from "../../assets/cashback.svg";
import { ReactComponent as Location } from "../../assets/location.svg";
import { ReactComponent as Filter } from "../../assets/FFilter.svg";
import { ModalFilter } from "../ModalFilter/ModalFilter";
import { ItemFood } from "../ItemFood/ItemFood";
import { setItemInCart } from "../../redux/cart/reducer";
import { useDispatch } from "react-redux";
import { ListFood } from "../ListFood/ListFood";
import { ModalPizza } from "../ModalPizza/ModalPizza";

const Wrapper = styled.main`
  width: 100%;
  min-height: 40rem;
  max-height: auto;
  background-color: #f9f9f9;
`;
const List = styled.div<any>`
  width: ${(props) => props.wd || "80.625rem"};
  height: ${(props) => props.ht || "6.5rem"};
  margin-left: 10.188rem;
  margin-top: ${(props) => props.mt || "none"};
  padding-top: ${(props) => props.pt || "none"};
  display: flex;
  align-items: ${(props) => props.at};
  justify-content: ${(props) => props.jc};
  background-color: ${(props) => props.bc || "none"};
  border-radius: ${(props) => props.br};
`;
const Text = styled.p<any>`
  width: ${(props) => props.wd || "14.063rem"};
  height: ${(props) => props.ht || "1.5rem"};
  margin: ${(props) => props.mr || "0"};
  margin-left: ${(props) => props.ml};
  margin: ${(props) => props.mr};
  font-size: ${(props) => props.sz};
  color: ${(props) => props.clr};
  display: ${(props) => props.dy};
  align-items:${(props) => props.at}
  justifu-content:${(props) => props.at};
  text-align:${(props) => props.ta}
`;
const Input = styled.input`
  width: 48.938rem;
  height: 3rem;
  border: 2px solid #f9f9f9;
`;
const Button = styled.button<any>`
  width: ${(props) => props.wd || "9.375rem"};
  height: ${(props) => props.ht || "3rem"};
  background-color: ${(props) => props.bc || "rgba(255, 112, 16, 1)"};
  border-radius: 0.313rem;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
  color: white;
  display: ${(props) => props.dy};
  align-items: ${(props) => props.at};
`;
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

const foods = [
  { img: "Fire.png", name: "Акция" },
  { img: "Pizza.png", name: "Пицца" },
  { img: "Sushi.png", name: "Суши" },
  { img: "Drink.png", name: "Напитки" },
  { img: "Snacks.png", name: "Закуски" },
  { img: "Combo.png", name: "Комбо" },
  { img: "Dessert.png", name: "Десерты" },
  { img: "Sauce.png", name: "Соусы" },
];

export const FoodArray = [
  {
    id: 1,
    category: "Пицца",
    image: "chicken.svg",
    nameFood: "Чикен Сладкий Чили",
    markerName: "new",
    composition: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
    price: 399,
  },
  {
    id: 2,
    category: "Пицца",
    image: "easepease.svg",
    nameFood: "Чикен Сладкий Чили",
    markerName: "new",
    composition: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
    price: 549,
  },
  {
    id: 3,
    category: "Пицца",
    image: "easypeasychicken.svg",
    nameFood: "Чикен Сладкий Чили",
    markerName: "new",
    composition: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
    price: 249,
  },
  {
    id: 4,
    category: "Пицца",
    image: "fourseason.svg",
    nameFood: "",
    markerName: "new",
    composition: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
    price: 630,
  },
  {
    id: 5,
    category: "Пицца",
    image: "fourseason.svg",
    nameFood: "Чикен Сладкий Чили",
    markerName: "new",
    composition: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
    price: 630,
  },
  {
    id: 6,
    category: "Пицца",
    image: "easypeasychicken.svg",
    nameFood: "Чикен Сладкий Чили",
    markerName: "new",
    composition: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
    price: 249,
  },
  {
    id: 7,
    category: "Пицца",
    image: "chicken.svg",
    nameFood: "Чикен Сладкий Чили",
    markerName: "new",
    composition: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
    price: 249,
  },
  {
    id: 8,
    category: "Пицца",
    image: "easepease.svg",
    nameFood: "Чикен Сладкий Чили",
    markerName: "new",
    composition: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
    price: 249,
  },
];
const arrayFilter = {
  Пицца: true,
  Суши: true,
  Напитки: false,
  Закуски: false,
  Комбо: false,
  Десерты: false,
  Соусы: false,
};

export const Main: React.FC = () => {
  const [modalActive, setModalActive] = React.useState(false);
  const [ModalPizzaActive, setModalPizzaActive] = React.useState(false);
  const [activeFood, setActiveFood] = React.useState('');
  return (
    <Wrapper>
      <List pt={"1.875rem"}>
        {foods.map((item: { img: string; name: any }) => {
          return <Item image={"assets/" + item.img} name={item.name} />;
        })}
      </List>
      <List ht={"21.438rem"} jc={"space-between"} wd={"77rem"} pt={"1.875rem"}>
        <Mid />
        <Cashback />
        <Mid />
        <Cashback />
      </List>
      <List
        bc={"white"}
        ht={"5rem"}
        mt={"3rem"}
        wd={"77rem"}
        at={"center"}
        br={"0.313rem"}
      >
        <Text ml={"2rem"}>Проверить адрес доставки</Text>
        <Input type="text" id="name" placeholder="Адрес" />
        <Button>Проверить</Button>
      </List>
      <FoodWrapper
        wd={"80.625rem"}
        ht={"67rem"}
        ml={"10.188rem"}
        dy={"flex"}
        fd={"column"}
        mt={"1.875rem"}
      >
        {Object.keys(arrayFilter)
          .filter((item) => FoodArray.map((t) => t.category).includes(item))
          .map((thing) => (
            <>
              <FoodWrapper
                wd={"77rem"}
                ht={"3rem"}
                dy={"flex"}
                jc={"space-between"}
                at={"center"}
              >
                <Text
                  wd={"8.125rem"}
                  ht={"4rem"}
                  sz={"40px"}
                  mr={"0"}
                  dy={"flex"}
                  at={"center"}
                >
                  {thing}
                </Text>
                {
                  <Button
                    wd={"7.875rem"}
                    ht={"2.5rem"}
                    bc={"white"}
                    dy={"flex"}
                    at={"center"}
                    onClick={() => setModalActive(true)}
                  >
                    <Filter />
                    <Text clr={"black"} wd={"4rem"} ht={"1rem"} ml={"0.2rem"}>
                      Фильтры
                    </Text>
                  </Button>
                }
              </FoodWrapper>
              <ListFood setModalPizzaActive={setModalPizzaActive} setActiveFood={setActiveFood} />
            </>
          ))}
      </FoodWrapper>
      <ModalFilter active={modalActive} setActive={setModalActive} />
      <ModalPizza
        active={ModalPizzaActive}
        setModalPizzaActive={setModalPizzaActive}
        food={"food"}
        activeFood={activeFood}
      />
    </Wrapper>
  );
};
