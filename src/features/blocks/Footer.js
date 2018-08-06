import React from 'react';
import styled from 'styled-components';

import { Layout, Space } from '../../ui/atoms';

const Row = styled.div`
  :after {
    display: table;
    content: ' ';
    clear: both;
  }
  :before {
    display: table;
    content: ' ';
  }
`;

const StyledLink = styled.a`
  opacity: 0.1;
  padding-top: 15px;
  transition: all 0.2s ease;
  max-width: 100%;
  display: inline-block;
  :hover {
    opacity: 0.4;
  }
`;
const Logo = styled.img`
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  width: ${p => `${p.width}px`};
`;

const SectionA = styled.div`
  height: auto;
  padding: 0;
  background-color: transparent;
  width: 58.33333333%;
  position: relative;
  float: left;
  min-height: 1px;
`;

const SectionB = styled.div`
  height: auto;
  padding-right: 0;
  padding-bottom: 80px;
  padding-left: 0;
  position: relative;
  width: 41.66666667%;
  min-height: 1px;
`;

export const Footer = () => (
  <Layout display="block" background="#272a2d">
    <Row>
      <SectionA>
        <Layout justify="flex-start" align="flex-start">
          <Space padding="60px 60px 20px" margin="0">
            <StyledLink href="/">
              <Logo src="/assets/img/logo2.png" width={80} />
            </StyledLink>
          </Space>
        </Layout>
      </SectionA>
      <SectionB />
    </Row>
  </Layout>
);
