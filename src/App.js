import './index.css';
import { useState } from 'react';
import './App.css';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard';
import AdminDashboard from './components/DashBoard/AdminDashboard';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == 'user' && password == '123') {
      setUser('Employee');
      console.log('Employee logged in');
    } else if (email == 'admin' && password == '123') {
      setUser('admin');
      console.log('Admin logged in');
    } else {
      console.log('Invalid credentials');
    }
  };

  return (
    <div className="App">
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )}
    </div>
  );
}

export default App;
