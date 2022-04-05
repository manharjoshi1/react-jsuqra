import React from "react";
import "./style.css";

//REACT
//input
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      visibility: false,
      blog: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
  }
  handleClick() {
    this.setState({
      visibility: !this.state.visibility
    });
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  submit() {
    this.setState(
      (state = {
        blog: [...state.blog, state.input]
      })
    );
  }
  edit() {
      this.setState({
        blog: this.state.blog.splice(index,1,this.state.value)
      })
  }
  delete(index) {
    this.setState({ blog: this.state.blog.splice(index,1)
  })}
  render() {
    const list = this.state.blog.map((i,index) => {
      return (
        <div>
          <li key={index}> {i} </li>
          <button onCLick={this.delete} class="btn btn-danger">
            {" "}
            Delete{" "}
          </button>
          <button onClick={this.edit} class="btn btn-warning">
            {" "}
            Edit{" "}
          </button>
        </div>
      );
    });
    if (visibility===false) {
      return (
        <div>
          <strong>Welcome to Blogging Website</strong>
          <button class="btn btn-primary" onClick={this.handleClick}>
            Insert Blog
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <strong>Welcome to Blogging Website</strong>
          <button class="btn btn-primary" onClick={this.handleClick}>
            Cancel Blog
          </button>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Type your text here"
          />
          <button class="btn btn-success" onClick={this.submit}>
            Post
          </button>
          <ul>{this.list}</ul>
        </div>
      );
    }
  }
}


