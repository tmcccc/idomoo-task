import { css } from "styled-components";

export const Select = css`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  > .label {
    font-size: 14px;
    margin-bottom: 0.2em;
    margin-left:0.1em
  }

  > select {
    font-size: 14px;
    line-height: 1.3;
    padding: 0.6em 1.4em 0.5em 0.8em;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0.7em;
    outline: none;
      :hover{
        background-color:	#909090;
        color:#ffffff
      }
      
    > option {
      border-radius: 0.5em;
    }
  }
`;
