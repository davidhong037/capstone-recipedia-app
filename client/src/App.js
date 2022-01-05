import { Route, Routes, Navigate } from 'react-router-dom'
import Main from './components/Main/Main'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'



function App() {
  const user = localStorage.getItem('token')

  return (
    <Routes>
      {user && <Route path='/' element={<Main />} />}
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Navigate replace to='/login' />} />
     </Routes>
  );
}

export default App;


