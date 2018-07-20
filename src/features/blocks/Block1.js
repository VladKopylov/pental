import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Wrapper, View} from '../../ui/atoms';

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

const Heading = styled.p`
  font-size: 41px;
  line-height: 54px;
  letter-spacing: -0.01em;
  color: #525557;
  font-weight: 300;
  font-family: Nova, sans-serif;
`;

const Text = styled.p`
  margin-bottom: 160px;
  margin-top: 30px;
  margin-right: 62px;
  font-family: Nova, sans-serif;
  color: rgba(39, 42, 45, 0.5);
  font-size: 19px;
  margin-left: 20px;
  line-height: 27px;
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

const Block1 = () => {
  return (
    <View>
      <SectionA>
        <BigImage src="/assets/img/balloon.jpg" />
      </SectionA>
      <SectionB>
        <Wrapper>
          <Heading>
            This is Petal.<br /> A simple, no-fee<br /> credit card.
          </Heading>
          <Text>
            High credit limits, great rates,<br /> no credit score required.
          </Text>
          <SpecialLink to="#">Get early access</SpecialLink>
        </Wrapper>
      </SectionB>
    </View>
  );
};

export default Block1;
