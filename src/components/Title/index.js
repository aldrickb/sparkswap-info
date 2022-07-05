import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Flex } from 'rebass'
import Link from '../Link'
import { RowFixed } from '../Row'
import Wordmark from '../../assets/SparkSwap_Workmark.png'

const TitleWrapper = styled.div`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  z-index: 10;
`

const UniIcon = styled.a`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

export default function Title() {
  const history = useHistory()

  return (
    <TitleWrapper onClick={() => history.push('/')}>
      <Flex alignItems="center">
        <RowFixed>
          <UniIcon id="link" href='https://sparkswap.finance'>
            <img width={'108px'} style={{ marginLeft: '0px', marginTop: '0px', marginBottom: '0px' }} src={Wordmark} alt="logo" />
          </UniIcon>
        </RowFixed>
      </Flex>
    </TitleWrapper>
  )
}
