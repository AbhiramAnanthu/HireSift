import { Form, Button } from 'react-bootstrap';
function WorkSpace() {
  return (
    <>
      <Form>
        <Form.Group controlId="promptInput">
          <Form.Label>Enter Prompt:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your prompt here"
            // value={promptValue}
            // onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default WorkSpace;
