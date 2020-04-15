import React from 'react';

class AddTask extends React.Component {

  /*state = {
    title: '',
    type: 'task'
  }*/

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      type: 'task'
    };

    this.changeContent = this.changeContent.bind(this);
  }

  changeContent(event) {
    this.setState({type: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit({
      title: this.state.title,
      type: this.state.type
    });
  }


  render() {
    return (
      <div className="form">


        <form onSubmit={this.onSubmit}>
        <div className="select-title">
            <label htmlFor="title">New Task Title:</label>
            <input type="text"
                  className="form-control"
                  name="title"
                  value={this.state.title}
                  onChange={(e) => this.setState({ title: e.target.value })}
            />
        </div>


        <div className="select-type">
            <label htmlFor="type">Type:</label>
            <select name="type"
                    className="form-control"
                    onChange={/*(e) => this.setState({ type: e.target.value })*/ this.changeContent}>
              <option value="task">Task</option>
              <option value="bug">Bug</option>
              <option value="feature">Feature</option>
            </select>
          <input type="submit" className="btn" value="Add task" />
        </div>

        </form>
      </div>
    );
  }
}

export default AddTask;
