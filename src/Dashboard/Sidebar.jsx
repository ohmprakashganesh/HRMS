// Sidebar.js
import { List, ListItem, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import { Home, Event, Payments, Group, InsertChart, Category } from '@mui/icons-material';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <Home /> },
    { text: 'Attendance', icon: <Event /> },
    { text: 'Payroll', icon: <Payments /> },
    { text: 'Calendar', icon: <Event /> },
    { text: 'Awards', icon: <InsertChart /> },
    { text: 'Employee', icon: <Group /> },
    { text: 'Leave', icon: <Event /> },
    { text: 'Department', icon: <Category /> },
    { text: 'Training', icon: <Event /> },
    { text: 'Reports', icon: <Event /> },
    { text: 'Project Management', icon: <Event /> },
    { text: 'Device', icon: <Event /> },




  ];

  return (
    <div className="w-64  bg-slate-600 ml-3 min-h-screen h-full p-4">
      <h2 className="text-xl font-bold text-green-600">HRMS</h2>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <div className="mt-auto flex items-center gap-2 p-4">
        <Avatar src="/path/to/avatar.jpg" />
        <div>Welcome back 👋 Johnathan</div>
      </div>
    </div>
  );
};

export default Sidebar;
