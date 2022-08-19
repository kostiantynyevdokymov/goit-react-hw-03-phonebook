import React from 'react';
import PropTypes from 'prop-types';
import { MainPage } from './Main.styled';

const Main = ({ title, children }) => (
  <MainPage>
    <h1>{title}</h1>
    {children}
  </MainPage>
);

export default Main;

Main.propTypes = {
  title: PropTypes.string.isRequired,
};
