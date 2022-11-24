import React from "react";
import {
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Button
} from "reactstrap";

const Upload = () => {
    return (
        <Form>
            <FormGroup>
                <Label for="exampleEmail">
                    Email
                </Label>
                <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">
                    Password
                </Label>
                <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password placeholder"
                    type="password"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">
                    Text Area
                </Label>
                <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleFile">
                    File
                </Label>
                <Input
                    id="exampleFile"
                    name="file"
                    type="file"
                />
                <FormText>
                    This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
                </FormText>
            </FormGroup>
            
            <Button>
                Submit
            </Button>
        </Form>
    )
}

export default Upload;