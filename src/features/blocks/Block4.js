import React from 'react';
import styled from 'styled-components';
import { View, Layout, Space, Text, Heading, Image } from '../../ui/atoms';

const SectionA = styled.div`
  height: 100vh;
  width: 58.33333333%;
  padding: 0;
`;
const Arrow = styled.a`
  opacity: 0.2;
  :hover {
    opacity: 0.3;
  }
`;
const SectionB = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 41.66666667%;
  padding: 100px 0 0;
`;

const BigImage = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: ${p => `url("${p.src}")`};
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  display: block;
`;

export const Block4 = () => (
  <View>
    <SectionA>
      <BigImage src="/assets/img/flower.jpg" />
    </SectionA>
    <SectionB>
      <Layout
        width={400}
      >
        <Space>
          <Heading
            color="#525557"
            letterSpacing={-0.01}
            size={26}
            lineHeight={40}
          >
            No fees, honestly.
          </Heading>
        </Space>
        <Space margin="15px 20px 0 0">
          <Text size={18} lineHeight={35} color="rgba(39, 42, 45, 0.5)">
            Petal is the first credit card with absolutely no fees. No overdraft
            fee, late fee, international fee, annual fee, or any-other-kind-of
            fee.
          </Text>
        </Space>
        <Space margin="50px 0 0 0">
          <Heading
            color="#525557"
            letterSpacing={-0.01}
            size={26}
            lineHeight={40}
          >
            Easy access.
          </Heading>
        </Space>
        <Space margin="15px 20px 0 0">
          <Text size={18} lineHeight={35} color="rgba(39, 42, 45, 0.5)">
            Better technology means more credit and lower rates than competing
            intro cards. Buy more of what you need without maxing out your card.
          </Text>
        </Space>
        <Space margin="50px 0 0 0">
          <Heading
            color="#525557"
            letterSpacing={-0.01}
            size={26}
            lineHeight={40}
          >
            Seriously simple.
          </Heading>
        </Space>
        <Space margin="15px 20px 0 0">
          <Text size={18} lineHeight={35} color="rgba(39, 42, 45, 0.5)">
            Set reminders, automate payments, and never miss a bill. Don’t
            sweat, we’ve got your back.
          </Text>
        </Space>
        <Space margin="50px auto">
        <Arrow href="#">
          <Image src="/assets/img/arrow.png" width={50} />
        </Arrow>
        </Space>
      </Layout>
    </SectionB>
  </View>
);
