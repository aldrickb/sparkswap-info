import React, { useState } from 'react'
import styled from 'styled-components'
import { AutoColumn } from '../Column'
import Title from '../Title'
import Powered from './Desktop.svg'
import { BasicLink } from '../Link'
import { useMedia } from 'react-use'
import { transparentize } from 'polished'
import { TYPE } from '../../Theme'
import { withRouter } from 'react-router-dom'
import { TrendingUp, List, PieChart, Disc, Home, Twitter, Menu } from 'react-feather'
import Link from '../Link'
import { useSessionStart } from '../../contexts/Application'
import { useDarkModeManager } from '../../contexts/LocalStorage'
import Toggle from '../Toggle'
import { AutoRow } from '../Row'

const Wrapper = styled.div`
  height: ${({ isMobile }) => (isMobile ? 'initial' : '100vh')};
  background-color: ${({ theme }) => transparentize(0.4, theme.bg1)};
  color: ${({ theme }) => theme.text1};
  padding: 0.5rem 0.5rem 0.5rem 0.75rem;
  position: sticky;
  top: 0px;
  z-index: 9999;
  box-sizing: border-box;
  /* background-color: #1b1c22; */
  // background: linear-gradient(193.68deg, #1b1c22 0.68%, #000000 100.48%);
  background: #111122;
  color: ${({ theme }) => theme.bg2};

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    position: relative;
  }

  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`

const Option = styled.div`
  font-weight: 500;
  font-size: 14px;
  opacity: ${({ activeText }) => (activeText ? 1 : 0.6)};
  color: ${({ theme }) => theme.white};
  display: flex;
  :hover {
    opacity: 1;
  }
`

const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`

const HeaderText = styled.div`
  margin-right: 0.75rem;
  font-size: 0.825rem;
  font-weight: 500;
  display: inline-box;
  display: -webkit-inline-box;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
  a {
    color: ${({ theme }) => theme.white};
  }
`

const MenuLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`

const Polling = styled.div`
  // position: fixed;
  display: flex;
  // left: 0;
  // bottom: 0;
  padding: 1rem 0px 1rem 0px;
  color: white;
  opacity: 0.4;
  transition: opacity 0.25s ease;
  :hover {
    opacity: 1;
  }
`
const PollingDot = styled.div`
  width: 8px;
  height: 8px;
  min-height: 8px;
  min-width: 8px;
  margin-right: 0.5rem;
  margin-top: 3px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.green1};
`

const PoweredLogo = () => (
  <div style={{ display: 'flex', marginLeft: '1rem', width: '60%' }}>
    <img src={Powered} alt="poweredLogo" />
  </div>
)

