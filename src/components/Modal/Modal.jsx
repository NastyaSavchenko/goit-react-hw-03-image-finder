import PT from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import { ModalStyled, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = event => {
    console.log('c', event.currentTarget);
    console.log('t', target);
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={() => this.onBackdropClick()}>
        <ModalStyled>{this.props.children}</ModalStyled>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PT.func,
  children: PT.node,
};
