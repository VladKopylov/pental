import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import {
  View,
  Layout,
  Space,
  Text,
  Heading,
  AnimatedButton
} from '../../ui/atoms';
import { ModalForm } from '../../ui/organisms/ModalForm';

const SectionA = styled.div`
  height: 100vh;
  width: 58.33333333%;
  padding: 0;
  border:0;
`;
const SectionB = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 41.66666667%;
  padding: 0;
`;


const BigImage = styled.div`
  background-image: ${p => `url("${p.src}")`};
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  display: block;
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

export class Block1 extends Component {
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

  closeModal  () {
    this.setState({ modalIsOpen: false });
  }

  render() {
    console.log(this.state.modalIsOpen)
    return (
      <View>
        <SectionA>
          <BigImage src="/assets/img/balloon.jpg" />
        </SectionA>
        <SectionB>
          <Layout
           
            margin="0 0 0 50px"
            maxWidth={400}
          >
            <Heading
              color="#525557"
              letterSpacing={-0.01}
              size={41}
              lineHeight={54}
            >
              This is Petal.<br /> A simple, no-fee<br /> credit card.
            </Heading>
            <Space margin="30px 62px 30px 0">
              <Text size={19} lineHeight={27} color="rgba(39, 42, 45, 0.5)">
                High credit limits, great rates,<br /> no credit score required.
              </Text>
            </Space>
            <AnimatedButton
              background="#0bf"
              hoverBack="#0af"
              onClick={this.openModal}
            >
              Get early access
            </AnimatedButton>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              
                <ModalForm closeModal={this.closeModal}/>
      
            </Modal>

          </Layout>

        </SectionB>
      </View>
    );
  }
}
