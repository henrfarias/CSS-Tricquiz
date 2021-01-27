import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
        background: rgba(255,255,255,.01);
        border: 1px solid ${({ theme }) => theme.colors.contrastText};
        border-radius: ${({ theme }) => theme.borderRadius};
        color: ${({ theme }) => theme.colors.contrastText};
        font-weight: 700;
        height: 2.5rem;
        text-align: center;
        width: 100%;
    &:focus {
        outline: 0;
    }
`;

function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        onChange={onChange}
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Input;
