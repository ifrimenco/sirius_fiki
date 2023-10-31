import logo from './logo.svg';
import React from 'react';
import './App.css';
import Team from './Components/Team';
import Competition from './Components/Competition';
import Problem from './Components/Problem';
import Solution from './Components/Solution';
import CustomerSegment from './Components/CustomerSegment';
import NavBar from './Components/NavBar'
import axios from 'axios'; 

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
        <Team peopleData={projectData.people}/>
        <Problem problem={projectData.problem}/>
        <Solution solution={projectData.solution}/>
        <CustomerSegment customers={projectData.customers}/>
        <Competition companiesData={projectData.companies}/>
      </div>
      )}
    </div>
  );
}

export default App;
