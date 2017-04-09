// 리액트 인스턴스가 jsx 를 javascript 형식으로 변경해서 jsx를 쓴다면 항상 이걸 import 해야한다.
import React, { Component } from 'react';

// React.Component 를 상속함으로써, class based component 를 생성한다.
class SearchBar extends Component {

	// 생성자, state 및 props 초기화
	constructor(props) {
		super(props);
		this.state = {
			temp: ''
		};
	}

	render() {
		return (
			<div className="search-bar">
				<input onChange={onChange => this.onInputChange(event.target.value)}/>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term)
	}
}

export default SearchBar;