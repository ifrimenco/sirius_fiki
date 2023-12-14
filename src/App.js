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
import CustomerSegmentProcess from './Components/M2/CustomerSegmentProcess.js';
import InsightEffect from './Components/M2/InsightEffect';
import CustomerValidationStage from './Components/M2/CustomerValidationStage';
import Solution from './Components/M1/Solution';
import CustomerSegment from './Components/M1/CustomerSegment';

import Interviews from './Components/M4/Interviews';
import NavBar from './Components/NavBar'
import Typography from '@mui/material/Typography';
import axios from 'axios'; 
import CostStructure from './Components/M1/CostStructure';
import RevenueStream from './Components/M1/RevenueStream';
import UserPersona from './Components/M4/UserPersona';
import UserFlow from './Components/M4/UserFlow';

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
          M2 - 08.11.23
        </Typography>
        <HorizontalDivider/>
        <ProblemIdentification problems={projectData.problems}/>
        <HorizontalDivider/>
        <SolutionForProblem solutions={projectData.solutionForProblem}/>
        <HorizontalDivider/>
        <CustomerDiscovery customerDiscoveryMethods={projectData.customerDiscoveryMethods}/>
        <HorizontalDivider/>
        <CustomerSegmentProcess/>
        <HorizontalDivider/>
        <InsightEffect insightEffect={projectData.insightEffect}/>
        <HorizontalDivider/>
        <CustomerValidationStage customerValidationStage={projectData.customerValidationStage}/>
        <HorizontalDivider/>

        <Typography variant="h3" gutterBottom style={{fontFamily: 'Montserrat, sans-serif'}}>
          M3 - 15.11.23
        </Typography>

        <HorizontalDivider/>

        <Typography variant="h4" gutterBottom style={{fontFamily: 'Montserrat, sans-serif'}}>
          <a href="https://www.figma.com/file/rkLeLNuvAARqswurvuY2st/Wireframe-Designer-(Community)?type=design&node-id=2-997&mode=design">Wireframe</a>
        </Typography>
        <Typography variant="h4" gutterBottom style={{fontFamily: 'Montserrat, sans-serif'}}>
          <a href="http://sirius-landing-page.s3-website.eu-north-1.amazonaws.com/">Landing Page</a>
        </Typography>
        <HorizontalDivider/>

        <Typography variant="h3" gutterBottom style={{fontFamily: 'Montserrat, sans-serif'}}>
          M4 - 22.11.23
        </Typography>
        <HorizontalDivider/>
        <Interviews/>
        <UserPersona/>
        <UserFlow/>
      </div>
      )}
    </div>
  );
}

export default App;
