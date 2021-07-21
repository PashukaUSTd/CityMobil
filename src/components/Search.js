import React, { Component } from 'react';

let textInput = React.createRef();

class Search extends Component {
    render() {
        return (
            <div className="search-container">
                <form className="search-form" onSubmit={(event) => {
                    event.preventDefault();
                    this.props.updateRequest(textInput.current.value)
                }}>
                    <input className="table-search" placeholder="Поиск" ref={textInput}></input>
                    <button type="submit" className="search-btn">Найти</button>
                </form>
            </div>
        );
    };
}

export default Search;