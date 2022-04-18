//Base
import React from 'react'
import PropTypes from 'prop-types'

// Styles
import styled from "styled-components"

const ChipWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 20px;
  padding: 8px;
  border-radius: 8px;
  margin: 8px;
  background-color: hsl(180, 31%, 95%);
  cursor: pointer;

  @media (min-width: 768px) {
    margin: 0 8px;
  }

  &:hover {
    background-color: hsl(180, 29%, 50%);
    color: #fff;
    transition: all 0.15s ease-in-out;
  }
`

const ChipTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: hsl(180, 29%, 50%);
  text-align: center;

  &:hover {
    color: #fff;
    transition: all 0.15s ease-in-out;
  }
`

const Chip = ({ name }) => {
  return (
    <ChipWrapper>
      <ChipTitle>
        {name}
      </ChipTitle>
    </ChipWrapper>
  )
}

Chip.propTypes = {
  name: PropTypes.string.isRequired,
}

Chip.defaultProps = {
  name: 'Frontend',
}

export default Chip
