import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {Image} from '../../ui/atoms/Image';
import NavItem from './NavItem';

const View = styled.div`
    display:flex;
    border-bottom:1px solid rgba(51,51,51,.08);
    background-color: #fff;
    z-index: 9999;
    justify-content: space-between;
    padding: 20px 20px 20px 60px;
    align-items:center;
`

class Navbar extends Component {
    render() {
        return (
            <View>
                <Link to='/'>
                    <Image src='/assets/img/logo.png' width={80}/>
                </Link>
                <div>
                    <NavItem/>
                </div>
            </View>
        );
    }
}

export default Navbar;