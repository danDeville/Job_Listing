//Base
import React from 'react'
import PropTypes from 'prop-types'

// Styles
import styled from "styled-components"


const CardWrapper = styled.aside`
  position: relative;
  display: flex;
  flex-flow: column;
  ${'' /* width: 100%; */}
  height: 280px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 110px;
  }

  @media (min-width: 1024px) {
    padding: 20px 40px;
  }

  &:hover {
    border-left: 4px solid hsl(180, 29%, 50%);
    transition: all 0.25s ease-in-out;
  }
`
const ContainerInfo = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 16px;
  height: 40%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);

  @media (min-width: 768px) {
    width: 60%;
    height: auto;
    align-items: center;
    margin-top: 0;
    border-bottom: none;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`
const LogoCompany = styled.img`
  position: absolute;
  top: -65px;
  left: 0;
  width: 55px;
  height: 55px;

  @media (min-width: 768px) {
    position: relative;
    top: 0;
    width: 85px;
    height: 85px;
    margin-right: 24px;
  }
`

const ContainerText = styled.div`
  display: column
`

const ContainerCompanyInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const ContainerSubtitle = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
  width: auto;
`

const TextSubtitle = styled.p`
  font-size: 16px;
  margin: 0px;
  color: hsl(180, 29%, 50%);
  font-weight: 600
`

const TextTitle = styled.h2`
  font-size: 20px;
  margin: 16px 0;
  color: hsl(180, 14%, 20%);
  cursor: pointer;

  @media (min-width: 768px) {
    margin: 12px 0;
  }

  &:hover {
    color: hsl(180, 29%, 50%);
    transition: all 0.15s ease-in-out;
  }
`

const InfoText = styled.p`
  margin: 0;
  padding-right:16px;
  font-size: 16px;
  font-weight: 400;
  color: hsl(180, 8%, 52%);

  &:after {
    content: ' ';
    height: 5px;
    width: 5px;
    background-color: hsl(180, 8%, 52%);
    border-radius: 50%;
    display: inline-block;
    margin-left: 20px;
  }

  &:last-child {
    &:after { display: none; }
  }
`

const ContainerChips = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 16px;

  @media (min-width: 768px) {
    width: 40%;
    align-items: center;
    justify-content: flex-end;
    margin-top: 0;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`

const Card = ({ image, name, company, time, contract, office, children, ChipFeature}) => {
  return (
    <CardWrapper className="animate__animated animate__fadeInDownBig">
      <ContainerInfo>
        <LogoCompany src={image} alt={name}/>
        <ContainerText>
        <ContainerSubtitle>
          <TextSubtitle>
            {company}
          </TextSubtitle>

            {ChipFeature}
        </ContainerSubtitle>

          <TextTitle>
            {name}
          </TextTitle>

          <ContainerCompanyInfo>
            <InfoText>
              {time}
            </InfoText>
            <InfoText>
              {contract}
            </InfoText>
            <InfoText>
              {office}
            </InfoText>
          </ContainerCompanyInfo>
        </ContainerText>
      </ContainerInfo>

      <ContainerChips>
        {children}
      </ContainerChips>
    </CardWrapper>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  contract: PropTypes.string.isRequired,
  office: PropTypes.string.isRequired
}

Card.defaultProps = {
  image: 'https://res.cloudinary.com/dz8on44po/image/upload/v1650071603/R1S2/photosnap_gnlw2u.svg',
  name: 'Senior Frontend Developer',
  company: 'Photosnap',
  time: '1d ago',
  contract: 'Full Time',
  office: 'Remote'
}

export default Card