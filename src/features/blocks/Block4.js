import React from 'react';
import styled from 'styled-components';
import {Layout, View} from '../../ui/atoms';

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
  padding: 100px 0 0;
`;

const Heading = styled.p`
  font-size: 31px;
  line-height: 54px;
  letter-spacing: -0.01em;
  color: #525557;
  font-weight: 300;
  align-self: flex-start;
  margin-left: 20px;
  font-family: Nova, sans-serif;
`;

const Text = styled.p`
  margin-bottom: 60px;
  margin-right: 62px;
  font-family: Nova, sans-serif;
  color: rgba(39, 42, 45, 0.5);
  font-size: 19px;
  margin-left: 20px;
  line-height: 32px;
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
            <BigImage src="/assets/img/flower.jpg"/>
        </SectionA>
        <SectionB>
            <Layout justify="center" align="center" margin="0 40px 0 0" maxWidth={400}>
                <Heading>No fees, honestly.</Heading>
                <Text>
                    Petal is the first credit card with absolutely no fees. No overdraft
                    fee, late fee, international fee, annual fee, or any-other-kind-of
                    fee.
                </Text>
                <Heading>Easy access.</Heading>
                <Text>
                    Better technology means more credit and lower rates than competing
                    intro cards. Buy more of what you need without maxing out your card.
                </Text>
                <Heading>Seriously simple.</Heading>
                <Text>
                    Set reminders, automate payments, and never miss a bill. Don’t sweat,
                    we’ve got your back.
                </Text>
            </Layout>
        </SectionB>
    </View>
);
