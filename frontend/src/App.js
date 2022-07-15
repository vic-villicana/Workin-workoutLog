import './App.css';
import Home from './Home'
import MyWorkouts from './MyWorkouts'
import CreateRoutine from './pages/CreateRoutine'
import AllExercises from './AllExercises'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="myworkouts" element={<MyWorkouts/>} />
          <Route path="createworkout" element={<CreateRoutine />}/>
          <Route path="allexercises" element={<AllExercises />} />
          <Route path="*" element={<h1>404 Page Does Not Exist</h1>} />    
        </Routes> 
      </div>
    </BrowserRouter>
    
  );
}

export default App;
