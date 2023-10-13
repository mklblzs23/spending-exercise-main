import styled from 'styled-components';

export const FiltersContainer = styled.div`
  display: flex;
  padding: 0;
  gap: 1rem;
  margin-left: auto;

@media (max-width: 756px) {
  margin-top: 1rem;
}
`;

export const FilterButton = styled.button`
  border: none;
  font-family: var(--font-family);
  font-size: 20px;
  cursor: pointer;
  background-color: ${(p) =>
    p.name === p.selected ? '#d1e7fb' : 'var(--color-white)'};
  color: ${(p) =>
    p.name === p.selected ? 'var(--color-blue)' : 'inherit'};
  font-weight: ${(p) => (p.name === p.selected ? '700' : '400')};
  background-color: ${(props) => (props.isSelected && 'blue')};
  border-radius: 8px;
  padding: 4px 12px;
  /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
`;

export const HeaderStyles = styled.header`
  margin-bottom: 4rem;
  font-family: 'Montserrat', 'Poppins', var(--font-family);

  ul {
    list-style-type: none;
    display: flex;
    gap: 5rem;
    text-transform: uppercase;
  }

  li {
    font-weight: 500;
    border-bottom: 2px solid transparent;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    line-height: 1;
    padding: 12px 16px 8px;
    border-radius: 8px;
  }

  @media (max-width: 756px) {
    margin-bottom: 2rem;
  }
`;

export const FlexWrapper = styled.div`
  max-width: 800px;
  margin: 1rem auto;
  display: flex;
  align-items: center;

  @media (max-width: 756px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const MainContainer = styled.main`
  max-width: 800px;
  margin: 1rem auto;
  position: relative;
`;

export const LdsDualRing = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &::after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid var(--color-blue);
    border-color: var(--color-blue) transparent var(--color-blue) transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderStyles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
