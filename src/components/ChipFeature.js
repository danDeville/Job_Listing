import React from "react"
import styled from "styled-components"

// Componente Chip
const ChipWrapper = styled.div`
  width: auto;
  height: auto;
  padding: 4px 8px;
  border-radius: 9999px;
  margin: 0 8px;
  background-color: ${props => props.primary
    ? 'hsl(180, 29%, 50%)'
    : 'hsl(180, 14%, 20%)'
  }
`
const TextChip = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  color: #fff;
  text-transform: uppercase;
`

const ChipFeature = ({ nameChip }) => {
  return (
    <ChipWrapper primary={nameChip === 'New!'}>
      <TextChip >
        {nameChip}
      </TextChip>
    </ChipWrapper>
  )
}

export default ChipFeature