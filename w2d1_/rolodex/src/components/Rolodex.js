import React, { Component } from 'react'

export class Rolodex extends Component {

	constructor(props) {
		super(props);
		this.state = {
			term: '',
			errorMsg: '',
			users: [],
		};
	}

	getSearchByTerm = (  ) => {
		fetch(`https://randomuser.me/api?results=25`)
			.then( res => res.json() )
			.then( data => {

			})
			.catch( error => this.errorMsg = error)
	}

	render() {
		return (<>
			<h2>Rolodex</h2>
		</>)
	}
}

export default Rolodex