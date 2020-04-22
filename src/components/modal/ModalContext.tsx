import React, { createContext, Component } from 'react';

const ModalContext = createContext({
  component: null,
  props: {},
  showModal: (component: Component, props = {}) => {},
  hideModal: () => {}
});

export default ModalContext;