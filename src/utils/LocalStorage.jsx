const employees = [
    {
      id: 1,
      name: "raju",
      pass: "1111",
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
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Task 3",
          description: "Resolve backend issues",
          date: "2024-11-03",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 2,
      name: "daju",
      pass: "2222",
      tasks: [
        {
          title: "Task 1",
          description: "Review PRs for frontend",
          date: "2024-10-28",
          category: "Code Review",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Task 2",
          description: "Update project requirements",
          date: "2024-11-02",
          category: "Planning",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        },
        {
          title: "Task 3",
          description: "Fix layout bugs",
          date: "2024-11-04",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 3,
      name: "raj3",
      pass: "3333",
      tasks: [
        {
          title: "Task 1",
          description: "Implement authentication",
          date: "2024-10-29",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Task 2",
          description: "Prepare demo for client",
          date: "2024-11-01",
          category: "Presentation",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Task 3",
          description: "Refactor code for optimization",
          date: "2024-11-05",
          category: "Optimization",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 4,
      name: "kumar",
      pass: "4444",
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
      ]
    }
  ];
  
  const admin = {
    id: 1,
    name: "raju",
    pass: "123"
  };
  
  export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }
  export const getLocalStorage=()=>{
    const empdata = JSON.parse(localStorage.getItem('employees'))
  const admdata = JSON.parse(localStorage.getItem('admin'))
    // console.log(data);
  }