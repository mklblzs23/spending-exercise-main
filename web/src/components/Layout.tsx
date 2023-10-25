import React, { ReactNode } from 'react';
import Header from './Header';
import { MainContainer } from '../styles';

type LayourProps = {
  children: ReactNode,
  title: string,
};

const Layout = ({ children, title }: LayourProps) => (
  <>
    <Header title={title} />
    <MainContainer>{children}</MainContainer>
  </>
);

export default Layout;
