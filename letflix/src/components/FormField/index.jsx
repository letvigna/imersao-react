import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;

  return (
    <div>
      <label htmlFor={fieldId}>
        {label}
        :
      </label>
      <input
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
};

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

export default FormField;
