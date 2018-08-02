import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Image } from '../../ui/atoms/Image';
import NavItem from './NavItem';

const View = styled.div`
  position: fixed;
  display: flex;
  width: 94%;
  border-bottom: 1px solid rgba(51, 51, 51, 0.08);
  background-color: #fff;
  z-index: 9999;
  justify-content: space-between;
  padding: 20px 20px 20px 60px;
  align-items: center;
`;


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        transformStyle: 'preserve-3d',
        transition: 'opacity 500ms,transform 500ms',
        opacity: 0
      },
    };
  }


  componentDidMount() {
    document.addEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    if (window.scrollY > 480) {
      this.setState(prevState => ({
        style: {
          ...prevState.style,
          opacity: 1,
          transition: 'opacity 200ms,transform 500ms',
          transform: 'translateX(0px) translateY(0px) translateZ(0px)'
        }
      }));
    } else if (window.scrollY < 480) {
      this.setState(prevState => ({
        style: {
          ...prevState.style,
          opacity: 0,
          transform: 'translateX(0px) translateY(-100%) translateZ(0px)'
        }
      }));
    }
  };
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    return (
        <View style={this.state.style}>
          <Link to="/">
            <Image src="/assets/img/logo.png" width={80} />
          </Link>
          <div>
            <NavItem openModal={this.openModal} />
          </div>
          
        </View>
    );
  }
}

export default Navbar;
