import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./HomeView";
import AppView from "./AppView";

const skills= ["Java","Javascript (React/Node)","Python","C","Flutter","SQL","HTML/CSS","Docker/Kubernetes/Git"];


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/Skills" element={<AppView title="Skills" color="red" data={skills}/>} 
      />
      <Route path="/Test" element={<AppView title="Projects" point1="Hockey" point2="DBMS" color="lightblue"/>} />

    </Routes>
  </Router>
    
    
  );
}

export default App;
