//Base
import React from 'react'

// Styles
import styled from 'styled-components'

const ChipFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 36px;
  padding-left: 12px;
  margin: 4px;
  border-radius: 8px;
  background-color: hsl(180, 31%, 95%);

  @media (min-width: 768px) {
    margin: 0;
    margin-right: 8px;
  }
`
const TextChipFilter = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  margin-right: 8px;
  color: hsl(180, 29%, 50%);
`

const ButtonFilterClose = styled.button`
  width: 36px;
  height: 36px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 0 8px 8px 0;
  background-color: hsl(180, 29%, 50%);
  cursor: pointer;

  &:hover {
    background-color: hsl(180, 14%, 20%);
    transition: all 0.15s ease-in-out;
  }
`

const ChipFilter = ({ name }) => {
  return (
    <ChipFilterWrapper>
      <TextChipFilter>
        {name}
      </TextChipFilter>
      <ButtonFilterClose>
        X
      </ButtonFilterClose>
    </ChipFilterWrapper>
  )
}

const NavFilterWrapper = styled.nav`
  position: absolute;
  top: 100px;
  left: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 70px);
  height: auto;
  padding: 12px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

  @media (min-width: 768px) {
    top: 120px;
    left: 24px;
    height: 50px;
    width: calc(100% - 140px);
    padding: 12px 48px;
    max-width: 1060px!important;
  }

  @media (min-width: 1200px) {
    left: calc(50% - 575px);
    max-width: 1060px!important;
  }
`
const ContainerChipFilter = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
`

const ButtonClear = styled.a `
  display: inline-block;
  margir-left: 20px;
  font-size: 16px;
  font-weight: 600;
  color: hsl(180, 8%, 52%);
  cursor: pointer;

  &:hover {
    color: hsl(180, 29%, 50%);
    transition: all 0.15s ease-in-out;
    text-decoration: underline;
  }
`

const NavFilter = () => {
  return (
    <NavFilterWrapper>
      <ContainerChipFilter>
        <ChipFilter name="Frontend" />
        <ChipFilter name="CSS" />
        <ChipFilter name="JavaScript" />
      </ContainerChipFilter>

      <ButtonClear>
        Clear
      </ButtonClear>
    </NavFilterWrapper>
  )
}

export default NavFilter
