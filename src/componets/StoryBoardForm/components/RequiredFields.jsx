import React from "react";
import * as styles from "./styles";
import styled from "styled-components";
import Select from "../../../commonComponents/Form/components/Select/Select.jsx";

const RequiredFields = ({ className, requiredFields }) => {
  return (
    <div className={className}>
      {Object.values(requiredFields).map(({ label, name, options }) => (
        <Select {...{ label, name, key: name }}>
          {options.map(({ value, name, selected }) => (
            <option {...{ value, key: value, selected }}>{name} </option>
          ))}
        </Select>
      ))}
    </div>
  );
};

export default styled(RequiredFields)`
  ${styles.RequiredFields}
`;
