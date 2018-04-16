import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1 // -1: All 0: Active 1: Inactive
        };
    }

    onChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: value
        });
        this.props.onFilter(
            name === "filterName" ? value : this.state.filterName,
            name === "filterStatus" ? value : this.state.filterStatus
        );
    }

    render() {
        const { tasks } = this.props;

        let taskElements = tasks.map((task, index) => {
            return (
                <TaskItem key={task.id}
                    index={index}
                    task={task}
                    onEdit={this.props.onEdit} />
            );
        });
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">#No</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text"
                                        className="form-control"
                                        name="filterName"
                                        value={this.state.filterName}
                                        onChange={this.onChange} />
                                </td>
                                <td>
                                    <select className="form-control"
                                        name="filterStatus"
                                        value={this.state.value}
                                        onChange={this.onChange}>
                                        <option value={-1}>All</option>
                                        <option value={0}>Active</option>
                                        <option value={1}>Inactive</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            {/* TaskItem */}
                            {taskElements}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    };
}

export default connect(mapStateToProps)(TaskList);