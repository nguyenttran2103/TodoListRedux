import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ""
        };
    }

    onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    onSearch = () => {
        this.props.onSearch(this.state.keyword);
    }

    render() {
        return (
            <div className="input-group">
                <input type="text" 
                    className="form-control" 
                    placeholder="Input keyword..."
                    name="keyword"
                    value={this.state.keyword}
                    onChange={this.onChange} />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick={this.onSearch}>
                        <span className="fa fa-search mr-5"></span>Search
                    </button>
                </span>
            </div>
        );
    }
}

export default Search;