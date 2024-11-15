import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home/Home'
import InstructorManagement from './components/instructorManagement/InstructorManagement';
import ActivityManagement from './components/ActivityManagement/ActivityManagement';
import StudentManagement from './components/studentManagement/StudentManagement';
import Login from './components/login/Login';
import RegisterAdmin from './components/register/Register';
import './App.css'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/register" element={<RegisterAdmin/>}></Route>
          <Route path="/home" element={<Home/>} />
          <Route path="/activities" element={<ActivityManagement/>} />
          <Route path="/instructors" element={<InstructorManagement/>} />
          <Route path="/students" element={<StudentManagement/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
