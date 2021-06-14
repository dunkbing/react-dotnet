import React from "react";
import {Button, Form, Segment} from "semantic-ui-react";
import {Activity} from "../../../app/models/activity";

interface Props {
  activity: Activity;
  closeForm: () => void;
}

export default function ActivityForm({ activity: {title, description, category, date, city, venue}, closeForm }: Props) {
  return (
    <Segment clearing>
      <Form>
        <Form.Input placeholder='Title' value={title} />
        <Form.TextArea placeholder='Description' value={description} />
        <Form.Input placeholder='Category' value={category} />
        <Form.Input placeholder='Date' value={date} />
        <Form.Input placeholder='City' value={city} />
        <Form.Input placeholder='Venue' value={venue} />
        <Button floated={'right'} positive type={'submit'} content='Submit' />
        <Button onClick={closeForm} floated={'right'} positive type={'button'} content='Cancel' />
      </Form>
    </Segment>
  );
}