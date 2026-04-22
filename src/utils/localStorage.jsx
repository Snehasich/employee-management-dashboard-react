const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare report",
        taskDescription: "Create monthly sales report",
        taskDate: "2026-04-18",
        category: "Reports"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Email client",
        taskDescription: "Send project updates to client",
        taskDate: "2026-04-15",
        category: "Communication"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team meeting",
        taskDescription: "Attend weekly sync meeting",
        taskDate: "2026-04-19",
        category: "Meetings"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix bug #101",
        taskDescription: "Resolve login issue",
        taskDate: "2026-04-18",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code review",
        taskDescription: "Review teammate’s PR",
        taskDate: "2026-04-16",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy update",
        taskDescription: "Push new release to server",
        taskDate: "2026-04-14",
        category: "Deployment"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write tests",
        taskDescription: "Add unit tests for API",
        taskDate: "2026-04-20",
        category: "Testing"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design homepage",
        taskDescription: "Create UI mockups",
        taskDate: "2026-04-18",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update logo",
        taskDescription: "Revise branding assets",
        taskDate: "2026-04-12",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "User testing",
        taskDescription: "Conduct UX testing session",
        taskDate: "2026-04-21",
        category: "Research"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database backup",
        taskDescription: "Backup production database",
        taskDate: "2026-04-18",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize queries",
        taskDescription: "Improve DB performance",
        taskDate: "2026-04-13",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server migration",
        taskDescription: "Move to new cloud server",
        taskDate: "2026-04-10",
        category: "Infrastructure"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Monitor logs",
        taskDescription: "Check system logs for errors",
        taskDate: "2026-04-19",
        category: "Monitoring"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Security audit",
        taskDescription: "Review system vulnerabilities",
        taskDate: "2026-04-22",
        category: "Security"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Marketing campaign",
        taskDescription: "Launch social media ads",
        taskDate: "2026-04-18",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Content writing",
        taskDescription: "Write blog post",
        taskDate: "2026-04-11",
        category: "Content"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "SEO optimization",
        taskDescription: "Improve website SEO",
        taskDate: "2026-04-20",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email campaign",
        taskDescription: "Send promotional emails",
        taskDate: "2026-04-09",
        category: "Marketing"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));         // convert to string
  localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));      // convert to array
  const admin = JSON.parse(localStorage.getItem("admin"));
  return {employees, admin};
}