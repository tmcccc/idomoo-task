import React from "react";
import * as styles from "./styles";
import styled from "styled-components";
import { useField } from "formik";

const FormInput = ({ className, label, ...props }) => {
  const [field,meta] = useField(props);

  return (
    <div className={className}>
      <input className={`input ${meta.touched && meta.error && 'error'}`} {...{ ...props, ...field }} />
      <label className="label" htmlFor={props.id }>
        {label}
      </label>
    </div>
  );
};

export default styled(FormInput)`
  ${styles.Input}
`;
