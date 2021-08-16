import React from "react";
import styled from "styled-components";
import * as styles from "./styles";
import { Form as FormContainer, Formik } from "formik";

const Form = ({ className, initialValues, validate, onSubmit, children }) => {
  return (
    <div className={className}>
      <Formik {...{ initialValues, validate, onSubmit }}>
        <FormContainer>
          {children}
          <button className="button" type="submit">
            Submit
          </button>
        </FormContainer>
      </Formik>
    </div>
  );
};

export default styled(Form)`
  ${styles.Form}
`;
