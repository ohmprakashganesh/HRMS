const employees = [
  {
    id: 1,
    name: "Raju",
    email: "raju",
    password: "1111",
    tasks: [
      {
        title: "Task 1",
        description: "Complete project documentation",
        date: "2024-10-30",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Task 2",
        description: "Update team on project status",
        date: "2024-11-01",
        category: "Communication",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Task 3",
        description: "Resolve backend issues",
        date: "2024-11-03",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskNumber: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 4,
    name: "Kumar",
    email: "kumar",
    password: "4444",
    tasks: [
      {
        title: "Task 1",
        description: "Set up testing environment",
        date: "2024-10-28",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Task 2",
        description: "Conduct unit tests",
        date: "2024-11-01",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Task 3",
        description: "Analyze test results",
        date: "2024-11-03",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  }
];

const admin = {
  id: 1,
  name: "Admin",
  email: "admin",
  password: "123"
};

// export const setLocalStorage = (employees, admin) => {
//   localStorage.setItem('employees', JSON.stringify(employees));
//   localStorage.setItem('admin', JSON.stringify(admin));
// };

// export const getLocalStorage = () => {
//   const employees = JSON.parse(localStorage.getItem('employees'));
//   const admin = JSON.parse(localStorage.getItem('admin'));
//   return { employees, admin };
// };

// employees.forEach(employee => {
//   if (!employee.taskNumber) {
//     const taskCounts = {
//       active: employee.tasks.filter(task => task.active).length,
//       newTask: employee.tasks.filter(task => task.newTask).length,
//       completed: employee.tasks.filter(task => task.completed).length,
//       failed: employee.tasks.filter(task => task.failed).length
//     };
//     employee.taskNumber = taskCounts;
//   }
// });


// const employees = [
//   {
//     id: 1,
//     email: "raju",
//     password: "1111",
//     tasks: [
//       {
//         title: "Task 1",
//         description: "Complete project documentation",
//         date: "2024-10-30",
//         category: "Documentation",
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false
//       },
//       {
//         title: "Task 2",
//         description: "Update team on project status",
//         date: "2024-11-01",
//         category: "Communication",
//         active: false,
//         newTask: false,
//         completed: true,
//         failed: false
//       },
//       {
//         title: "Task 3",
//         description: "Resolve backend issues",
//         date: "2024-11-03",
//         category: "Development",
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false
//       }
//     ]
//   },{
//     id: 4,
//     email: "kumar",
//     password: "4444",
//     tasks: [
//       {
//         title: "Task 1",
//         description: "Set up testing environment",
//         date: "2024-10-28",
//         category: "Testing",
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false
//       },
//       {
//         title: "Task 2",
//         description: "Conduct unit tests",
//         date: "2024-11-01",
//         category: "Testing",
//         active: true,
//         newTask: false,
//         completed: false,
//         failed: false
//       },
//       {
//         title: "Task 3",
//         description: "Analyze test results",
//         date: "2024-11-03",
//         category: "Analysis",
//         active: false,
//         newTask: false,
//         completed: true,
//         failed: false
//       }
//     ]
//   }
// ];

// const admin = {
//   id: 1,
//   email: "admin",
//   password: "123"
// };

export const setLocalStorage = (employees, admin) => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
  
};

export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem('employees'));
  const admins = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
};