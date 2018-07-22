import React from "react";
import styled from "styled-components";
import { View, Layout, Space, Text, Heading  } from "../../ui/atoms";

const SectionA = styled.div`
  height: 100vh;
  width: 58.33333333%;
  padding: 0;
`;
const BigImage = styled.div`
  background-image: ${p => `url("${p.src}")`};
  background-position: 20% 50%;
  background-size: cover;
  background-repeat: no-repeat;

  height: 100%;
  width: 80%;
  max-width: 900px;
`;

const BlockImage = styled.div`
  background-image: ${p => `url("${p.src}")`};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionB = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 41.66666667%;
  padding: 0;
`;


export const Block3 = () => (
  <View>
    <SectionA>
      <BlockImage src="/assets/img/background-image1.jpg">
        <BigImage src="/assets/img/mobile.png" />
      </BlockImage>
    </SectionA>
    <SectionB>
      <Layout
        justify="center"
        align="center"
        margin="0 40px 0 0"
        maxWidth={400}
      >
        <Layout margin="50px 0 0 0">
          <Heading
            color="#525557"
            letterSpacing={-0.01}
            size={31}
            lineHeight={40}
          >
            You think in dollars, not interest rates. So do we.
          </Heading>
        </Layout>
        <Space margin="30px 20px 45px 0">
          <Text size={22} lineHeight={35} color="rgba(39, 42, 45, 0.5)">
            Petal helps you track what you spend and what you can afford. Pay
            your full bill each month straight from your bank account and never
            pay a dime in interest.
          </Text>
        </Space>
        <Space margin="30px 20px 45px 0">
          <Text size={22} lineHeight={35} color="rgba(39, 42, 45, 0.5)">
            Prefer to pay over time? Petal tells you exactly what it will cost
            in dollars, so you can make the payment that’s right for you.
          </Text>
        </Space>
      </Layout>
    </SectionB>
  </View>
);
