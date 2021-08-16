import React from "react";
import * as styles from "./styles";
import styled from "styled-components";
import { useField } from "formik";

const Select = ({ className, label, ...props }) => {
  const [field] = useField(props);

  return (
    <div className={className}>
      <label className="label">{label}</label>
      <select {...field} {...props} />
    </div>
  );
};

export default styled(Select)`
  ${styles.Select}
`;
