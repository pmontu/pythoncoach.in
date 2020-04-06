import React, { useState, useEffect } from "react";
import {
  Button,
  Section,
  Box,
  Tile,
  Heading,
  Modal,
  Form,
} from "react-bulma-components";
import OpenModal from "./Components/Bulma/OpenModal";
import { useForm, Controller } from "react-hook-form";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { SERVER_BASE_PATH } from "./constants";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function SimpleExpansionPanel({ items }) {
  const classes = useStyles();
  if (!items) return null;

  return items.map((entry) => (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={entry.children && <ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{entry.title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          {entry.children && <SimpleExpansionPanel items={entry.children} />}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  ));
}

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`${SERVER_BASE_PATH}/courses/`)
      .then((res) => {
        if (!res.ok) throw Error("fetch courses failed");
        return res.json();
      })
      .then((courses) => setCourses(courses))
      .catch((err) => alert(err));
  }, []);

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
        <SimpleExpansionPanel items={props.children} />
        <StudentEnrollmentForm />
      </Tile>
    </Box>
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
