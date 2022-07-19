// import './App.css';
// import UserInfoDisplayByClass2 from './UserInfoDispayByClass2';
// import UserInfoDisplay from './UserInfoDisplay'
// import Clock from './clock';
// import UserInfoDisplayByClass from './UserInfoDisplayByClass'
// import login from './login';
// import UserInfoDisplayByClass2 from './UserInfoDispayByClass2';
import Navbar from './Navbar';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import User from './User';
import Userlogin from './Userlogin';
// import Counter from './Counter';
function App() {
  return (
    <>
    <Router>
    <Navbar title="WactOn"/>
      <Routes>
          {/* <Route path='/'></Route> */}
          <Route exact path='/signup' element={<SignUp/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/user/:username' element={<User/>}></Route>
          <Route exact path='/Userlogin/:email' element={<Userlogin/>}></Route>
          </Routes>
          
    </Router>
    </>
  );
}

export default App;
