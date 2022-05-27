import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import TutorialsList from "./tutorials-list.component";

export default class AddTutorial extends Component {
  constructor(props) 
  {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.saveTutorial2 = this.saveTutorial2.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);

    this.state = 
    {
      id: null,
      title: "",
      description: "", 
      password: "",
      published: false,
      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  saveTutorial() {
    var data = 
    {
      title: this.state.title,
      description: this.state.description,
      password:this.state.password,
      destinity:'sql'
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          password:response.data.password,
          published: response.data.published,
          destinity:'sql',
          submitted: true
          
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
      this.newTutorial() ;
  }
  saveTutorial2() {
    var data = 
    {
      title: this.state.title,
      description: this.state.description,
      password:this.state.password,
      destinity:'redis'
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          password:response.data.password,
          published: response.data.published,
          destinity:'sql',
          submitted: true
          
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
      this.newTutorial() ;
  }
  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,
      password:"",
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Return
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Name</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Email</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                name="password"
              />
            </div>
            <br/>
            <button onClick={this.saveTutorial} className="btn btn-success">
              Save SQL
            </button>

            <button style={{marginLeft:40}} onClick={this.saveTutorial2} className="btn btn-success">
              Save REDIS
            </button>
            <div >
              <TutorialsList></TutorialsList>
            </div>
          </div>

          
        )}
      </div>
    );
  }
}
