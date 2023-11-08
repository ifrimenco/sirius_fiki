import logo from './logo.svg';
import React from 'react';
import './App.css';
import Team from './Components/M1/Team';
import Competition from './Components/M1/Competition';
import Problem from './Components/M1/Problem';
import KeyMetrics from './Components/M1/KeyMetrics';
import Advantage from './Components/M1/Advantage';
import HorizontalDivider from './Components/HorizontalDivider'
import ProblemIdentification from './Components/M2/ProblemIdentification';
import SolutionForProblem from './Components/M2/SolutionForProblem';
import CustomerDiscovery from './Components/M2/CustomerDiscovery';
import CustomerSegmentProcess from './Components/M2/CustomerSegmentProcess';
import Solution from './Components/M1/Solution';
import CustomerSegment from './Components/M1/CustomerSegment';
import NavBar from './Components/NavBar'
import Typography from '@mui/material/Typography';
import axios from 'axios'; 
import CostStructure from './Components/M1/CostStructure';
import RevenueStream from './Components/M1/RevenueStream';

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
        <HorizontalDivider/>
        <RevenueStream revenueStreamData={projectData.revenueStream}/>

        <HorizontalDivider/>
        <Typography variant="h3" gutterBottom style={{fontFamily: 'Montserrat, sans-serif'}}>
          M2 - 01.11.23
        </Typography>
        <HorizontalDivider/>
        <ProblemIdentification problems={projectData.problems}/>
        <HorizontalDivider/>
        <SolutionForProblem solutions={projectData.solutionForProblem}/>
        <HorizontalDivider/>
        <CustomerDiscovery customerDiscoveryMethods={projectData.customerDiscoveryMethods}/>
        <HorizontalDivider/>
        <CustomerSegmentProcess/>

      </div>
      )}
    </div>
  );
}

export default App;
