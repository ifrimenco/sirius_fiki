import logo from './logo.svg';
import React from 'react';
import './App.css';
import Team from './Components/Team';
import Competition from './Components/Competition';
import Problem from './Components/Problem';
import KeyMetrics from './Components/KeyMetrics';
import Advantage from './Components/Advantage';
import HorizontalDivider from './Components/HorizontalDivider'
import Solution from './Components/Solution';
import CustomerSegment from './Components/CustomerSegment';
import NavBar from './Components/NavBar'
import Typography from '@mui/material/Typography';
import axios from 'axios'; 
import CostStructure from './Components/CostStructure';

function App() {

  const [projectData, setProjectData] = React.useState();

  const getData = () => {
    axios.get('projectData.json')
      .then((response) => {
        setProjectData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  React.useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App">
    <NavBar />
    
    {projectData  && (
      <div>

        <HorizontalDivider/>
        <Typography variant="h3" gutterBottom style={{fontFamily: 'Montserrat, sans-serif'}}>
          M1 - 01.11.23
        </Typography>
        <HorizontalDivider/>
        <Team peopleData={projectData.people}/>
        <HorizontalDivider/>
        <Problem problem={projectData.problem}/>
        <HorizontalDivider/>
        <Solution solution={projectData.solution}/>
        <HorizontalDivider/>
        <CustomerSegment customers={projectData.customers}/>
        <HorizontalDivider/>
        <Competition companiesData={projectData.companies}/>
        <HorizontalDivider/>
        <Advantage advantage={projectData.advantage}/>
        <HorizontalDivider/>
        <KeyMetrics metrics={projectData.metrics}/>
        <HorizontalDivider/>
        <CostStructure costStructureData={projectData.costStructure}/>
      </div>
      )}
    </div>
  );
}

export default App;
