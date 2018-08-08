import React from 'react';
import styled from 'styled-components';

import { Layout, Space, Image } from '../../ui/atoms';

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
  float: left;
`;

const SectionLinks = styled.div`
  width: auto;
  height: auto;
  padding-right: 30px;
  padding-left: 60px;
  padding-top: 60px;
  background-color: transparent;
`;

const List = styled.ul`
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
`;
const SmallList = styled.div`
  display: inline-block;
  max-width: 200px;
  margin-right: 0;
  padding-right: 0;
  padding-left: 60px;
  padding-top: 60px;
  background-color: transparent;
`;
const ListItem = styled.li`
  margin-bottom: ${p => `${p.marginBottom}px`};
  padding-bottom: ${p => `${p.paddingBottom}px`};
`;
const Link = styled.a`
  margin-bottom: 10px;
  padding-bottom: 0;
  transition: all 0.2s ease;
  font-family: Nova, sans-serif;
  color: hsla(0, 0%, 100%, 0.5);
  font-size: 15px;
  line-height: 22px;
  font-weight: 300;
  letter-spacing: 0.03em;
  text-decoration: none;
  :hover {
    color: hsla(0, 0%, 100%, 0.7);
    outline: 0;
  }
`;

const SocialLinksSection = styled.div`
  padding: 30px 60px;
`;
const SocialLink = styled.a`
  margin-right: 10px;
  opacity: 0.5;
  transition: all 0.2s ease;
  max-width: 100%;
  display: inline-block;
  :hover {
    opacity: 0.7;
    outline: 0;
  }
`;
const MiniLink = styled.a`
      transition: all .2s ease;
      color: hsla(0,0%,100%,.5);
      text-decoration: none;
      font-size: 10px;
      line-height: 16px
      letter-spacing: .05em;
      font-family: Nova,sans-serif;
      font-weight: 300;

`;

const FooterSmallText = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 60px;
  font-family: Nova, sans-serif;
  color: hsla(0, 0%, 100%, 0.2);
  font-size: 12px;
  line-height: 16px;
  font-weight: 300;
  letter-spacing: 0.05em;
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
      <SectionB>
        <Layout padding={0} justify="flex-start" align="flex-start" flow="row">
          <SectionLinks>
            <List>
              <ListItem marginBottom={0} paddingBottom={10}>
                <Link href="#">Log in</Link>
              </ListItem>
              <ListItem marginBottom={0} paddingBottom={10}>
                <Link href="#">Why petal?</Link>
              </ListItem>
              <ListItem paddingBottom={10}>
                <Link href="#">About us</Link>
              </ListItem>
              <ListItem paddingBottom={10} />
            </List>
          </SectionLinks>
          <SectionLinks>
            <List>
              <ListItem paddingBottom={10}>
                <Link href="#">FAQ</Link>
              </ListItem>
              <ListItem paddingBottom={10}>
                <Link href="#">Contact us</Link>
              </ListItem>
              <ListItem paddingBottom={10}>
                <Link href="#">Careers</Link>
              </ListItem>
            </List>
          </SectionLinks>
          <SmallList>
            <List>
              <ListItem paddingBottom={4.5}>
                <MiniLink href="#">Privacy Policy</MiniLink>
              </ListItem>
              <ListItem paddingBottom={4.5}>
                <MiniLink href="#">Terms of use</MiniLink>
              </ListItem>
              <ListItem paddingBottom={4}>
                <MiniLink href="#">Cardholder Agreement</MiniLink>
              </ListItem>
              <ListItem paddingBottom={0}>
                <MiniLink href="#">Made with ♥ in NYC</MiniLink>
              </ListItem>
            </List>
          </SmallList>
        </Layout>
        <div>
          <SocialLinksSection>
            <SocialLink>
              <Image src="/assets/img/twitter.png" width={32} />
            </SocialLink>
            <SocialLink>
              <Image src="/assets/img/insta.png" width={32} />
            </SocialLink>
            <SocialLink>
              <Image src="/assets/img/facebook.png" width={32} />
            </SocialLink>
          </SocialLinksSection>
          <Layout padding="6px 0 0 60px" align="flex-start">
            <Image src="/assets/img/visa.png" width={80} opacity={0.15} />
          </Layout>
          <Layout margin="30px 0 0 0" padding={0}>
            <FooterSmallText>
              © 2018 Petal Card, Inc.<br />
              The Petal credit card is issued by WebBank, Member FDIC.{' '}
            </FooterSmallText>
          </Layout>
        </div>
      </SectionB>
    </Row>
  </Layout>
);
