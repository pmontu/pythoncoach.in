const courses = [
  {
    title: "C Programming and Computer Fundaments",
    id: 1,
    difficulty: "Basic"
  },
  {
    title: "Python Scripting, Data Structures and Algorithms",
    id: 2,
    difficulty: "Intermediate"
  },
  {
    title: "Python Web Programming",
    id: 3,
    difficulty: "Advanced"
  },
  {
    title: "Object Oriented Programming in Django",
    id: 4,
    difficulty: "Advanced"
  }
];

export const syllabus = {
  1: [
    { title: "Computer Fundaments" },
    { title: "Operating System Commands" },
    { title: "Hello World Program" },
    { title: "Input & Output" },
    {
      title: "Store Data",
      children: [{ title: "Data Types (Static Typing)" }]
    },
    {
      title: "Process Data - Logic",
      children: [
        { title: "Branching & Conditions" },
        { title: "Iteration" },
        { title: "Modular programming – Functions" },
        { title: "Objects" }
      ]
    },
    { title: "Errors" },
    {
      title: "External Libraries (Open Source)",
      children: [
        { title: "Encoding & Decoding" },
        {
          title:
            "Scientific Computation, Mathematical Functions, Visualizations"
        },
        { title: "Data Persistence, File Storage & Cloud Service Providers" },
        { title: "Devices – Mobile" },
        { title: "Graphical User Interfaces" },
        { title: "Web Pages" }
      ]
    },
    { title: "Software Patterns, Concepts & Frameworks." },
    { title: "Testing, Deployment (CI / CD) & Source Code Versioning (Git)" }
  ]
};

export default courses;
