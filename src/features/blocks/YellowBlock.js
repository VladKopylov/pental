import React from 'react';
import styled from 'styled-components';
import { Layout, Heading, Image } from '../../ui/atoms/';

const Container = styled.div`
  width: 100%;
  display: block;
  padding-top: 100px;
  padding-bottom: 30px;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: flex-start;
  align-content: flex-start;
  background-color: hsla(56, 95%, 84%, 0.7);
`;

const DisclaimerColumn = styled.div`
  display: flex;
  width: 250px;
  height: 118px;
  margin: 0 20px;
  padding: 32px 20px 46px;
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid rgba(82, 85, 87, 0.08);
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  :hover {
    margin-top: 4px;
    border-bottom-width: 2px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  }
`;

const Head = styled.div`
  max-width: 320px;
  margin-top: 0;
  text-align: center;
  margin-bottom: 0;
  line-height: 36px;
  flex: 1;
  font-family: Nova, sans-serif;
  font-weight: 600;
  color: rgba(39, 42, 45, 0.3);
  font-size: 16px;
`;
const Text = styled.h1`
  margin-top: 10px;
  flex: 1;
  color: rgba(39, 42, 45, 0.7);
  font-size: 24px;
  letter-spacing: -0.01em;
  font-weight: 300;
  font-family: Nova, sans-serif;
  text-align: center;
  margin-bottom: 0;
  line-height: 36px;
`;

const BottomText = styled.p`
    color: rgba(39,42,45,.4);
    font-size: 18px;
    line-height: 34px;
    letter-spacing: 0;
    font-family: Nova,sans-serif;
    margin-bottom: 40px;
    text-align: center;

`

export const YellowBlock = () => (
  <Container>
    <Layout flow="row" justify="center" align="center" margin="0 0 80px 0">
      <Heading color="#525557" size={30} lineHeight={47} letterSpacing={0}>
        Priced just right
      </Heading>
      <Image
        src="/assets/img/price.png"
        width={32}
        opacity={0.8}
        marginLeft={10}
      />
    </Layout>
    <Layout
      height={206}
      margin="0 auto"
      flow="row"
      justify="center"
      align="flex-start"
    >
      <DisclaimerColumn>
        <div>
          <Head>Credit limit</Head>
          <Text>$500-10,000</Text>
        </div>
      </DisclaimerColumn>
      <DisclaimerColumn>
        <div>
          <Head>APR</Head>
          <Text>14.74 - 25.74%</Text>
        </div>
      </DisclaimerColumn>
      <DisclaimerColumn>
        <div>
          <Head>Fess</Head>
          <Text>None</Text>
        </div>
      </DisclaimerColumn>
      
    </Layout>
    <Layout flow="row" padding="54px 40px 0" justify="center" align="center" margin="0 auto">
        <BottomText>FYI, APRs are variable based on the U.S. Prime Rate accurate as of 6/19/2018.</BottomText>
      </Layout>
  </Container>
);
