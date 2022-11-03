import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./HomeView";
import AppView from "./AppView";
import redBackground from "./images/red-background.jpg"
import blueBackground from "./images/blue-background.jpg"
import greenBackground from "./images/green-background.jpg"
import orangeBackground from "./images/orange-background.jpg"



const skills= ["Java","Javascript (React/Node)","Python","C","Flutter","SQL","HTML/CSS","Docker/Kubernetes/Git"];
const workExperience= ["Android Developer @ Arbortronics Control Systems","Deployed java code on Android OS card payment machines to be implemented across Canada",
"Created an interactive menu on touchscreen payment machines attached to vending machines",
"Tested and deployed software updates to card payment machines"
];
const contact= ["Phone: 647-633-2626","Email: anthonyvalenti12@icloud.com","LinkedIn: https://www.linkedin.com/in/anthonyvalenti2001"];
const education= ["Toronto Metropolitan University","Graduating Spring 2023","Relevant Courses: ","Data Structures & Algos",
"Software Design & Testing",
"Data Engineering",
"Machine Learning",
"Software Architecture"
];





function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/Skills" element={<AppView title="Skills" data={skills} background={redBackground}/>} />
      <Route path="/Experience" element={<AppView title="Experience" background={blueBackground} data={workExperience}/>} />
      <Route path="/Contact" element={<AppView title="Contact Me" background={greenBackground} data={contact}/>} />
      <Route path="/Education" element={<AppView title="Education" background={orangeBackground} data={education}/>} />

    </Routes>
  </Router>
    
    
  );
}

export default App;
