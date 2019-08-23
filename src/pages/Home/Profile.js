import React, { Component } from "react";
import "./profile.scss";
import ProfilePic from "../../images/dpimage.png";
import {
  Container,
  Button,
  Checkbox,
  Form,
  Grid,
  Header,
  Image,
  Icon
} from "semantic-ui-react";
const src = "../../images/dpimage.png";

class Profile extends Component {
  // state = {
  //   src: ProfilePic
  // };
  render() {
    return (
      <div>
        <Container>
          <Header as="h3" dividing>
            Profile Information
          </Header>

          <Form>
            <Form.Group inline>
              <Form.Input
                label="First Name"
                placeholder="First name"
                width={8}
              />
            </Form.Group>

            <Form.Group inline>
              <Form.Input label="Last Name" placeholder="Last name" width={8} />
            </Form.Group>
            <Form.Group inline>
              <label>Gender</label>
              <Form.Radio
                label="Male"
                value="male"
                // checked={value === "sm"}
                // onChange={this.handleChange}
              />
              <Form.Radio
                label="Female"
                value="female"
                // checked={value === "md"}
                // onChange={this.handleChange}
              />
              <Form.Radio
                label="Other"
                value="other"
                // checked={value === "lg"}
                // onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group inline>
              <Form.Input label="Street  " placeholder="Street Address" />
              <Form.Input label="Apt#" placeholder="Apt#" />
            </Form.Group>
            <Form.Group inline>
              <Form.Select label="Country" placeholder="Select" />
              <Form.Select label="State" placeholder="Select" />
            </Form.Group>
            <Form.Group inline>
              <Form.Input label="PIN/ZIP " placeholder="PIN/ZIP " />
            </Form.Group>
            <Form.Group inline>
              <Form.Input label="Phone" placeholder="(---)" />
              <Form.Input placeholder="(------)" />
            </Form.Group>

            <div className="prof-img">
              <Header size="small">Upload Profile Picture</Header>

              <Image src={ProfilePic} size="small" />
              <Button
                content="Choose File"
                labelPosition="left"
                icon="file"
                onClick={() => this.fileInputRef.current.click()}
              />
              <input
                ref={this.fileInputRef}
                type="file"
                hidden
                onChange={this.fileChange}
              />
            </div>
            <Form.Group inline centered>
              <Form.Button>Prev</Form.Button>
              <Form.Button>Next</Form.Button>
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Profile;