function SideNav({ history }) {
  const below1080 = useMedia('(max-width: 1080px)')
  const below500 = useMedia('(max-width: 500px)')
  const below1180 = useMedia('(max-width: 1180px)')
  const below1025 = useMedia('(max-width: 1025px)')
  const above500 = useMedia('(min-width: 500px)')
  const seconds = useSessionStart()

  const [isDark, toggleDarkMode] = useDarkModeManager()
  const [show, setShow] = useState(false)

  return (
    <Wrapper isMobile={below1080}>
      {!below1080 ? (
        <DesktopWrapper>
          <AutoColumn gap="1rem" style={{ marginLeft: '.75rem', marginTop: '1.5rem' }}>
            <Title />
            {!below1080 && (
              <AutoColumn gap="1.25rem" style={{ marginTop: '1rem' }}>
                <BasicLink to="/home">
                  <Option activeText={history.location.pathname === '/home' ?? undefined}>
                    <TrendingUp size={20} style={{ marginRight: '.75rem' }} />
                    Overview
                  </Option>
                </BasicLink>
                <BasicLink to="/tokens">
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'tokens' ||
                        history.location.pathname.split('/')[1] === 'token') ??
                      undefined
                    }
                  >
                    <Disc size={20} style={{ marginRight: '.75rem' }} />
                    Tokens
                  </Option>
                </BasicLink>
                <BasicLink to="/pairs">
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'pairs' ||
                        history.location.pathname.split('/')[1] === 'pair') ??
                      undefined
                    }
                  >
                    <PieChart size={20} style={{ marginRight: '.75rem' }} />
                    Pairs
                  </Option>
                </BasicLink>

                <BasicLink to="/accounts">
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'accounts' ||
                        history.location.pathname.split('/')[1] === 'account') ??
                      undefined
                    }
                  >
                    <List size={20} style={{ marginRight: '.75rem' }} />
                    Accounts
                  </Option>
                </BasicLink>
              </AutoColumn>
            )}
          </AutoColumn>
          <AutoColumn
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '10px' }}
          >
            <a href="https://app.srk.finance/#/" style={{ marginBottom: '10px' }}>
              <Option>
                <Home size={20} style={{ marginRight: '.75rem' }} />
                Home
              </Option>
            </a>
            <a href="https://twitter.com/sparkpointio" style={{ marginBottom: '10px' }}>
              <Option>
                <Twitter size={20} style={{ marginRight: '.75rem' }} />
                SparkDefi
              </Option>
            </a>

            {!below1180 && (
              <Polling style={{ marginLeft: '.5rem' }}>
                <PollingDot />
                <a href="/" style={{ color: 'white' }}>
                  <TYPE.small color={'white'}>
                    Updated {!!seconds ? seconds + 's' : '-'} ago <br />
                  </TYPE.small>
                </a>
              </Polling>
            )}
            <PoweredLogo />
          </AutoColumn>
        </DesktopWrapper>
      ) : (
        <MobileWrapper>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Title />
            {below500 && (
              <button onClick={() => setShow(!show)} style={{ background: 'transparent', border: 'none' }}>
                {' '}
                <Menu color="white" />{' '}
              </button>
            )}
          </div>
          {below500 && show && (
            <MenuLinks>
              <BasicLink to="/home">
                <Option activeText={history.location.pathname === '/home' ?? undefined}>Overview</Option>
              </BasicLink>
              <BasicLink to="/tokens">
                <Option
                  activeText={
                    (history.location.pathname.split('/')[1] === 'tokens' ||
                      history.location.pathname.split('/')[1] === 'token') ??
                    undefined
                  }
                >
                  Tokens
                </Option>
              </BasicLink>
              <BasicLink to="/pairs">
                <Option
                  activeText={
                    (history.location.pathname.split('/')[1] === 'pairs' ||
                      history.location.pathname.split('/')[1] === 'pair') ??
                    undefined
                  }
                >
                  Pairs
                </Option>
              </BasicLink>
              <BasicLink to="/accounts">
                <Option
                  activeText={
                    (history.location.pathname.split('/')[1] === 'accounts' ||
                      history.location.pathname.split('/')[1] === 'account') ??
                    undefined
                  }
                >
                  Accounts
                </Option>
              </BasicLink>
              <a href="https://app.srk.finance/#/">
                <Option>SparkDefi</Option>
              </a>
            </MenuLinks>
          )}
          {below1025 && above500 && (
            <MenuLinks>
              <BasicLink to="/home">
                <Option activeText={history.location.pathname === '/home' ?? undefined}>Overview</Option>
              </BasicLink>
              <BasicLink to="/tokens">
                <Option
                  activeText={
                    (history.location.pathname.split('/')[1] === 'tokens' ||
                      history.location.pathname.split('/')[1] === 'token') ??
                    undefined
                  }
                >
                  Tokens
                </Option>
              </BasicLink>
              <BasicLink to="/pairs">
                <Option
                  activeText={
                    (history.location.pathname.split('/')[1] === 'pairs' ||
                      history.location.pathname.split('/')[1] === 'pair') ??
                    undefined
                  }
                >
                  Pairs
                </Option>
              </BasicLink>
              <BasicLink to="/accounts">
                <Option
                  activeText={
                    (history.location.pathname.split('/')[1] === 'accounts' ||
                      history.location.pathname.split('/')[1] === 'account') ??
                    undefined
                  }
                >
                  Accounts
                </Option>
              </BasicLink>
              <a href="https://app.srk.finance/#/">
                <Option>SparkDeFi</Option>
              </a>
            </MenuLinks>
          )}
        </MobileWrapper>
      )}
    </Wrapper>
  )
}

export default withRouter(SideNav)
