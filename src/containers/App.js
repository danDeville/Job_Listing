//Base
import React,{useEffect, useState}from 'react'

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
  const API = 'https://jobs-data-api.herokuapp.com/jobs'
  const [jobs, setJobs] = useState()
  const fetchData = async () => {
    const response = await fetch(API)
    console.log(response.status)
    const data = await response.json()
    setJobs(data)
    console.log(data)
    // return data
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AppWrapper>
      <Header/>
      <NavFilter/>
      <ContainerCards>
        {!jobs
          ? 'Cargando....'
          : jobs.map((job, index) => {
            return (
              <Card
                key={index}
                id={job.id}
                image={job.image}
                name={job.position}
                company={job.company}
                time={job.timePublication}
                contract={job.time}
                office={job.location}
                ChipFeature={
                  job.chip.map((ch, index) => {
                    return (
                      <ChipFeature
                        key={index}
                        nameChip={ch}
                      />
                    )
                  })
                }
              >
                {job.technologies.map((tech, index) => {
                  return (
                    <Chip key={index} name={tech} />
                  )
                  })
                }
              </Card>
            )
          })
        }
      </ContainerCards>
    </AppWrapper>
  )
}

export default App
