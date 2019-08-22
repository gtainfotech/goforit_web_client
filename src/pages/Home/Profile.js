import React, { Component } from "react";
class Profile extends Component {
  render() {
    return (
      <div>
        <div class="ui grid segment">
          <div class="ten wide column">
            <form class="ui form">
              <h4 class="ui dividing header">Personal Details</h4>
              <div class="inline fields">
                <div class="eight wide field">
                  <label>Name</label>
                  <input
                    type="text"
                    name="first-name"
                    placeholder="First Name"
                  />
                </div>

                <div class="eight wide field">
                  <input type="text" name="last-name" placeholder="Last Name" />
                </div>
              </div>
              <div class="inline fields">
                <label>Gender</label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="male" checked="checked" />
                    <label>Male</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="female" />
                    <label>Female</label>
                  </div>
                </div>
              </div>
              <div class="inline fields">
                <div class="ten wide field">
                  <label> Address</label>
                  <input
                    type="text"
                    name="street-name"
                    placeholder="Street Address"
                  />
                </div>
                <div class="six wide field">
                  <input type="text" name="street-name" placeholder="Apt#" />
                </div>
              </div>
              <div class="inline fields">
                <div class="eight wide field">
                  <label> Country</label>
                  <select class="ui fluid dropdown">
                    <option value="">Select</option>
                    <option value="CA">Canada</option>
                  </select>
                </div>
                <div class="eight wide field">
                  <label> State</label>
                  <select class="ui fluid dropdown">
                    <option value="">Select</option>
                    <option value="ON">Ontario</option>
                  </select>
                </div>
              </div>
              <div class="inline fields">
                <div class="ten wide field">
                  <label> ZIP/PIN </label>
                  <input type="text" name="pin" placeholder="ZIP/PIN Code" />
                </div>
              </div>
              <div class="inline fields">
                <div class="four wide field">
                  <label>Phone Number</label>
                  <input type="text" name="code" placeholder="(---)" />
                </div>

                <div class="eight wide field">
                  <input type="text" name="phone-number" />
                </div>
              </div>
            </form>
          </div>
          <div class="six wide column">
            <p>Select an image for your profile picture</p>
            <img src="#" />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
