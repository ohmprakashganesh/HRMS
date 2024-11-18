// Navbar.js
import { InputBase, IconButton } from '@mui/material';
import { Search, Notifications, Settings, Message } from '@mui/icons-material';

const Navbar = () => {

  
  return (
    <div className="flex w-full items-center bg-white justify-between p-4 shadow-md">
      <search className='w-10/12 flex  px-2 py-1 rounded-md outline outline-custom-green'>
      <Search style={{ marginRight: '8px', color:'#1ABC9C' }}  />
            
            <input type='text' placeholder='input your search' className='w-3/4 hover:bg-none text-white bg-transparent outline-none ' />
      </search>
          
      <div className="flex items-center space-x-4">
        <div className='flex w-10/12 justify-between'>
        <IconButton>
          <Message sx={{color:'#1ABC9C'}}  />
        </IconButton>

        <IconButton>
          <Notifications  sx={{color:'#1ABC9C'}}/>
        </IconButton>
        </div>
      
      
      </div>
    </div>
  );
};

export default Navbar;
