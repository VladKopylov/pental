import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { View, Layout, Space, Text, Heading  } from "../../ui/atoms";

const SectionA = styled.div`
  height: 100vh;
  width: 58.33333333%;
  padding: 0;
`;
const SectionB = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 41.66666667%;
  padding: 0;
`;

const SpecialLink = styled(Link)`
  display: flex;
  width: 160px;
  margin-right: 62px;

  padding-right: 30px;
  padding-left: 30px;
  justify-content: center;
  background-color: #67ddff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  height: 60px;
  align-items: center;
  transition: all 0.2s ease;
  line-height: 24px;
  letter-spacing: 0.01em;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: white;
  font-family: Nova, sans-serif;
  :hover {
    background-color: #63cfee;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    transform: translate(0, -4px);
  }
`;

const BigImage = styled.div`
  background-image: ${p => `url("${p.src}")`};
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  display: block;
`;

export const Block1 = () => {
  return (
    <View>
      <SectionA>
        <BigImage src="/assets/img/balloon.jpg" />
      </SectionA>
      <SectionB>
        <Layout justify="center" align="center" margin="0 40px 0 0" maxWidth={400}>
          <Heading
          color="#525557"
          letterSpacing={-0.01}
          size={41}
          lineHeight={54}>
            This is Petal.<br /> A simple, no-fee<br /> credit card.
          </Heading>
          <Space margin="30px 62px 160px 20px">
          <Text size={19} lineHeight={27} color="rgba(39, 42, 45, 0.5)">
            High credit limits, great rates,<br /> no credit score required.
          </Text>
          </Space>
          <SpecialLink to="#">Get early access</SpecialLink>
        </Layout>
      </SectionB>
    </View>
  );
};


