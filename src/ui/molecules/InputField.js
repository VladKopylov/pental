import React from 'react';
import styled from 'styled-components';
import { Input } from '../atoms';

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 0 solid black;
`;

export const InputField = ({ placeholder }) => (
  <FieldWrapper>
    <Input placeholder={placeholder} autoComplete="off" />
  </FieldWrapper>
);
