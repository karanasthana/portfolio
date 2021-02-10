import styled, { css } from 'styled-components';
import {} from 'constants';

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #212529;
  color: #212529;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props => {
      return (
        props.primary &&
        css`
        background: #178be7;
        color: white;
        border: 2px solid #178be7;
        `
      );
  }
};
`