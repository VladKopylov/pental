import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/atoms/Button';
import { ModalForm } from '../../ui/organisms/ModalForm';
import Modal from 'react-modal';


const StyledLink = styled(Link)`
  margin: 0;
  padding: 0;
  margin-right: 20px;
  text-decoration: none;
  font-size: 15px;
  letter-spacing: 0.01em;
  font-family: Nova, sans-serif;
  color: rgba(39, 42, 45, 0.4);
  line-height: 26px;
  font-weight: 600;
`;

const View = styled.div`
  display: flex;
  align-items: center;
`;


const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(15, 15, 15, 0.75)'
  },
  content: {
    width: '500px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    borderRadius: '15px'
  }
}

Modal.setAppElement('#app');

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }
  
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal=()=> {
    this.setState({ modalIsOpen: false });
  }
 
  render() {
    return (
      <View>
        <StyledLink to="#">Why Petal?</StyledLink>
        <StyledLink to="#">FAQ</StyledLink>
        <StyledLink to="#">About us</StyledLink>
        <Button background="#0bf" hoverBack="#0af" onClick={this.openModal}>
          Get early access
        </Button>
        <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <ModalForm closeModal={this.closeModal} />
          </Modal>
      </View>
    );
  }
}

export default NavItem;
