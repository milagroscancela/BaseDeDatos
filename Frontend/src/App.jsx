import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import Home from './components/admin/home/Home'
import InstructorManagement from './components/admin/instructorManagement/InstructorManagement';
import ActivityManagement from './components/admin/activityManagement/ActivityManagement';
import StudentManagement from './components/admin/studentManagement/StudentManagement';
import ClassManagement from './components/admin/classManagement/ClassManagement';
import Login from './components/login/Login';
import RegisterAdmin from './components/register/Register';
import HomeStudent from './components/student/homeStudent/HomeStudent';
import InscriptionActivity from './components/student/inscriptionActivity/InscriptionActivity';
import RentEquipment from './components/student/rentEquipment/RentEquipment';
import Reports from './components/admin/Reports';
import { logout } from './components/services/Services';
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
            <Route path="/classes" element={<ClassManagement/>}/>
            <Route path="/reports" element={<Reports/>}/>


            <Route path="/homeStudent" element={<HomeStudent/>}></Route>
            <Route path="/Inscripciones" element={<InscriptionActivity/>}/>
            <Route path="/Alquilar" element={<RentEquipment/>}/>

          </Routes>
          
        </div>
      </Router>

    
  );
}

export default App
