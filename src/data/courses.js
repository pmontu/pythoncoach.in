const courses = [
  {
    title: "C Programming and Computer Fundaments",
    id: 1,
    difficulty: "Basic",
  },
  {
    title: "Python Scripting, Data Structures and Algorithms",
    id: 2,
    difficulty: "Intermediate",
  },
  {
    title: "Python Web Programming",
    id: 3,
    difficulty: "Advanced",
  },
  {
    title: "Object Oriented Programming in Django",
    id: 4,
    difficulty: "Advanced",
  },
];

export const syllabus = {
  1: [
    { title: "Computer Fundaments" },
    { title: "Operating System Commands" },
    { title: "Hello World Program" },
    { title: "Input & Output" },
    {
      title: "Store Data",
      children: [{ title: "Data Types (Static Typing)" }],
    },
    {
      title: "Process Data - Logic",
      children: [
        { title: "Branching & Conditions" },
        { title: "Iteration" },
        { title: "Modular programming – Functions" },
        { title: "Objects" },
      ],
    },
    { title: "Errors" },
    {
      title: "External Libraries (Open Source)",
      children: [
        { title: "Encoding & Decoding" },
        {
          title:
            "Scientific Computation, Mathematical Functions, Visualizations",
        },
        { title: "Data Persistence, File Storage & Cloud Service Providers" },
        { title: "Devices – Mobile" },
        { title: "Graphical User Interfaces" },
        { title: "Web Pages" },
      ],
    },
    { title: "Software Patterns, Concepts & Frameworks." },
    { title: "Testing, Deployment (CI / CD) & Source Code Versioning (Git)" },
  ],
  3: [
    {
      title: "Introduction to Web Programming",
      children: [
        {
          title: "Static Web Pages",
          children: [
            { title: "HTML" },
            { title: "JavaScript" },
            { title: "CSS" },
          ],
        },
        { title: "Dynamic Web Applications" },
        { title: "Content Management Systems" },
        { title: "Open Source Web Application Programming Frameworks" },
      ],
    },
    {
      title: "Flask Python Micro Framework",
      children: [{ title: "Jinja Templating Library" }],
    },
    {
      title: "Django Python MVT Framework",
      children: [
        { title: "Request" },
        { title: "URLs" },
        { title: "Views" },
        { title: "Templates" },
        { title: "Response" },
      ],
    },
    {
      title: "User CRUD (Example)",
      children: [
        { title: "User Model" },
        { title: "User Form" },
        { title: "Class Based Views" },
      ],
    },
    {
      title: "API Design and Implementation (Django Rest Framework)",
      children: [
        { title: "Routers" },
        { title: "View Sets" },
        { title: "Permissions" },
        { title: "Throttling" },
        { title: "Query sets & Filters" },
        { title: "Serializers" },
      ],
    },
    {
      title: "ReactJS",
      children: [
        {
          title:
            "Introduction to Node.js Runtime Environment, Yarn package manager & ECMAScript 6",
        },
        { title: "React DOM, Root Element & React Component" },
        { title: "Class based Components" },
        { title: "Function Based Components" },
        { title: "React Elements & JSX" },
        { title: "Hooks – Life cycle method and state composition" },
        { title: "Fetch API" },
        { title: "Higher Order Functions - map" },
      ],
    },
    { title: "Django ORM / Sqlalchemy / Models / Migrations / Versioning" },
  ],
};

export default courses;
