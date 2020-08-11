import React from 'react';
import PropTypes from 'prop-types';
/* import styled from 'styled-components';

const Input = styled.input`

`; */

function FormField({
  label, type, name, value, onChange, as,
}) {
  const fieldId = `id_${name}`;
  const Tag = as;

  return (
    <div>
      <label htmlFor={fieldId}>
        {label}
        :
      </label>
      <Tag
        id={fieldId}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  as: PropTypes.string,
};

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  as: 'input',
};

export default FormField;
