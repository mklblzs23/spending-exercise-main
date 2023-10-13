import React from 'react';
import Header from './Header';
import { MainContainer } from '../styles';

const Layout = ({ children, title }) => (
  <>
    <Header title={title} />
    <MainContainer>{children}</MainContainer>
  </>
);

export default Layout;
