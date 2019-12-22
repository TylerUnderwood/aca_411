import React from 'react'
import { 
	Container, 
	Paper,
} from '@material-ui/core';


const ListingEntry = ( props ) => {

	const id = props.match.params.id
	const listing = props.business.find( item => item.id == id )
	
    return (
		<Container maxWidth="sm" className="listing-container pad">
            <Paper className="listing-paper pad">
                <h2>{listing.name}</h2>
				<address>{listing.address}</address>
				<span>{listing.hours}</span>
				<p>{listing.description}</p>
            </Paper>
        </Container>
    )
}

export default ListingEntry