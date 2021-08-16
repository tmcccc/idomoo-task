import React from 'react'
import * as constants from './constants'
import * as styles from './styles'
import styled from "styled-components";

export default styled(({className}) => <div className={className}> {constants.DATA} </div>)`${styles.Error}`
