import React from 'react';
import { HeaderStyles, FlexWrapper } from '../styles';

type HeaderProp = {
  title: string,
};

export default function Header(props: HeaderProp) {
  const { title } = props;

  return (
    <HeaderStyles>
      <FlexWrapper>
        <h1>{title}</h1>
      </FlexWrapper>
    </HeaderStyles>
  );
}
