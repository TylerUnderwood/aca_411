import React, { Component } from 'react'

export class NewsFeed extends Component {

	constructor(props) {
		super(props);
		this.state = {
			term: '',
			errorMsg: '',
			news: [],
		};
	}

	getSearchResults = ( searchValue ) => {
		fetch(`http://hn.algolia.com/api/v1/search?query=${ searchValue }`)
			.then( res => res.json() )
			.then( parsedJSON => {
				console.log(parsedJSON)
				this.setState({news: parsedJSON.hits}) 
			})
			// .catch( error => this.errorMsg = error))
	};

	onChange = (event) => {
		this.setState({ term: event.target.value });
	}

  	onSubmit = (event) => {
    	event.preventDefault();
		this.getSearchResults(this.state.term)
	}

	render() {
		return (
			<div>
				<h2>The News</h2>
				<div className="frame">
					<h6>Search for a headline</h6>
					<form className="single-form m-t" onSubmit={this.onSubmit}>
						<input value={this.state.term} onChange={this.onChange}/>
						<button>Search</button>
					</form>
				</div>
				<ul>
					{this.state.news.map( (news) => {
						return (
							<li className="m-t">
								<code>
									{news.title}
								</code>
							</li>	
						)
					})}
				</ul>
			</div>
		)
	}
}

export default NewsFeed
