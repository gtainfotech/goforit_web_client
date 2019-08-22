import React, { Component } from "react";
import { Grid, Image, Menu, Label, Input } from "semantic-ui-react";
import "./postlogin.scss";

class PostLogin extends Component {
  state = { activeItem: "inbox" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="postLoginHome">
        <Grid>
          <Grid.Column width={5}>
            <Menu vertical>
              <Menu.Item
                name="Home"
                active={activeItem === "inbox"}
                onClick={this.handleItemClick}
              >
                Home
              </Menu.Item>

              <Menu.Item
                name="Advertisements"
                active={activeItem === "spam"}
                onClick={this.handleItemClick}
              >
                Advertisements
              </Menu.Item>

              <Menu.Item
                name="Loans"
                active={activeItem === "updates"}
                onClick={this.handleItemClick}
              >
                Loans
              </Menu.Item>
              <Menu.Item
                name="Matchings"
                active={activeItem === "updates"}
                onClick={this.handleItemClick}
              >
                Matchings1
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column width={11} />
        </Grid>
      </div>
    );
  }
}

export default PostLogin;
