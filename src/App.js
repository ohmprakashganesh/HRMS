import './index.css';
import { useContext, useEffect, useState } from 'react';
import './App.css';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard';
import AdminDashboard from './components/DashBoard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

function App() {
  const [user, setUser] = useState(null);
  const [loggedData, setLoggedData] = useState(null);
  const data = useContext(AuthContext); 
  console.log(data);

  useEffect(()=>{
    const loggedUser=localStorage.getItem('loggedUser')
    if(loggedUser){
      console.log("loggeduser",loggedUser)      
    }

  },[])


  const handleLogin = (email, password) => {
    if (email === 'admin' && password === '123') {
        setUser('admin');
        setLoggedData(data.admin)
        localStorage.setItem('loggedUser', JSON.stringify({ role: 'admin' }));
        console.log('Admin logged in');
      
   
    } else if (data && data.employees) { // Check if data and data.employees are defined
      const employee = data.employees.find((e) => email == e.email && password ==e.password);
      if (employee) {
        setLoggedData(employee);
        setUser('employee');
        localStorage.setItem('loggedUser', JSON.stringify({ role: 'employee' }));
        console.log('Employee logged in');
      } else {
        console.log('Invalid credentials');
      }
    } else {
      console.log('Invalid credentials');
    }
  };

  return (
    <div className="App">
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard  data={loggedData} out={setUser} />
      ) : (
        <EmployeeDashboard out={setUser} data={loggedData} />
      )}
    </div>
  );
}

export default App;
