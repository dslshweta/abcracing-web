import { useState } from 'react';

const useForm = ({
  initialValues, fields, handleSubmit: _handleSubmit, validate,
}) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [isFormDirty, setFormDirty] = useState(false);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    setFormDirty(true);
    const validationErrors = validate({ values }) || {};
    if (!Object.keys(validationErrors).length) {
      _handleSubmit(values);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (event) => {
    const { target: { name } } = event;
    event.persist();
    const updatedValues = fields[name].handleChange(event, values);
    setValues(updatedValues);
    if (isFormDirty) {
      const validationErrors = validate({ values: updatedValues }) || {};
      setErrors(validationErrors);
    }
  };

  const handleBlur = () => {
    if (isFormDirty) {
      const validationErrors = validate({ values }) || {};
      setErrors(validationErrors);
    }
  };

  return {
    values,
    setValues,
    reset: () => setValues(initialValues),
    isFormDirty,
    errors,
    events: {
      onSubmit: handleSubmit,
      onBlur: handleBlur,
      onChange: handleChange,
    },
  };
};

export default useForm;
