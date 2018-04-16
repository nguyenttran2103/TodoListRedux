import React, { Component } from 'react';
import { toggleStatus } from '../actions/index';
import { connect } from 'react-redux';
import { deleteTask } from '../actions/index';
import { closeForm } from '../actions/index';

class TaskItem extends Component {
    onChangeStatus = () => {
        this.props.onChangeStatus(this.props.task.id)
    }

    onDelete = () => {
        this.props.onDelete(this.props.task.id);
        this.props.onCloseForm();
    }

    onEdit = () => {
        this.props.onEdit(this.props.task.id);
    }

    render() {
        const { index, task } = this.props;
        return (
            <tr>
                <td>{ index + 1 }</td>
                <td>{ task.name }</td>
                <td className="text-center">
                    <span className={ task.status ? "label label-success" : "label label-danger" } 
                        onClick={this.onChangeStatus}
                        id="spnStatus">
                        { task.status ? "Active" : "Inactive" }
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-primary" onClick={this.onEdit}>
                        <span className="far fa-edit mr-5"></span>Edit
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                        <span className="far fa-trash-alt mr-5"></span>Delete
                    </button>
                </td>
            </tr>
        );
    }
}

let mapStateToProps = () => {
    return {

    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeStatus: (id) => { dispatch(toggleStatus(id)); },
        onDelete: (id) => { dispatch(deleteTask(id)); },
        onCloseForm: () => { dispatch(closeForm()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);