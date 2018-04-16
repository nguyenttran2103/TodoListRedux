import React, { Component } from 'react';
import { addTask } from '../actions/index';
import { closeForm } from '../actions/index';
import { connect } from 'react-redux';

class TaskFrom extends Component {
        constructor(props) {
            super(props);
            this.state = {
                id: "",
                name: "",
                status: false
            }
        }

        componentWillMount() {
            if (this.props.task) {
                this.setState({
                    id: this.props.task.id,
                    name: this.props.task.name,
                    status: this.props.task.status
                });
            }
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps && nextProps.task) {
                this.setState({
                    id: nextProps.task.id,
                    name: nextProps.task.name,
                    status: nextProps.task.status
                });
            } else {
                this.setState({
                    id: "",
                    name: "",
                    status: false
                });
            }
        }

        onCloseForm = () => {
            this.props.onCloseForm();
        }

        onChange = (e) => {
            let name = e.target.name;
            let value = e.target.value;
            if (name === "status") {
                if (value === "true") {
                    value = true;
                } else {
                    value = false;
                }

            }
            this.setState({
                [name]: value
            });
        }

        onSubmit = (e) => {
            e.preventDefault();
            this.props.onAddTask(this.state);
        }

        onClear = () => {
            this.setState({
                name: '',
                status: false
            });
        }

        render() {
            return (
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            {this.state.id === "" ? "Add Task" : "Edit Task"}
                            <span className="fa fa-times-circle pull-right" onClick={this.onCloseForm}></span>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text"
                                    className="form-control"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange} />
                            </div>
                            <label>Status:</label>
                            <select className="form-control" required="required" name="status" value={this.state.status} onChange={this.onChange}>
                                <option value={true}>Active</option>
                                <option value={false}>Inactive</option>
                            </select>
                            <br />
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                                <button type="button" className="btn btn-default" onClick={this.onClear}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    }

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTask: task => { dispatch(addTask(task)); },
        onCloseForm: () => { dispatch(closeForm()); }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFrom);