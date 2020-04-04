import React from "react";
import {
  Button,
  Section,
  Box,
  Tile,
  Heading,
  Modal,
  Form,
  List,
} from "react-bulma-components";
import { OpenModal } from "./common/bulma";
import courses, { syllabus } from "./data/courses";
import { useForm, Controller } from "react-hook-form";
import "react-bulma-components/dist/react-bulma-components.min.css";

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
          {courses.map((course, index) => (
            <Course {...course} key={index} />
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
        <Syllabus courseId={props.id} />
        <StudentEnrollmentForm />
      </Tile>
    </Box>
  );
}

function Syllabus({ courseId }) {
  if (!(courseId && courseId in syllabus)) return null;
  return (
    <List hoverable>
      {syllabus[courseId].map((courseSyllabus, index) => (
        <List.Item key={index} active={index === 1 ? true : false}>
          {courseSyllabus.title}
        </List.Item>
      ))}
    </List>
  );
}

function StudentEnrollmentForm() {
  const { handleSubmit, control, errors } = useForm();

  return (
    <OpenModal modal={{ closeOnEsc: true }}>
      <Modal.Content>
        <Section style={{ backgroundColor: "white" }}>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <Form.Field>
              <Form.Label>Name</Form.Label>
              <Form.Control>
                <Controller
                  control={control}
                  as={Form.Input}
                  rules={{ required: true }}
                  name="name"
                  defaultValue=""
                  placeholder="Name"
                />
              </Form.Control>
              <Form.Help color="danger">
                {errors.name && "This Form.Field is required"}
              </Form.Help>
            </Form.Field>

            <Form.Field>
              <Form.Control>
                <Button fullwidth={true}>Submit</Button>
              </Form.Control>
            </Form.Field>
          </form>
        </Section>
      </Modal.Content>
    </OpenModal>
  );
}

export default App;
