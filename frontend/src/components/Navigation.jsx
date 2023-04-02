import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              Orders model
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/users">
                    Users
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/create-user">
                    Create user
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/form-order" class="nav-link">
                    Add Order
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
