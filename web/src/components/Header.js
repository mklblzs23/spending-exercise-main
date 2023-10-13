import React from 'react';
import { HeaderStyles, FlexWrapper } from '../styles';


export default function Header(props) {
  const { title } = props;

  return (
    <>
      <HeaderStyles>
        <FlexWrapper>
          <h1>{title}</h1>
        </FlexWrapper>
      </HeaderStyles>
    </>
  );
}
