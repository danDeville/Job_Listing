//Base
import React from 'react'

// Styles
import styled from "styled-components"

const HeaderWrapper = styled.header`
  width: 100%;
  height: 150px;
  background-image: url("https://res.cloudinary.com/dz8on44po/image/upload/v1650230311/R1S2/bg-header-mobile_cj7ssd.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: hsl(180, 29%, 50%);

  @media (min-width: 768px) {
    background-image: url("https://res.cloudinary.com/dz8on44po/image/upload/v1650065724/R1S2/bg-header-desktop_czltxo.svg");
  }
`

const Header = () =>  {
  return (
    <HeaderWrapper />
  )
}

export default Header
