import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 8.438rem;
  height: 6.5rem;
  border-radius: 1rem;
  background-color: white;
  margin-right: 1.35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    border: 3px solid rgba(157, 0, 255, 0.9);
  }
`;

export const Item = ({ image, name }: any) => {
  return (
    <Container>
      <img src={image} />
      <p>{name}</p>
    </Container>
  );
};
