import React from "react";
import {
  Button,
  Section,
  Box,
  Tile,
  Heading,
  Modal,
  Form
} from "react-bulma-components";
import { OpenModal } from "./common/bulma";
import courses from "./data/courses";
import { useForm } from "react-hook-form";
import "react-bulma-components/dist/react-bulma-components.min.css";

const { Field, Control, Label, Input, Help } = Form;

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
        <StudentEnrollmentForm />
      </Tile>
    </Box>
  );
}

function StudentEnrollmentForm() {
  const { register, handleSubmit } = useForm();

  return (
    <OpenModal modal={{ closeOnEsc: true }}>
      <Modal.Content>
        <Section style={{ backgroundColor: "white" }}>
          <form onSubmit={handleSubmit(data => console.log(data))}>
            <Field>
              <Label>Name</Label>
              <Control>
                <Input name="name" placeholder="Name" domRef={register} />
              </Control>
            </Field>

            <Field>
              <Control>
                <Button type="primary" fullwidth={true}>
                  Submit
                </Button>
              </Control>
            </Field>
          </form>
        </Section>
      </Modal.Content>
    </OpenModal>
  );
}

export default App;
