import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
        background: ${({ theme }) => theme.colors.secondary};
        border:none;
        border-radius: ${({ theme }) => theme.borderRadius};
        color: ${({ theme }) => theme.colors.contrastText};
        cursor: pointer;
        font-weight: bold;
        height: 2.5rem;
        margin-top: 2rem;
        text-transform: uppercase;
        transition: background .3s;
        width: 100%;
    &:hover,
    &:focus
     {
      opacity: .8;
    }
    &:disabled {
        background: #d9d9d9;
        cursor: not-allowed;
        color:#707070;
    }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']),
  children: PropTypes.node.isRequired,
};

export default Button;
