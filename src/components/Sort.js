import React, { Component } from 'react';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: {
                by: '',
                direction: -1
            }
        };
    }

    onClick = (sortBy, direction) => {
        this.setState({
            sort: {
                by: sortBy,
                direction: direction
            }
        });
        this.props.onSort(this.state.sort);
    }

    render() {
        const {sort} = this.state;
        return (
            <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Sort<span className="far fa-caret-square-down ml-5"></span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li onClick={() => this.onClick('name', 1)}>
                                <a role="button" className={(sort.by === "name" && sort.direction === 1) ? "sort_selected" : ""}>
                                    <span className="fa fa-sort-alpha-down pr-5">
                                    </span>
                                    Name A-Z
                                </a>
                            </li>
                            <li onClick={() => this.onClick('name', -1)}>
                                <a role="button" className={(sort.by === "name" && sort.direction === -1) ? "sort_selected" : ""}>
                                    <span className="fa fa-sort-alpha-up pr-5">
                                    </span>
                                    Name Z-A
                                </a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li onClick={() => this.onClick('status', 1)}>
                                <a role="button" className={(sort.by === "status" && sort.direction === 1) ? "sort_selected" : ""}>Active</a>
                            </li>
                            <li onClick={() => this.onClick('status', -1)}>
                                <a role="button" className={(sort.by === "status" && sort.direction === -1) ? "sort_selected" : ""}>Inactive</a>
                            </li>
                        </ul>
                    </div>
        );
    }
}

export default Sort;