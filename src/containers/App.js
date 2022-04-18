//Base
import React from 'react'

// Components
import Header from '../components/Header'
import NavFilter from '../components/NavFilter'
import Card from '../components/Card'
import Chip from '../components/Chip'
import ChipFeature from '../components/ChipFeature'

// Styles
import styled from 'styled-components'

const AppWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  background-color: hsl(180, 52%, 96%)
`
const ContainerCards = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 48px;
  width: 100%;
  height: auto;
  max-width: 1200px;
  padding: 1.5rem;
  margin: 0 auto;
  margin-top: 80px;
  overflow-x: hidden;
  box-sizing: border-box;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
    margin-top: 50px;
  }
`

const App = () =>{
  return (
    <AppWrapper>
      <Header/>
      <NavFilter/>
      <ContainerCards>
        <Card
          image="https://res.cloudinary.com/dz8on44po/image/upload/v1650071603/R1S2/photosnap_gnlw2u.svg"
          name="Senior Frontend Developer"
          company="Photosnap"
          time="1d ago"
          contract="Full Time"
          office="Remote"
          ChipFeature= {
            <>
              <ChipFeature nameChip="New!"/>
              <ChipFeature nameChip="Featured" />
            </>
          }
        >
          <Chip name="Frontend"/>
          <Chip name="Senior"/>
          <Chip name="HTML"/>
          <Chip name="CSS"/>
          <Chip name="JavaScript"/>
        </Card>

        <Card
          image="https://res.cloudinary.com/dz8on44po/image/upload/v1650230754/R1S2/manage_riflv1.svg"
          name="Senior Developer"
          company="Manage"
          time="1d ago"
          contract="Part Time"
          office="Remote"
          ChipFeature= {
            <>
              <ChipFeature nameChip="New!"/>
              <ChipFeature nameChip="Featured"/>
            </>
          }
        >
          <Chip name="Fullstack"/>
          <Chip name="Midweight"/>
          <Chip name="Python"/>
          <Chip name="React"/>
        </Card>

        <Card
          image="https://res.cloudinary.com/dz8on44po/image/upload/v1650230753/R1S2/account_rh1hvb.svg"
          name="Junior Frontend Developer"
          company="Manage"
          time="2d ago"
          contract="Part Time"
          office="USA Only"
          ChipFeature= {
            <>
              <ChipFeature nameChip="New!"/>
            </>
          }
        >
          <Chip name="Frontend"/>
          <Chip name="Junior"/>
          <Chip name="React"/>
          <Chip name="Sass"/>
          <Chip name="JavaScript"/>
        </Card>


        <Card
          image="https://res.cloudinary.com/dz8on44po/image/upload/v1650230766/R1S2/myhome_qvmk1m.svg"
          name="Junior Frontend Developer"
          company="MyHome"
          time="5d ago"
          contract="Contract"
          office="USA Only"
        >
          <Chip name="Frontend"/>
          <Chip name="Junior"/>
          <Chip name="CSS"/>
          <Chip name="JavaScript"/>
        </Card>

        <Card
          image="https://res.cloudinary.com/dz8on44po/image/upload/v1650230759/R1S2/loop-studios_dckrlt.svg"
          name="Software Engineer"
          company="Loop Studios"
          time="1w ago"
          contract="Full Time"
          office="Worldwide"
        >
          <Chip name="Fullstack"/>
          <Chip name="Midweight"/>
          <Chip name="JavaScript"/>
          <Chip name="Sass"/>
          <Chip name="Ruby"/>
        </Card>

        <Card
          image="https://res.cloudinary.com/dz8on44po/image/upload/v1650232474/R1S2/faceit_1_jmfrv9.svg"
          name="Junior Backend Developer"
          company="FaceIt"
          time="2w ago"
          contract="Full Time"
          office="UK Only"
        >
          <Chip name="Backend"/>
          <Chip name="Junior"/>
          <Chip name="Ruby"/>
          <Chip name="RoR"/>
        </Card>

        <Card
          image="https://res.cloudinary.com/dz8on44po/image/upload/v1650232842/R1S2/shortly_2_t8lqcm.svg"
          name="Junior Developer"
          company="Shortly"
          time="2w ago"
          contract="Full Time"
          office="Worldwide"
        >
          <Chip name="Frontend"/>
          <Chip name="Junior"/>
          <Chip name="HTML"/>
          <Chip name="Sass"/>
          <Chip name="JavaScript"/>
        </Card>

        <Card
          image="https://res.cloudinary.com/dz8on44po/image/upload/v1650230757/R1S2/insure_zbm71t.svg"
          name="Junior Frontend Developer"
          company="Insure"
          time="2w ago"
          contract="Full Time"
          office="USA Only"
        >
          <Chip name="Frontend"/>
          <Chip name="Junior"/>
          <Chip name="Vue"/>
          <Chip name="JavaScript"/>
          <Chip name="Sass"/>
        </Card>

        <Card
          image="https://res.cloudinary.com/dz8on44po/image/upload/v1650230750/R1S2/eyecam-co_jahkna.svg"
          name="Full Stack Developer"
          company="Eyecam Co."
          time="3w ago"
          contract="Full Time"
          office="Worldwide"
        >
          <Chip name="Fullstack"/>
          <Chip name="Midweight"/>
          <Chip name="JavaScript"/>
          <Chip name="Django"/>
          <Chip name="Python"/>
        </Card>

        <Card
          image="https://res.cloudinary.com/dz8on44po/image/upload/v1650232477/R1S2/the-air-filter-company_1_efwfby.svg"
          name="Front-end"
          company="The Air Filter Company"
          time="1mo ago"
          contract="Part Time"
          office="Worldwide"
        >
          <Chip name="Frontend"/>
          <Chip name="Junior"/>
          <Chip name="React"/>
          <Chip name="JavaScript"/>
          <Chip name="Sass"/>
        </Card>
      </ContainerCards>
    </AppWrapper>
  )
}

export default App
