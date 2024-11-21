import './index.css';
import './App.css';
import Login from './Forms/Login';
import SignUp from './Forms/SignUp';
import Otp from './Forms/Otp';
import Dashboard from './Dashboard/Dashboard';
import Plan from './Dashboard/Plan/Plan';
import Attendance from './Dashboard/Attendance/Attendance';


function App() {

  return (

    <div className="App">
     {/* <Login /> */}
     {/* <SignUp /> */}
     {/* <Otp /> */}
     <Dashboard/>
     {/* <Plan/> */}
     {/* <Attendance/> */}
    </div>
  );
}

export default App;
