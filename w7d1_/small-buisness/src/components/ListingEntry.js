import React from 'react'
import { Link } from 'react-router-dom'
import { 
	Container,
	Typography,
} from '@material-ui/core'


const Listing = () => {
    return (
		<Container maxWidth="sm">
			<Typography variant="h3">Listing</Typography>
			<Link to={`/`}>Home</Link>
		</Container>
    )
}

export default Listing