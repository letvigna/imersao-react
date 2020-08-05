import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--darkBrown);
  color: var(--orange);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
