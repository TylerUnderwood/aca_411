import React, { Component } from 'react';
//import './App.css';
import './styles/style.css';
import List from './components/List';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			items: [],
			isEditing: false,
		};
	}

	onChange = (event) => {
		this.setState({ term: event.target.value });
	}

  	onSubmit = (event) => {
    	event.preventDefault();
		this.setState({
			term: '',
			items: [...this.state.items, this.state.term]
		});
	}

	render() {
		return (
			<section className="frame gutter">
				<div className="wrapper">
					<form className="single-form" onSubmit={this.onSubmit}>
						<input value={this.state.term} onChange={this.onChange} />
						<button>Submit</button>
					</form>
					<List items={this.state.items} />
				</div>
			</section>
		);
	}
}

export default App;
