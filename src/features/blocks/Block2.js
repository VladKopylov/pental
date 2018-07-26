import React from 'react';
import styled from 'styled-components';
import { View, Layout, Space, Text, Heading } from '../../ui/atoms';

const SectionA = styled.div`
  height: 100vh;
  width: 58.33333333%;
  padding: 0;
`;
const BigImage = styled.div`
  background-image: ${p => `url("${p.src}")`};
  background-position: -500% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 80%;
  width: 80%;
  display: block;
`;

const BlockImage = styled.div`
  background-image: ${p => `url("${p.src}")`};
  height: 100%;
`;

const SectionB = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 41.66666667%;
  padding: 0;
`;

export const Block2 = () => (
  <View>
    <SectionA>
      <BlockImage src="/assets/img/background-image.jpg">
        <BigImage src="/assets/img/picture.png" />
      </BlockImage>
    </SectionA>
    <SectionB>
      <Layout
        justify="center"
        align="center"
        width={400}
      >
        <Space margin="50px 0 0 0">
          <Heading
            color="#525557"
            letterSpacing={-0.01}
            size={31}
            lineHeight={40}
          >
            Get credit, without a credit score.
          </Heading>
        </Space>
        <Space margin="30px 20px 60px 0">
          <Text size={18} lineHeight={35} color="rgba(39, 42, 45, 0.5)">
            Petal is not like other cards. We look at the money you make and the
            bills you already pay to help you qualify instantly. That means you
            can get a great credit card and start building your credit score,
            even if Petal is your first credit card. It’s that easy.
          </Text>
        </Space>
      </Layout>
    </SectionB>
  </View>
);
