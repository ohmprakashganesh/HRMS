// Navbar.js
import { InputBase, IconButton } from '@mui/material';
import { Search, Notifications, Settings } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <InputBase
        placeholder="Search anything here..."
        className="bg-gray-100 p-2 rounded-md flex-1"
      />
      <div className="flex items-center space-x-4">
        <IconButton>
          <Search />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <Settings />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
