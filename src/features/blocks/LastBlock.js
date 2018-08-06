import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import { ModalForm } from '../../ui/organisms/ModalForm';
import { Layout, Heading, Space, Text, AnimatedButton } from '../../ui/atoms/';

const Container = styled.div`
  display: block;
  max-width: 750px;
  padding: 40px;
  margin: 0 auto;
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
};

Modal.setAppElement('#app');


export class LastBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <Layout padding={0} flow="column" justify="center" align="stretch">
        <Layout padding="120px 0" justify="center" align="center">
          <Container>
            <Space margin="0 0 40px 0">
              <Heading
                color="#525557"
                size={34}
                lineHeight={47}
                letterSpacing={-0.01}
                textAlign="center"
              >
                We're a different kind<br /> of credit card company.
              </Heading>
            </Space>
            <Space margin="0 0 40px 0">
              <Text
                color="rgba(39,42,45,.4)"
                size={18}
                lineHeight={34}
                textAlign="center"
              >
                We started Petal to give credit to people who deserve it – and
                made it honest, simple, and accessible. We cut through all the
                fine print, ditched the fees, and created a credit card that
                makes your life a little easier.
              </Text>
            </Space>
            <Space margin="0 0 40px 0">
              <Heading
                color="rgba(82,85,87,.8)"
                size={18}
                lineHeight={34}
                fontWeight={300}
                textAlign="center"
              >
                Petal is invitation-only. Sign up to get on the waitlist.
              </Heading>
            </Space>
            <Layout justify="center" align="center">
              <AnimatedButton background="#0bf" hoverBack="#0af" onClick={this.openModal}>
                Get early access
              </AnimatedButton>
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <ModalForm closeModal={this.closeModal} />
              </Modal>
            </Layout>
          </Container>
        </Layout>
      </Layout>
    );
  }
}
