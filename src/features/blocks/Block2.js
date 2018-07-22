import React from 'react';
import styled from 'styled-components';
import {Layout} from '../../ui/atoms';

const View = styled.div`
  height: auto;
  display: flex;
  position: relative;
`;

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

const Heading = styled.p`
  font-size: 31px;
  line-height: 54px;
  margin-top: 50px;
  letter-spacing: -0.01em;
  color: #525557;
  font-weight: 300;
  font-family: Nova, sans-serif;
`;
const Text = styled.p`
  margin-bottom: 60px;
  margin-top: 30px;
  margin-right: 20px;
  font-family: Nova, sans-serif;
  color: rgba(39, 42, 45, 0.5);
  font-size: 22px;
  line-height: 35px;
`;

export const Block2 = () => (
  <View>
    <SectionA>
      <BlockImage src="/assets/img/background-image.jpg">
        <BigImage src="/assets/img/picture.png" />
      </BlockImage>
    </SectionA>
    <SectionB>
      <Layout justify="center" align="center" margin="0 40px 0 0" maxWidth={400}>
        <Heading>Get credit, without a credit score.</Heading>
        <Text>
          Petal is not like other cards. We look at the money you make and the
          bills you already pay to help you qualify instantly. That means you
          can get a great credit card and start building your credit score, even
          if Petal is your first credit card. It’s that easy.
        </Text>
      </Layout>
    </SectionB>
  </View>
);
