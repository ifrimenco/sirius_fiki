import logo from './logo.svg';
import React from 'react';
import './App.css';
import WikiEntry1 from './Components/WikiEntry1';
import NavBar from './Components/NavBar'
import axios from 'axios'; 

function App() {

  const [projectData, setProjectData] = React.useState();

  const getData = () => {
    axios.get('projectData.json')
      .then((response) => {
        setProjectData(response.data); // Use response.data to access the JSON data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  React.useEffect(()=>{
    console.log("gheee")
    getData()
  },[])

  return (
    <div className="App">
    <NavBar />
    
    {projectData  && (
      <ul style={{listStyleType: 'none'}}>
        <li>
          <WikiEntry1 peopleData={projectData.people}/>
        </li>
      </ul>
      )}
    </div>
  );
}

export default App;
