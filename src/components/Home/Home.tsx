import React from "react";
import styled from "styled-components";
import { ReactComponent as Location } from "../../assets/location.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Provider } from "react-redux";
import {store} from '../../redux/index'

export const Home: React.FC = (): any => {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
};
