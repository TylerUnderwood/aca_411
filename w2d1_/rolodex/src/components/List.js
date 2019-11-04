import React, { Component } from 'react'

export class Rolodex extends Component {

	constructor(props) {
		super(props);
		this.state = {
			term: '',
			author: '',
			date: '',
			errorMsg: '',
			news: [],
		};
	}

	getSearchByTerm = ( searchValue ) => {
		fetch(`http://hn.algolia.com/api/v1/search?query=${ searchValue }`)
			.then( res => res.json() )
			.then( data => {
				// console.log(data)
				if ( data.hits.length === 0) {
					this.setState({news: [{title:"Sorry no hits found",author:"null",created_at:"null"}]})
				} else {
					this.setState({news: data.hits})
				}
			})
			.catch( error => this.errorMsg = error)
	};
}

export default Rolodex