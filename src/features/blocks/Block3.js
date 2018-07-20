import React from 'react';
import styled from 'styled-components';
import {Wrapper, View} from '../../ui/atoms';

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

const Heading = styled.p`
  font-size: 31px;
  line-height: 40px;
  margin-top: 50px;
  letter-spacing: -0.01em;
  color: #525557;
  font-weight: 300;
  font-family: Nova, sans-serif;
`;
const Text = styled.p`
  margin-bottom: 45px;
  margin-top: 30px;
  margin-right: 20px;
  font-family: Nova, sans-serif;
  color: rgba(39, 42, 45, 0.5);
  font-size: 22px;
  line-height: 35px;
`;

export const Block3 = () => (
    <View>
        <SectionA>
            <BlockImage src="/assets/img/background-image1.jpg">
                <BigImage src="/assets/img/mobile.png"/>
            </BlockImage>
        </SectionA>
        <SectionB>
            <Wrapper>
                <Layout>
                    <Heading>You think in dollars, not interest rates. So do we.</Heading>
                </Layout>
                <Text>
                    Petal helps you track what you spend and what you can afford. Pay your
                    full bill each month straight from your bank account and never pay a
                    dime in interest.
                </Text>
                <Text>
                    Prefer to pay over time? Petal tells you exactly what it will cost in
                    dollars, so you can make the payment that’s right for you.
                </Text>
            </Wrapper>
        </SectionB>
    </View>
);
