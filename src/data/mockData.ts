export const studentProfile = {
  name: "Alex Rivera",
  department: "Computer Science Engineering",
  rollNumber: "CS21B1042",
  xp: 2850,
  level: 7,
  nextLevelXP: 3000,
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
};

export const marksData = [
  { subject: "Data Structures", marks: 92, maxMarks: 100, grade: "A+", status: "excellent", type: "Core" },
  { subject: "Algorithms", marks: 88, maxMarks: 100, grade: "A", status: "excellent", type: "Core" },
  { subject: "Database Systems", marks: 85, maxMarks: 100, grade: "A", status: "good", type: "Core" },
  { subject: "Web Development Lab", marks: 95, maxMarks: 100, grade: "A+", status: "excellent", type: "Lab" },
  { subject: "Machine Learning", marks: 78, maxMarks: 100, grade: "B+", status: "good", type: "Elective" },
  { subject: "Computer Networks", marks: 82, maxMarks: 100, grade: "A", status: "good", type: "Core" },
];

export const attendanceData = {
  overall: 89,
  bySubject: [
    { subject: "Data Structures", percentage: 95, total: 40, attended: 38 },
    { subject: "Algorithms", percentage: 92, total: 38, attended: 35 },
    { subject: "Database Systems", percentage: 85, total: 42, attended: 36 },
    { subject: "Web Development Lab", percentage: 100, total: 20, attended: 20 },
    { subject: "Machine Learning", percentage: 78, total: 36, attended: 28 },
    { subject: "Computer Networks", percentage: 88, total: 40, attended: 35 },
  ]
};

export const activities = [
  { 
    type: "Sports", 
    title: "Inter-College Basketball Tournament", 
    date: "2024-10-15",
    achievement: "Gold Medal",
    icon: "🏀"
  },
  { 
    type: "Tech", 
    title: "Smart India Hackathon 2024", 
    date: "2024-09-22",
    achievement: "Finalist",
    icon: "💻"
  },
  { 
    type: "Cultural", 
    title: "Annual Tech Fest - Dance Competition", 
    date: "2024-08-10",
    achievement: "2nd Place",
    icon: "🎭"
  },
  { 
    type: "Volunteer", 
    title: "Community Coding Workshop", 
    date: "2024-07-05",
    achievement: "Organizer",
    icon: "🤝"
  },
];

export const badges = [
  { name: "Sports Champion", icon: "🏆", earned: true },
  { name: "Tech Enthusiast", icon: "⚡", earned: true },
  { name: "Perfect Attendance", icon: "🎯", earned: false },
  { name: "Top Performer", icon: "⭐", earned: true },
  { name: "Community Leader", icon: "👥", earned: true },
  { name: "Creative Mind", icon: "🎨", earned: false },
];

export const upcomingEvents = [
  {
    title: "Mid-term Exams",
    date: "2024-11-25",
    category: "Academic",
    priority: "high"
  },
  {
    title: "Coding Bootcamp",
    date: "2024-11-20",
    category: "Workshop",
    priority: "medium"
  },
  {
    title: "Tech Talk: AI in Healthcare",
    date: "2024-11-18",
    category: "Seminar",
    priority: "low"
  },
];

export const notifications = [
  {
    title: "Assignment Due Tomorrow",
    description: "Database Systems - ER Diagram submission",
    priority: "high",
    category: "Academic",
    time: "2 hours ago"
  },
  {
    title: "New Achievement Unlocked!",
    description: "You've reached Level 7 🎉",
    priority: "low",
    category: "System",
    time: "1 day ago"
  },
  {
    title: "Attendance Warning",
    description: "Machine Learning attendance below 80%",
    priority: "medium",
    category: "Attendance",
    time: "3 days ago"
  },
];

export const insights = [
  {
    title: "Strong Performance",
    message: "You're excelling in practical subjects! Web Dev Lab shows outstanding results.",
    severity: "success"
  },
  {
    title: "Focus Area",
    message: "Machine Learning attendance needs improvement. Aim for 85%+",
    severity: "warning"
  },
  {
    title: "Level Up Soon!",
    message: "Just 150 XP away from Level 8! Complete 2 more activities.",
    severity: "info"
  },
];
