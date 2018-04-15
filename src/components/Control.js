import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort'

class Control extends Component {
    render() {
        return (
            <div class="row">
                <Search onSearch={this.props.onSearch} />
                <Sort />
            </div>
        );
    }
}

export default Control;