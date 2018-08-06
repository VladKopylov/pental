import React from 'react';
import styled from 'styled-components';
import { View, Layout, Space, Button, Heading } from '../atoms';
import { InputField } from '../molecules';

const X = styled.span`
  font-size: 28px;
  color: #d3d3d3;
  :hover {
    color: #000000;
    cursor: pointer;
  }
`;

export const ModalForm = ({ closeModal }) => (
  <View>
    <Layout flow="column" justify="center" align="center" width={500}>
      <Layout flow="column" width={500} align="flex-end">
        <X onClick={() => closeModal()}>×</X>
      </Layout>
      <Heading size={18} fontWeight="400">
        Get early access to Petal
      </Heading>
      <Layout width={420}>
        <Space margin="50px 0 15px 0">
          <InputField placeholder="First Name *" type="text" />
        </Space>
        <Space margin="0">
          <InputField placeholder="Email Address *" type="text" />
        </Space>
        <Space margin="40px 0">
          <Layout flow="column" justify="center" align="center" width={420}>
            <Button background="#0bf" hoverBack="#0af">
              Add me to the list
            </Button>
          </Layout>
        </Space>
      </Layout>
    </Layout>
  </View>
);
