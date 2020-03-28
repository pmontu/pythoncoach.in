import React from "react";
import { Button, Section, Box, Tile, Heading } from "react-bulma-components";
import courses, { syllabus } from "./data/courses";

function App() {
  return (
    <>
      <Section>
        <Box>
          <Heading size={1}>Python Coach</Heading>
          <Heading subtitle size={3}>
            Courses
          </Heading>
        </Box>
        <Tile vertical>
          {courses.map(course => (
            <Course {...course} key={course.id} />
          ))}
        </Tile>
      </Section>
    </>
  );
}

function Course(props) {
  return (
    <Box>
      <Tile vertical>
        <Heading>Course {props.id}</Heading>
        <Heading subtitle>{props.title}</Heading>
        <Button color="dark" fullwidth={false}>
          Enroll
        </Button>
      </Tile>
    </Box>
  );
}

// function CourseDescription({ src, title }) {
//   console.log({ src, title });
//   return (
//     <>
//       <h1>{title}</h1>
//       <iframe
//         src={src}
//         width="850px"
//         height="600px"
//         frameBorder="0"
//         title={title}
//       >
//         This is an embedded{" "}
//         <a target="_blank" href="https://office.com" rel="noopener noreferrer">
//           Microsoft Office
//         </a>{" "}
//         document, powered by{" "}
//         <a
//           target="_blank"
//           href="https://office.com/webapps"
//           rel="noopener noreferrer"
//         >
//           Office
//         </a>
//         .
//       </iframe>
//     </>
//   );
// }

export default App;
