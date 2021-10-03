import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title='Model S'
        description='Order Online for Touchless Delivery'
        backgroundimg='model-s.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory '
      />
      <Section
        title='Model Y'
        description='Order Online for Touchless Delivery'
        backgroundimg='model-y.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory '
      />
      <Section
        title='Model 3'
        description='Order Online for Touchless Delivery'
        backgroundimg='model-3.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory '
      />
      <Section
        title='Model x'
        description='Order Online for Touchless Delivery'
        backgroundimg='model-x.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory '
      />
      <Section
        title='Lowest Cost Solar Panels in America'
        description='Money-back guarantee'
        backgroundimg='solar-panel.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more '
      />
      <Section
        title='Solar for New Roofs'
        description='Solar Roof Costs Less Than a New Roof'
        backgroundimg='solar-roof.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more '
      />
      <Section
        title='Accessories'
        description=''
        backgroundimg='accessories.jpg'
        leftBtnText='Shop now'
        rightBtnText=''
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
