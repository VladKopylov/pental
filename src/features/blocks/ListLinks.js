import React from 'react';
import styled from 'styled-components';
import {Layout, Image} from '../../ui/atoms';

const Container = styled.div`
        display: flex;
        padding: 40px 40px 35px;
        justify-content: center;
        align-items: center;
        background-color: rgba(204,251,255,.8);

`

export const ListLinks = () =>(
    <Container>
        <Layout widthPercent={100} flow="row" margin="0 auto" justify="center" align="center">
            <Image src="/assets/img/comp1.png" opacity={.6} marginRight={12} width={100}/>
            <Image src="/assets/img/comp2.png" opacity={.6} marginRight={12} width={142}/>
            <Image src="/assets/img/comp3.png" opacity={.6} marginRight={12} width={218}/>
            <Image src="/assets/img/comp4.png" opacity={.6} marginRight={12} width={116}/>
            <Image src="/assets/img/comp5.png" opacity={.6} marginRight={12} width={176}/>
            <Image src="/assets/img/comp6.png" opacity={.6} marginRight={12} width={121}/>
            <Image src="/assets/img/comp7.png" opacity={.6} marginRight={12} width={159}/>
        </Layout>
    </Container>
)