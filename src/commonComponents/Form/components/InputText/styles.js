import { css } from "styled-components";

export const Input = css`
  position: relative;

  > .input {
    margin-bottom: 2.5em;
    border: none;
    border-bottom: 1px solid #c5c5c5;
    font-size: 15px;
    padding-bottom: 1px;
    line-height: 21px;
    outline: none;
    width: 100%;

    :focus {
      border-bottom: 1px solid black;
    }
    :not(:placeholder-shown) + .label {
      display: block;
      position: absolute;
      top: -15px;
      font-size: 12px;
    }
  }

  .label {
    display: none;
  }
    >.error{
      border-bottom:1px solid red;
      }
      
`;
